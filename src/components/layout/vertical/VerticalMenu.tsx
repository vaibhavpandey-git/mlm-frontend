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


const VerticalMenu = ({ scrollMenu, navigationList }: { scrollMenu: (container: any, isPerfectScrollbar: boolean) => void, navigationList: any }) => {
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
