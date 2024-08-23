'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import TextureOverlay from '../tailwind/TextureOverlay'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' }
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
      <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
        <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
          We are coming soon with various product options in different category.{' '}
          <a href='#' className='font-semibold text-indigo-600'>
            <span aria-hidden='true' className='absolute inset-0' />
            Read more <span aria-hidden='true'>&rarr;</span>
          </a>
        </div>
      </div>
      <div className='text-center'>
        <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
          Enrich Yourself with our growing business
        </h1>
        <p className='mt-6 text-lg leading-8 text-gray-600'>
          Join [Brand Name] to earn commissions by building your network and enjoy exclusive products at great prices. Empower yourself with flexible income opportunities and premium shopping.
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <a
            href='#product-section'
            className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Shop now
          </a>
        </div>
      </div>
    </div>
  )
}
