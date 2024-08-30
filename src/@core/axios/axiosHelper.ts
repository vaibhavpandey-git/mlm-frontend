import axios from "axios";
import { apiBaseUrl } from "@configs/variables";

let axiosInstance = axios.create({
    baseURL: apiBaseUrl
})

// Add a response interceptor with a callback
const addErrorHandler = (callback: any) => {
    axiosInstance.interceptors.response.use(
        response => response,
        error => {
            // Handle the error
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Response error:', {
                    status: error.response.status,
                    data: error.response.data,
                    headers: error.response.headers,
                });
                if (callback) {
                    callback(error.response);
                } else {
                    switch (error.response.status) {
                        case 400:
                            alert('Bad Request: ' + error.response.data.message);
                            break;
                        case 401:
                            alert('Unauthorized: Please login.');
                            break;
                        case 403:
                            alert('Forbidden: You do not have permission.');
                            break;
                        case 404:
                            alert('Not Found: The requested resource could not be found.');
                            break;
                        case 500:
                            alert('Server Error: Please try again later.');
                            break;
                        default:
                            alert('An error occurred: ' + error.response.data.message);
                    }
                }
            } else if (error.request) {
                console.error('Request error:', error.request);
            } else {
                console.error('Error:', error.message);
            }
            return Promise.reject(error);
        }
    );
};



export { axiosInstance, addErrorHandler };
