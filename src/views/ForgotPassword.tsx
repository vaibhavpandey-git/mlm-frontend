'use client'

// Next Imports
import Link from '@mui/material/Link'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import InputAdornment from '@mui/material/InputAdornment'


// Type Imports
import type { Mode } from '@core/types'

// Component Imports
import Form from '@components/Form'
import DirectionalIcon from '@components/DirectionalIcon'
import Illustrations from '@components/Illustrations'
import Logo from '@components/layout/shared/Logo'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'
import { useState } from 'react'
import axios from 'axios'

const ForgotPassword = ({ mode }: { mode: Mode }) => {
  // Vars
  const darkImg = '/images/pages/auth-v1-mask-dark.png'
  const lightImg = '/images/pages/auth-v1-mask-light.png'
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE

  // Hooks
  const authBackground = useImageVariant(mode, lightImg, darkImg)

  // State
  const [phone, setPhone] = useState('')
  const [otpCode, setOtpCode] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  // Handlers
  const handleGetOtp = async () => {
    try {
      // Call the API to generate OTP
      const response = await axios.post(`${API_BASE}/auth/generateotp`, { phone })
      if (response.data.success) {
        setSuccess('OTP has been sent to your phone.')
        // Log OTP to the console
        console.log('Your OTP Code:', response.data.otp)
      } else {
        setError(response.data.message || 'Failed to send OTP.')
      }
    } catch (err) {
      setError('An error occurred. Please try again later.')
    }
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setError('')
    setSuccess('')

    try {
      // Call the API to reset the password and verify OTP
      const response = await axios.post(`${API_BASE}/auth/resetpassword`, { phone, otpCode, password })

      if (response.data.success) {
        setSuccess('Password has been successfully reset! Please log in with your new password.')
      } else {
        setError(response.data.message || 'Failed to reset password')
      }
    } catch (err) {
      setError('An error occurred. Please try again later.')
    }
  }

  return (
    <div className='flex flex-col justify-center items-center min-bs-[100dvh] relative p-6'>
      <Card className='flex flex-col sm:is-[450px]'>
        <CardContent className='p-6 sm:!p-12'>
          <Link href='/' className='flex justify-center items-center mbe-6'>
            <Logo />
          </Link>
          <Typography variant='h4'>Forgot Password 🔒</Typography>
          <div className='flex flex-col gap-5'>
            <Typography className='mbs-1'>
              Enter your phone and we&#39;ll send you an OTP to reset your password
            </Typography>
            <Form noValidate autoComplete='off' className='flex flex-col gap-5' onSubmit={handleSubmit}>
              <TextField
                autoFocus
                fullWidth
                label='Phone'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <TextField
                fullWidth
                label='OTP Code'
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Link onClick={handleGetOtp} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                        Get OTP
                      </Link>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                label='New Password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button fullWidth variant='contained' type='submit'>
                Verify and Reset Password
              </Button>
              {error && <Typography color='error'>{error}</Typography>}
              {success && <Typography style={{ color: 'green !important' }}>{success}</Typography>}
              <Typography className='flex justify-center items-center' color='primary'>
                <Link href='/login' className='flex items-center'>
                  <DirectionalIcon ltrIconClass='ri-arrow-left-s-line' rtlIconClass='ri-arrow-right-s-line' />
                  <span>Back to Login</span>
                </Link>
              </Typography>
            </Form>
          </div>
        </CardContent>
      </Card>
      <Illustrations maskImg={{ src: authBackground }} />
    </div>
  )
}

export default ForgotPassword
