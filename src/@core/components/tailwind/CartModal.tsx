'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import OrderSummary from './OrderSummary'
import { ProductType } from '../website/ProductList'
import ButtonPro from '../custom/ButtonPro/ButtonPro'
import CartItems from './CartItems'
import { useRouter } from 'next/navigation'

type CardModalProps = {
  isOpen: boolean
  onClose: any
  cartItems: ProductType[]
}

export default function Example({ isOpen, onClose, cartItems }: CardModalProps) {
  const router = useRouter()
  
  function handleContinue(){
    router.push('/checkout')
  }
  return (
    <Dialog open={Boolean(isOpen && cartItems.length)} onClose={onClose} className='relative z-10'>
      <DialogBackdrop
        transition
        className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0'
      />

      <div className='fixed inset-0 overflow-hidden'>
        <div className='absolute inset-0 overflow-hidden'>
          <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
            <DialogPanel
              transition
              className='pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700'
            >
              <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
                <div className='flex-1 overflow-y-auto px-4 py-6 sm:px-6'>
                  <div className='flex items-start justify-between'>
                    <DialogTitle className='text-lg font-medium text-gray-900'>Shopping cart</DialogTitle>
                    <div className='ml-3 flex h-7 items-center'>
                      <button
                        type='button'
                        onClick={() => onClose(false)}
                        className='relative -m-2 p-2 text-gray-400 hover:text-gray-500'
                      >
                        <span className='absolute -inset-0.5' />
                        <span className='sr-only'>Close panel</span>
                        <XMarkIcon aria-hidden='true' className='h-6 w-6' />
                      </button>
                    </div>
                  </div>

                  {/* CartItem */}

                  <CartItems cartItems={cartItems}/>
                </div>
                {cartItems && <OrderSummary breakUps={cartItems?.[0]?.priceBreakUp} />}
                <div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
                  <div className='mt-6'>
                    <a onClick={()=>handleContinue()} className='flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 cursor-pointer'>
                      Continue to Payment
                    </a>
                    {/* <ButtonPro label={'Checkout'} /> */}
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
