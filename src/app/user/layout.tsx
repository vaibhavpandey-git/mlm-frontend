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
            "label": "Withdrawal",
            "icon": "ri-home-smile-line",
            "suffix": {
                "label": "1",
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
                    "label": "My Orders",
                    "href": "/admin/manage-approvals",
                    "icon": "ri-pass-valid-line"
                },
                {
                    "type": "menuItem",
                    "label": "Transations",
                    "href": "/admin/manage-approvals",
                    "icon": "ri-pass-valid-line"
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
