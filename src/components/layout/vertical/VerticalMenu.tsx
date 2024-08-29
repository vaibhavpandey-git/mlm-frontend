// MUI Imports
import Chip from '@mui/material/Chip'
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { VerticalMenuContextProps } from '@menu/components/vertical-menu/Menu'

// Component Imports
import { Menu, SubMenu, MenuItem, MenuSection } from '@menu/vertical-menu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'
import { ReactElement } from 'react'

type RenderExpandIconProps = {
  open?: boolean
  transitionDuration?: VerticalMenuContextProps['transitionDuration']
}

const RenderExpandIcon = ({ open, transitionDuration }: RenderExpandIconProps) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='ri-arrow-right-s-line' />
  </StyledVerticalNavExpandIcon>
)

const navigationList = {
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
        },
      ]
    }
  ]
}



const VerticalMenu = ({ scrollMenu }: { scrollMenu: (container: any, isPerfectScrollbar: boolean) => void }) => {
  // Hooks
  const theme = useTheme()
  const { isBreakpointReached, transitionDuration } = useVerticalNav()

  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  const renderMenuItems = (items: any[]) =>
    items.map((item, index) => {
      if (item.type === 'subMenu') {
        return (
          <SubMenu
            key={index}
            label={item.label}
            icon={<i className={item.icon} />}
            suffix={item.suffix ? <Chip {...item.suffix} /> : null}
          >
            {renderMenuItems(item.items)}
          </SubMenu>
        )
      } else if (item.type === 'menuItem') {
        return (
          <MenuItem key={index} href={item.href} icon={item.icon ? <i className={item.icon} /> : undefined} target={item.target}>
            {item.label}
          </MenuItem>
        )
      } else if (item.type === 'menuSection') {
        return (
          <MenuSection key={index} label={item.label}>
            {renderMenuItems(item.items)}
          </MenuSection>
        )
      }
      return null
    })

  return (
    // eslint-disable-next-line lines-around-comment
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
          className: 'bs-full overflow-y-auto overflow-x-hidden',
          onScroll: container => scrollMenu(container, false)
        }
        : {
          options: { wheelPropagation: false, suppressScrollX: true },
          onScrollY: container => scrollMenu(container, true)
        })}
    >
      {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
      {/* Vertical Menu */}
      <Menu
        menuItemStyles={menuItemStyles(theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
        menuSectionStyles={menuSectionStyles(theme)}
      >

        {renderMenuItems(navigationList.menus)}

      </Menu>
    </ScrollWrapper>
  )
}

export default VerticalMenu
