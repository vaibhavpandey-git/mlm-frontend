// Example.tsx

'use client'

// React Imports
import { useState } from 'react'
import type { MouseEvent } from 'react'

// MUI Imports
import ProductCard from '@/views/product/ProductCard'
import { Button } from '@headlessui/react'
import CartModal from '../tailwind/CartModal'

// Define products data
const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black'
  },
  {
    id: 2,
    name: 'Classic White Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: "Front of men's Classic White Tee.",
    price: '$30',
    color: 'White'
  },
  {
    id: 3,
    name: 'Graphic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
    imageAlt: "Front of men's Graphic Tee.",
    price: '$40',
    color: 'Gray'
  },
  {
    id: 4,
    name: 'Premium Hoodie',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
    imageAlt: "Front of men's Premium Hoodie.",
    price: '$60',
    color: 'Navy'
  }
  // Add more products as needed
]

export default function Example() {
  // States for managing share menu
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const [currentProduct, setCurrentProduct] = useState<any>(null)

  const open = Boolean(anchorEl)

  const handleClick = (event: MouseEvent<HTMLButtonElement>, product: any, action: 'share' | 'buy') => {
    setAnchorEl(event.currentTarget)
    setCurrentProduct(product)
    handleAddToCart(product)
    if (action === 'buy') {
      handleCartOpen()
    }
  }

  const handleClose = () => {
    setAnchorEl(null)
    setCurrentProduct(null)
  }

  // States for managing the cart and modal
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<any[]>([])

  const handleCartOpen = () => setIsCartOpen(true)
  const handleCartClose = () => setIsCartOpen(false)

  const handleAddToCart = (product: any) => {
    setCartItems(prevItems => {
      const itemIndex = prevItems.findIndex(item => item.id === product.id)
      if (itemIndex > -1) {
        const updatedItems = [...prevItems]
        updatedItems[itemIndex].quantity += 1
        return updatedItems
      }
      return [...prevItems, { ...product, quantity: 1 }]
    })
  }

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems(prevItems => prevItems.map(item => (item.id === id ? { ...item, quantity } : item)))
  }

  const handleRemoveItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900'>Customers also purchased</h2>

        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {products.map(product => (
            <ProductCard key={product.id} product={product} handleClick={handleClick} handleClose={handleClose} />
          ))}
        </div>

        <CartModal isOpen={isCartOpen} onClose={handleCartClose} />
      </div>
    </div>
  )
}
