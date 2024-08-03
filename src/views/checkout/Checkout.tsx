'use client'

import CheckoutForm from '@/@core/components/form/CheckoutForm'
import CartItems from '@/@core/components/tailwind/CartItems'
import OrderSummary from '@/@core/components/tailwind/OrderSummary'
import { BreakUpList } from '@/@core/components/website/ProductList'
import { Grid } from '@mui/material'
import { useRouter } from 'next/navigation'
import ScanToPay from './ScanToPay'
import { useState } from 'react'
import MultiStepPanel, { steps } from '@/@core/components/tailwind/MultiStepPanel'
import CustomButton from '@/@core/components/custom/CustomButton/ButtonTailwind'
import ImageUpload from '@/@core/components/tailwind/ImageUpload'
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
  const [currentStep, setCurrentStep] = useState<number>(0);


  function formSubmitHandler(data: any){
    nextStep()
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  function stepChangeHandler(step : { id :number , step :string }){
    setCurrentStep(step.id)
  }

  function onPaymentDone(){

    nextStep()
  }
  function PanelContent(){
    const step = currentStep

    switch(step){
      case 0:
        return (
          <Grid container spacing={5}>
            <Grid item lg={6}>
              <div className='bg-white sm:rounded-lg p-6'>

                 <CartItems cartItems={Items}/>
                 {Items && <OrderSummary breakUps={Items?.[0]?.priceBreakUp} />}
                 </div>
              </Grid>
              <Grid item lg={6}>
               <CheckoutForm onSubmit={formSubmitHandler} />
                     
              </Grid>
             
            </Grid>
        )

        case 1: 
        return (
        <Grid container justifyContent={'center'}>
          <Grid item lg={12}>
          <ScanToPay />
          </Grid>
          <Grid item lg={6}>
          <div className="mt-6">
    <button onClick={()=>onPaymentDone()}
      
      className="w-full flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer"
    >
      Upload Payment Receipt
    </button>
    </div>
        </Grid>
        </Grid>
        
      )
      case 2 :
        return <div>
        <ImageUpload />
      </div>

        default :
        return <></>
    }
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
                 <MultiStepPanel currentStep={currentStep} onChangeStep={stepChangeHandler}>
                 <PanelContent/>
            
                  </MultiStepPanel>
          </div>
        </div>
      </div>
    </>
  )
}
