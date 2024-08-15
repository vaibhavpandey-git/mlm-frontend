'use client'

// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

import KYCReviewContent from './KYCReviewContent'

const AccountDetails = (data: any) => {


  return (
    <Card>
      <CardContent>
        <KYCReviewContent {...data.data} />
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item lg={6}>
            <Button variant='outlined' fullWidth color='error'>Reject</Button>
          </Grid>
          <Grid item lg={6}>
            <Button variant='contained' fullWidth>Approve</Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default AccountDetails
