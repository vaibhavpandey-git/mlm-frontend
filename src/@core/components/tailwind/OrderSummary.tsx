// OrderSummary.tsx

'use client'

import React from 'react'

interface OrderSummaryProps {
  subtotal: number
  shipping: number
  tax: number
  total: number
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ subtotal, shipping, tax, total }) => {
  return (
    <div className='bg-white rounded-lg p-6 '>
      <h3 className='text-lg font-bold text-gray-900'>Order Summary</h3>
      <div className='mt-4 border-t border-gray-200 pt-4'>
        <div className='flex justify-between text-sm text-gray-700'>
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className='flex justify-between text-sm text-gray-700 mt-2'>
          <span>Shipping estimate</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className='flex justify-between text-sm text-gray-700 mt-2'>
          <span>Tax estimate</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className='flex justify-between text-sm font-semibold text-gray-900 mt-4 border-t border-gray-200 pt-4'>
          <span>Order total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
