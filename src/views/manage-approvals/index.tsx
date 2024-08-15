'use client'

// React Imports
import { useState } from 'react'
import type { SyntheticEvent, ReactElement } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

const tabData = {
  "tabs": [
    {
      "label": "KYC Approval",
      "value": "account",
      "icon": "ri-user-star-fill",
      "contentKey": "account"
    },
    {
      "label": "Payment Approval",
      "value": "notifications",
      "icon": "ri-money-rupee-circle-fill",
      "contentKey": "notifications"
    },
    {
      "label": "Withdrawl Approval",
      "value": "connections",
      "icon": "ri-wallet-2-fill",
      "contentKey": "connections"
    }
  ],
  "tabContents": {
    "account": "<AccountComponent />",
    "notifications": "<NotificationsComponent />",
    "connections": "<ConnectionsComponent />"
  }
}


const AccountSettings = ({ tabContentList }: { tabContentList: { [key: string]: ReactElement } }) => {
  // States
  const [activeTab, setActiveTab] = useState(tabData.tabs[0].value)

  const handleChange = (event: SyntheticEvent, value: string) => {
    setActiveTab(value)
  }

  return (
    <TabContext value={activeTab}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <TabList onChange={handleChange} variant='scrollable'>
            {tabData.tabs.map((tab, index) => (
              <Tab
                key={index}
                label={tab.label}
                icon={<i className={tab.icon} />}
                iconPosition='start'
                value={tab.value}
              />
            ))}
          </TabList>
        </Grid>
        <Grid item xs={12}>
          <TabPanel value={activeTab} className='p-0'>
            {tabContentList[activeTab]}
          </TabPanel>
        </Grid>
      </Grid>
    </TabContext>
  )
}

export default AccountSettings
