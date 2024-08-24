// OrderSummary.tsx

'use client'

import React from 'react'
import { BreakUpOption } from '../website/ProductList'

type OrderSummaryProps = { breakUps: BreakUpOption[] }

const OrderSummary: React.FC<OrderSummaryProps> = ({ breakUps }) => {
  console.log('breakUps', breakUps)
  function isLastItem(index: number) {
    return Boolean(breakUps && breakUps?.length - 1 === index)
  }
  return (
    <div className='bg-white rounded-lg p-6 '>
      <h3 className='text-lg font-bold text-gray-900'>Order Summary</h3>
      <div className='mt-4 border-t border-gray-200 pt-4'>
        {breakUps?.map(({ label, amount }, index) => (
          <div
            className={
              isLastItem(index)
                ? 'flex justify-between text-sm font-semibold text-gray-900 mt-4 border-t border-gray-200 pt-4'
                : 'flex justify-between text-sm text-gray-700'
            }
          >
            <span>{label}</span>
            <span>₹{amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrderSummary
