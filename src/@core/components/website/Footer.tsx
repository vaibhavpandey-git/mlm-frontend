// components/Footer.js

import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white'>
      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-4 md:mb-0'>
            <h5 className='text-lg font-semibold'>Your Company</h5>
            <p className='text-sm'>© 2024 Your Company. All rights reserved.</p>
            <div className='mt-4'>
              <h6 className='font-semibold mb-2'>Follow Us</h6>
              <ul className='flex space-x-4 list-none'>
                <li>
                  <a href='#' className='hover:text-gray-300'>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-gray-300'>
                    Twitter
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-gray-300'>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-gray-300'>
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col md:flex-row md:space-x-8'>
            <div className='mb-4 md:mb-0'>
              <h6 className='font-semibold mb-2'>Navigation</h6>
              <ul className='space-y-2 list-none'>
                <li>
                  <a href='#' className='text-sm hover:text-gray-300'>
                    Home
                  </a>
                </li>
                <li>
                  <a href='#' className='text-sm hover:text-gray-300'>
                    About
                  </a>
                </li>
                <li>
                  <a href='#' className='text-sm hover:text-gray-300'>
                    Services
                  </a>
                </li>
                <li>
                  <a href='#' className='text-sm hover:text-gray-300'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
