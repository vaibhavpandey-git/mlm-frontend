'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import Link from '@mui/material/Link'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Divider from '@mui/material/Divider'
import Snackbar from '@mui/material/Snackbar' // Import Snackbar for the popup
import Alert from '@mui/material/Alert' // Import Alert for the popup message

// Type Imports
import axios from 'axios'

import type { Mode } from '@core/types'

// Component Imports
import Illustrations from '@components/Illustrations'
import Logo from '@components/layout/shared/Logo'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'

// Axios Import

const Register = ({ mode }: { mode: Mode }) => {
  // States
  const [phone, setPhone] = useState('')
  const [otpCode, setOtpCode] = useState('')
  const [referralCode, setReferralCode] = useState('') // Corrected state name
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [success, setSuccess] = useState(false) // New state for registration success
  const [error, setError] = useState('') // New state for error messages

  // Vars
  const darkImg = '/images/pages/auth-v1-mask-dark.png'
  const lightImg = '/images/pages/auth-v1-mask-light.png'

  // Hooks
  const authBackground = useImageVariant(mode, lightImg, darkImg)

  const handleGetOtp = async () => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE}/auth/generateotp`, { phone })

      console.log('OTP requested successfully:', response.data)

      // Handle the response as needed
    } catch (error) {
      console.error('Error requesting OTP:', error)

      // Handle the error as needed
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!agreedToTerms) {
      alert('Please agree to the privacy policy & terms.')

      return
    }

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE}/auth/register`, { phone, otpCode, referralCode })

      console.log('Registration successful:', response.data)

      // Clear the form fields
      setPhone('')
      setOtpCode('')
      setReferralCode('')
      setAgreedToTerms(false)

      // Show success popup
      setSuccess(true)
      setError('') // Clear any previous error
    } catch (error) {
      console.error('Error during registration:', error)

      // Show error popup for incorrect OTP
      if (error.response && error.response.status === 400) {
        setError('Incorrect OTP')
      } else {
        setError('Registration failed. Please try again.')
      }
    }
  }

  const handleClose = () => {
    setSuccess(false)
    setError('') // Clear error when closing the popup
  }

  return (
    <div className='flex flex-col justify-center items-center min-bs-[100dvh] relative p-6'>
      <Card className='flex flex-col sm:is-[450px]'>
        <CardContent className='p-6 sm:!p-12'>
          <Link href='/' className='flex justify-center items-start mbe-6'>
            <Logo />
          </Link>
          <Typography variant='h4'>Register to become our member</Typography>
          <div className='flex flex-col gap-5'>
            <Typography className='mbs-1'>Start Earning with a Trusted Network Today.</Typography>
            <form noValidate autoComplete='off' onSubmit={handleRegister} className='flex flex-col gap-5'>
              <TextField
                type="number"
                autoFocus
                fullWidth
                label="Phone"
                InputProps={{
                  sx: {
                    '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
                      WebkitAppearance: 'none',
                      margin: 0,
                    },
                    '& input[type=number]': {
                      MozAppearance: 'textfield',
                    },
                  },
                }}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <TextField
                fullWidth
                label='OTP'
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <Link href='#' onClick={handleGetOtp} style={{ fontSize: '0.8rem' }}>
                        Get OTP
                      </Link>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                label='Referral Code'
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox checked={agreedToTerms} onChange={(e) => setAgreedToTerms(e.target.checked)} />}
                label={
                  <>
                    <span>I agree to </span>
                    <Link className='text-primary' href='/' onClick={e => e.preventDefault()}>
                      privacy policy & terms
                    </Link>
                  </>
                }
              />
              <Button fullWidth variant='contained' type='submit'>
                Sign Up
              </Button>
              <div className='flex justify-center items-center flex-wrap gap-2'>
                <Typography>Already have an account?</Typography>
                <Typography component={Link} href='/login' color='primary'>
                  Sign in instead
                </Typography >
              </div>
              <Divider className='gap-3'>Or</Divider>
              <div className='flex justify-center items-center gap-2'>
                <IconButton size='small' className='text-facebook'>
                  <i className='ri-facebook-fill' />
                </IconButton>
                <IconButton size='small' className='text-twitter'>
                  <i className='ri-twitter-fill' />
                </IconButton>
                <IconButton size='small' className='text-github'>
                  <i className='ri-github-fill' />
                </IconButton>
                <IconButton size='small' className='text-googlePlus'>
                  <i className='ri-google-fill' />
                </IconButton>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
      <Illustrations maskImg={{ src: authBackground }} />

      {/* Success Popup */}
      <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Registration successful!
        </Alert>
      </Snackbar>

      {/* Error Popup */}
      <Snackbar open={!!error} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default Register
