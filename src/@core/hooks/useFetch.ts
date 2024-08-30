'use client'
import { useState, useEffect, useRef } from "react";
import axios, { AxiosError, AxiosHeaders, AxiosResponse, Method } from "axios";
import { addErrorHandler, axiosInstance } from "@core/axios/axiosHelper";


interface FetchOptions {
    url: string;
    method: Method;
    headers?: AxiosHeaders;
    body?: any;
    params?: Record<string, any>;
}

interface FetchState<T> {
    data?: T;
    loading: boolean;
    error?: AxiosResponse | undefined;
}

function useFetch<T>({
    url,
    method,
    body,
    params,
}: FetchOptions): FetchState<T> {
    const [data, setData] = useState<T | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<AxiosResponse | undefined>(undefined);
    const prevBodyRef = useRef<any>();
    const prevParamsRef = useRef<any>();



    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(undefined);

            try {
                // await FormHelper.delay(5000)
                const response = await axiosInstance.request<T>({
                    url,
                    method,
                    headers: new AxiosHeaders(),
                    data: body,
                    params: params,
                });

                setData(response.data);
            } catch (err: any) {
                const error = err as AxiosError;
                setError(error.response);
            } finally {
                setLoading(false);
            }
        };

        // call fetchData only if body is diffrent from last one
        if (JSON.stringify(body) !== JSON.stringify(prevBodyRef.current)) {
            fetchData();
            prevBodyRef.current = body;
        }
        if (method === "GET") {
            if (JSON.stringify(params) !== JSON.stringify(prevParamsRef.current)) {
                fetchData();
                prevParamsRef.current = params;
            }
        }
    }, [body, url, method, params]);

    return { data, loading, error };
}

export default useFetch;
