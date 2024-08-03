'use client'

import CheckoutForm from '@/@core/components/form/CheckoutForm'
import CartItems from '@/@core/components/tailwind/CartItems'
import OrderSummary from '@/@core/components/tailwind/OrderSummary'
import { BreakUpList } from '@/@core/components/website/ProductList'
import { Grid } from '@mui/material'
import { useRouter } from 'next/navigation'
import ScanToPay from './ScanToPay'
import { useState } from 'react'
const Items = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
    quantity: 1,
    priceBreakUp: BreakUpList
  }
]

export default function Checkout() {
  const router = useRouter()
  const [showQR , setShowQR] = useState(false)

  function formSubmitHandler(data: any){
    
    setShowQR(true)
  }
  return (
    <>
      <div className='min-h-screen bg-gray-100 pt-40 pb-40'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
          <div className='bg-white sm:rounded-lg p-6 pt-1'>
          <div className='bg-white py-4 border-b'>
          <div className='max-w-7xl mx-auto  flex justify-between items-center'>
            <button
              onClick={() => router.back()}
              className='bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded'
            >
              Go Back
            </button>
            <h2 className='text-xl font-semibold text-gray-900'>Checkout</h2>
          </div>
        </div>
            <Grid container spacing={5}>
            <Grid item lg={6}>
              <div className='bg-white sm:rounded-lg p-6'>

                 <CartItems cartItems={Items}/>
                 {Items && <OrderSummary breakUps={Items?.[0]?.priceBreakUp} />}
                 </div>
              </Grid>
              <Grid item lg={6}>
                {
                  showQR ? 
                  <ScanToPay/> :
                 <CheckoutForm onSubmit={formSubmitHandler} />
                }
              </Grid>
             
            </Grid>
          </div>
        </div>
      </div>
    </>
  )
}
