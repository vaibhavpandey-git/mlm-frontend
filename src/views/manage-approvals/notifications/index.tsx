'use client'
// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports

import ModalWrapper from '@/@core/components/tailwind/ModalWrapper'
import { useState } from 'react'
import UserPaymentTable from './UserPaymentTable'
import AccountDetails from '@/views/account-settings/account/AccountDetails'

const PaymentApprovals = () => {

  const [open, setOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState()


  function onClose() {
    setOpen(!open)
  }
  function actionHandler(user: any) {
    setSelectedUser(user)
    setOpen(true)
  }
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <UserPaymentTable actionHandler={actionHandler} />
      </Grid>
      <ModalWrapper isOpen={open} onClose={onClose} children={<AccountDetails />} />

    </Grid>
  )
}

export default PaymentApprovals
