import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { TextField, Typography, Grid, Box } from '@mui/material'

const formFields = [
  { name: 'firstName', label: 'First Name', xs: 12, md: 6 , isRequired : false },
  { name: 'lastName', label: 'Last Name', xs: 12, md: 6,isRequired : false  },
  { name: 'email', label: 'Email Address', xs: 12,isRequired : false  },
  { name: 'address', label: 'Address', xs: 12,isRequired : false  },
  { name: 'city', label: 'City', xs: 12, md: 6,isRequired : false  },
  { name: 'state', label: 'State', xs: 12, md: 6 ,isRequired : false },
  { name: 'zip', label: 'ZIP / Postal Code', xs: 12, md: 6,isRequired : false  },
  { name: 'country', label: 'Country', xs: 12, md: 6,isRequired : false  },
  { name: 'cardNumber', label: 'Card Number', xs: 12 ,isRequired : false },
  { name: 'expirationDate', label: 'Expiration Date', xs: 12, md: 6,isRequired : false  },
  { name: 'cvc', label: 'CVC', xs: 12, md: 6,isRequired : false  }
]

type CheckoutFormProps = {
  onSubmit: (data: any) => void
}

export default function CheckoutForm({ onSubmit }: CheckoutFormProps) {
  const { handleSubmit, control } = useForm()

  const submitHandler = (data: any) => {
    onSubmit(data)
  }

  return (
    <Box sx={{ minHeight: '100vh', py: 12 }} className="bg-slate-50">
      <Box sx={{ maxWidth: 'lg', mx: 'auto', px: { xs: 2, sm: 6 }, py: { xs: 6, sm: 12 } }}>
        <form onSubmit={handleSubmit(submitHandler)}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
            Please fill the details to preceed
              </Typography>
            </Grid>
          <Grid container spacing={2}>
            {formFields.map(({ name, label, xs, md , isRequired }) => (
              <Grid item xs={xs} md={md} key={name}>
                <Controller
                  name={name}
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField {...field} label={label} variant="outlined" fullWidth required={isRequired} />
                  )}
                />
              </Grid>
            ))}
            
            <Grid item xs={12} className="border-t border-gray-200 py-6">
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer"
                >
                  Proceed
                </button>
              </div>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  )
}
