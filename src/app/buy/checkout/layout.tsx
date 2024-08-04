// Type Imports
import type { ChildrenType } from '@core/types'

// Component Imports
import Providers from '@components/Providers'
import BlankLayout from '@layouts/BlankLayout'
import Header from '@/@core/components/website/Header'
import Footer from '@/@core/components/website/Footer'
import WebsiteWrapper from '@/@core/components/tailwind/WebsiteWrapper'
import CheckoutHeader from '@/views/checkout/CheckoutHeader'

const Layout = ({ children }: ChildrenType) => {
  // Vars
  const direction = 'ltr'

  return (
    <Providers direction={direction}>
      <CheckoutHeader/>
      <BlankLayout>
      <WebsiteWrapper texture={false}>
        {children}
      </WebsiteWrapper>
        </BlankLayout>
      <Footer />
    </Providers>
  )
}

export default Layout
