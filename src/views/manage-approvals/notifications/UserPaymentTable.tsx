'use client'
// MUI Imports
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'


// Third-party Imports
import classnames from 'classnames'

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar'

// Styles Imports
import tableStyles from '@core/styles/table.module.css'
import { useEffect, useState } from 'react'

// Types
type payementList = {
    userId?: string;
    userName: string;
    userPhone: string;
    productId: string;
    tempParent: string;
    amount: string;
    paymentStatus: 'Pending' | 'Rejected' | 'Success';
    paymentProof: string;
    date: string;
}



type TableProps = {
    actionHandler: any
}
function Table({ actionHandler }: TableProps) {
    const [usersData, setUserData] = useState<payementList[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        // Fetch data from the JSON file
        const fetchUserData = async () => {
            try {
                const response = await fetch('/mockData/admin/all_payment_requests_initiated_by_users.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUserData(data);
                console.log("data.user", data)
            } catch (error) {
                setError("dd");
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    return (
        !loading &&
        <Card>
            <div className='overflow-x-auto'>
                <table className={tableStyles.table}>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Phone</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersData?.map((user, index) => (
                            <tr key={index} onClick={() => actionHandler(user)}>
                                <td className='!plb-1'>
                                    <div className='flex items-center gap-3'>
                                        {/* <CustomAvatar src={user.avatarSrc} size={34} /> */}
                                        <div className='flex flex-col'>
                                            <Typography color='text.primary' className='font-medium'>
                                                {user.userName}
                                            </Typography>
                                            {/* <Typography variant='body2'>{user.username}</Typography> */}
                                        </div>
                                    </div>
                                </td>
                                <td className='!plb-1'>
                                    <Typography>{user?.userPhone}</Typography>
                                </td>

                                <td className='!plb-1'>
                                    <Typography>{new Date(user?.date).toLocaleDateString()}</Typography>
                                </td>

                                <td className='!pb-1'>
                                    <Chip
                                        className='capitalize'
                                        variant='tonal'
                                        color={
                                            user.paymentStatus === 'Pending'
                                                ? 'warning'
                                                : user.paymentStatus === 'Rejected'
                                                    ? 'error'
                                                    : 'success'
                                        }
                                        label={user?.paymentStatus}
                                        size='small'
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    )
}

export default Table
