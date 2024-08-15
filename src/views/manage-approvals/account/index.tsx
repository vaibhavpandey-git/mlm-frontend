'use client'
// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import AccountDetails from './AccountDetails'
import AccountDelete from './AccountDelete'
import UserKycTable from './UserKycTable'
import ModalWrapper from '@/@core/components/tailwind/ModalWrapper'
import { useState } from 'react'

const Account = () => {

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
        <UserKycTable actionHandler={actionHandler} />
      </Grid>
      <ModalWrapper isOpen={open} onClose={onClose} children={<AccountDetails data={selectedUser} />} />

    </Grid>
  )
}

export default Account
