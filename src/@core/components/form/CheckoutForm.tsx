import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { TextField, Typography, Grid, Box } from '@mui/material'

const formFields = [
  { name: 'firstName', label: 'First Name', xs: 12, md: 6, isRequired: false },
  { name: 'lastName', label: 'Last Name', xs: 12, md: 6, isRequired: false },
  { name: 'email', label: 'Email Address', xs: 12, isRequired: false },
  { name: 'address', label: 'Address', xs: 12, isRequired: false },
  { name: 'city', label: 'City', xs: 12, md: 6, isRequired: false },
  { name: 'state', label: 'State', xs: 12, md: 6, isRequired: false },
  { name: 'zip', label: 'ZIP / Postal Code', xs: 12, md: 6, isRequired: false }
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
    <Box sx={{ maxWidth: 'lg', mx: 'auto', px: { xs: 2, sm: 6 }, py: { xs: 6, sm: 12 } }}>
      <div className="flex items-center pb-3 border-b border-gray-200">
        <div className="flex-1">
          <h3 className="text-gray-800 text-xl font-bold">Details</h3>
          <p className="text-gray-600 text-xs mt-1">Please fill your details</p>
        </div>

      </div>
      <form onSubmit={handleSubmit(submitHandler)} className='pt-6'>

        <Grid container spacing={2}>
          {formFields.map(({ name, label, xs, md, isRequired }) => (
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

          <Grid item xs={12} className="py-6">
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
  )
}
