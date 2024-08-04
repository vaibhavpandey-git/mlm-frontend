'use client'

import { useRouter } from 'next/navigation'

const navigation = [
  { name: 'Product', href: '/product' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' }
]

export default function CheckoutHeader() {
  const router = useRouter()

  function handleNavigation(url: string) {
    router.push(url)
  }

  return (
    <div className='bg-white'>
      <header className='absolute shadow-sm inset-x-0 top-0 z-50'>
        <nav aria-label='Global' className='flex items-center justify-between p-6 lg:px-8'>
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <img
                alt=''
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                className='h-8 w-auto'
              />
            </a>
          </div>

          <div className='lg:flex lg:gap-x-12'>
            {/* {navigation.map(item => (
              <a key={item.name} href={item.href} className='text-sm font-semibold leading-6 text-gray-900'>
                {item.name}
              </a>
            ))} */}
            <h3 className='text font-semibold text-gray-900'>
              Checkout
            </h3>

          </div>
          <div className='lg:flex lg:flex-1 lg:justify-end'>
            {/* <a
              onClick={() => handleNavigation('/login')}
              className='text-sm font-semibold leading-6 text-gray-900 cursor-pointer'
            >
              Log in <span aria-hidden='true'>&rarr;</span>
            </a> */}
          </div>
        </nav>
      </header>
    </div>
  )
}
