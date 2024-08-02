// Type Imports
import type { ChildrenType } from '@core/types'

// Component Imports
import Providers from '@components/Providers'
import BlankLayout from '@layouts/BlankLayout'
import Header from '@/@core/components/website/Header'
import Footer from '@/@core/components/website/Footer'

const Layout = ({ children }: ChildrenType) => {
  // Vars
  const direction = 'ltr'

  return (
    <Providers direction={direction}>
      <Header />
      <BlankLayout>{children}</BlankLayout>
      <Footer />
    </Providers>
  )
}

export default Layout
