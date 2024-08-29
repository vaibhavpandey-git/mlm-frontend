// React Imports
import type { ReactElement } from 'react'

// Next Imports
import dynamic from 'next/dynamic'

// Component Imports
import AccountSettings from '@views/manage-approvals'

const AccountTab = dynamic(() => import('@views/manage-approvals/account'))
const NotificationsTab = dynamic(() => import('@views/manage-approvals/notifications'))
const ConnectionsTab = dynamic(() => import('@views/manage-approvals/connections'))

// Vars
const tabContentList = (): { [key: string]: ReactElement } => ({
  account: <AccountTab />,
  notifications: <NotificationsTab />,
  connections: <ConnectionsTab />
})

const AccountSettingsPage = () => {
  return <AccountSettings tabContentList={tabContentList()} />
}

export default AccountSettingsPage
