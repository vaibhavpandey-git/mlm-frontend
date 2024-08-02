// Example.tsx

'use client'

// React Imports
import { useState } from 'react'
import type { MouseEvent } from 'react'

// MUI Imports
import ProductCard from '@/views/product/ProductCard'

// Define products data
const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 5000,
    priceBreakDown: [{label: "Price" ,value: 4237.29},{label: "GST (18%)", value: "762.71"},{label: "Total Price",value: 5000}],
    color: 'Black'
  },
  {
    id: 2,
    name: 'Classic White Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: "Front of men's Classic White Tee.",
    price: 5000,
    priceBreakDown: [{label: "Price" ,value: 4237.29},{label: "GST (18%)", value: "762.71"},{label: "Total Price",value: 5000}],
    color: 'White'
  },
  {
    id: 3,
    name: 'Graphic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
    imageAlt: "Front of men's Graphic Tee.",
    price: 5000,
    priceBreakDown: [{label: "Price" ,value: 4237.29},{label: "GST (18%)", value: "762.71"},{label: "Total Price",value: 5000}],
    color: 'Gray'
  },
  {
    id: 4,
    name: 'Premium Hoodie',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
    imageAlt: "Front of men's Premium Hoodie.",
    price: 5000,
    priceBreakDown: [{label: "Price" ,value: 4237.29},{label: "GST (18%)", value: "762.71"},{label: "Total Price",value: 5000}],
    color: 'Navy'
  }
  // Add more products as needed
]

export default function Example() {
  // States for managing share menu
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const [currentProduct, setCurrentProduct] = useState<any>(null)

  const open = Boolean(anchorEl)

  const handleClick = (event: MouseEvent<HTMLButtonElement>, product: any) => {
    setAnchorEl(event.currentTarget)
    setCurrentProduct(product)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setCurrentProduct(null)
  }

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900'>Customers also purchased</h2>

        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              anchorEl={anchorEl}
              open={Boolean(currentProduct === product && anchorEl)}
              handleClick={handleClick}
              handleClose={handleClose}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
