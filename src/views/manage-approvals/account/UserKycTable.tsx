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
type UserType = {
    phone: number
    personalDetails: {
        name: string
        email: string
        dateOfBirth: string
        gender: string
    }
    kycDetails: {
        status: string
    }
    avatarSrc: string
    username: string
}

// Sample Data
// const usersData: UserType[] = [
//     {
//         phone: 1234567890,
//         personalDetails: {
//             name: 'John Doe',
//             email: 'johndoe@example.com',
//             dateOfBirth: '1990-01-01',
//             gender: 'Male',
//         },
//         kycDetails: {
//             status: 'approved'
//         },
//         avatarSrc: '/images/avatars/1.png',
//         username: '@johndoe'
//     },
//     {
//         phone: 9876543210,
//         personalDetails: {
//             name: 'Jane Smith',
//             email: 'janesmith@example.com',
//             dateOfBirth: '1985-05-15',
//             gender: 'Female',
//         },
//         kycDetails: {
//             status: 'approval pending'
//         },
//         avatarSrc: '/images/avatars/2.png',
//         username: '@janesmith'
//     },
//     {
//         phone: 5555555555,
//         personalDetails: {
//             name: 'Alice Johnson',
//             email: 'alicejohnson@example.com',
//             dateOfBirth: '1992-07-22',
//             gender: 'Female',
//         },
//         kycDetails: {
//             status: 'rejected'
//         },
//         avatarSrc: '/images/avatars/3.png',
//         username: '@alicejohnson'
//     }
// ]

type TableProps = {
    actionHandler: any
}
function Table({ actionHandler }: TableProps) {
    const [usersData, setUserData] = useState<UserType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        // Fetch data from the JSON file
        const fetchUserData = async () => {
            try {
                const response = await fetch('/jsonUserData/userData.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUserData(data.users);
                console.log("data.user", data.users)
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
                            <th>Email</th>
                            <th>Date of Birth</th>
                            <th>Gender</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersData && usersData.map((user, index) => (
                            <tr key={index} onClick={() => actionHandler(user)}>
                                <td className='!plb-1'>
                                    <div className='flex items-center gap-3'>
                                        <CustomAvatar src={user.avatarSrc} size={34} />
                                        <div className='flex flex-col'>
                                            <Typography color='text.primary' className='font-medium'>
                                                {user.personalDetails.name}
                                            </Typography>
                                            <Typography variant='body2'>{user.username}</Typography>
                                        </div>
                                    </div>
                                </td>
                                <td className='!plb-1'>
                                    <Typography>{user.phone}</Typography>
                                </td>
                                <td className='!plb-1'>
                                    <Typography>{user.personalDetails.email}</Typography>
                                </td>
                                <td className='!plb-1'>
                                    <Typography>{new Date(user.personalDetails.dateOfBirth).toLocaleDateString()}</Typography>
                                </td>
                                <td className='!plb-1'>
                                    <Typography>{user.personalDetails.gender}</Typography>
                                </td>
                                <td className='!pb-1'>
                                    <Chip
                                        className='capitalize'
                                        variant='tonal'
                                        color={
                                            user.kycDetails.status === 'approval pending'
                                                ? 'warning'
                                                : user.kycDetails.status === 'rejected'
                                                    ? 'error'
                                                    : 'success'
                                        }
                                        label={user.kycDetails.status}
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
