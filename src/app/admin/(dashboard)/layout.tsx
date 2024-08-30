// Type Imports
import type { ChildrenType } from '@core/types'

// Layout Imports
import LayoutWrapper from '@layouts/LayoutWrapper'
import VerticalLayout from '@layouts/VerticalLayout'

// Component Imports
import Providers from '@components/Providers'
import Navigation from '@components/layout/vertical/Navigation'
import Navbar from '@components/layout/vertical/Navbar'
import VerticalFooter from '@components/layout/vertical/Footer'

const data = {
  "menus": [
    {
      "type": "subMenu",
      "label": "Dashboards",
      "icon": "ri-home-smile-line",
      "suffix": {
        "label": "5",
        "size": "small",
        "color": "error"
      },
      "items": [
        {
          "type": "menuItem",
          "label": "Analytics",
          "href": "/admin"
        }
      ]
    },
    {
      "type": "menuSection",
      "label": "Manage",
      "items": [
        {
          "type": "menuItem",
          "label": "Approvals",
          "href": "/admin/manage-approvals",
          "icon": "ri-pass-valid-line"
        },
        {
          "type": "menuItem",
          "label": "My Store",
          "href": "/admin/my-store",
          "icon": "ri-store-3-line"
        },
        {
          "type": "menuItem",
          "label": "Customer Service Line",
          "href": "/admin/user-queries",
          "icon": "ri-customer-service-line"
        },
        {
          "type": "subMenu",
          "label": "Auth Pages",
          "icon": "ri-shield-keyhole-line",
          "items": [
            {
              "type": "menuItem",
              "label": "Login",
              "href": "/login",
              "target": "_blank"
            },
            {
              "type": "menuItem",
              "label": "Register",
              "href": "/register",
              "target": "_blank"
            },
            {
              "type": "menuItem",
              "label": "Forgot Password",
              "href": "/forgot-password",
              "target": "_blank"
            }
          ]
        },
        {
          "type": "subMenu",
          "label": "Miscellaneous",
          "icon": "ri-question-line",
          "items": [
            {
              "type": "menuItem",
              "label": "Error",
              "href": "/error",
              "target": "_blank"
            },
            {
              "type": "menuItem",
              "label": "Under Maintenance",
              "href": "/under-maintenance",
              "target": "_blank"
            }
          ]
        },
        {
          "type": "menuItem",
          "label": "Cards",
          "href": "/admin/card-basic",
          "icon": "ri-bar-chart-box-line"
        },
        {
          "type": "menuItem",
          "label": "Account Settings",
          "href": "/admin/account-settings",
          "icon": "ri-user-settings-line"
        }
      ]
    }
  ]
}


const Layout = async ({ children }: ChildrenType) => {
  // Vars
  const direction = 'ltr'

  return (
    <Providers direction={direction}>
      <LayoutWrapper
        verticalLayout={
          <VerticalLayout navigation={<Navigation navigationList={data} />} navbar={<Navbar />} footer={<VerticalFooter />}>
            {children}
          </VerticalLayout>
        }
      />
    </Providers>
  )
}

export default Layout
