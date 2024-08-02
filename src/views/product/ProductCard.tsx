// ProductCard.tsx

'use client'

// React Imports
import { MouseEvent } from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

interface Product {
  id: number
  name: string
  href: string
  imageSrc: string
  imageAlt: string
  price: string
  color: string
}

interface ProductCardProps {
  product: Product
  anchorEl: HTMLElement | null
  open: boolean
  handleClick: (event: MouseEvent<HTMLButtonElement>, product: Product) => void
  handleClose: () => void
}

const ProductCard: React.FC<ProductCardProps> = ({ product, anchorEl, open, handleClick, handleClose }) => {
  return (
    <div key={product.id} className='group relative'>
      <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
        <img
          alt={product.imageAlt}
          src={product.imageSrc}
          className='h-full w-full object-cover object-center lg:h-full lg:w-full'
        />
      </div>
      <div className='mt-4 flex justify-between'>
        <div>
          <h3 className='text-sm text-gray-700'>
            <a href={product.href}>
              <span aria-hidden='true' className='absolute inset-0' />
              {product.name}
            </a>
          </h3>
          <p className='mt-1 text-sm text-gray-500'>{product.color}</p>
        </div>
        <p className='text-sm font-medium text-gray-900'>{product.price}</p>
      </div>
      <div className='mt-4 flex justify-between items-center'>
        <Button variant='contained' color='primary'>
          Buy
        </Button>
        <IconButton
          id={`share-button-${product.id}`}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : 'false'}
          onClick={event => handleClick(event, product)}
        >
          <i className='ri-share-line' />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl && open)}
          MenuListProps={{ 'aria-labelledby': `share-button-${product.id}` }}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <i className='ri-facebook-fill text-xl' />
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <i className='ri-twitter-fill text-xl' />
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <i className='ri-linkedin-fill text-xl' />
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <i className='ri-google-fill text-xl' />
          </MenuItem>
        </Menu>
      </div>
    </div>
  )
}

export default ProductCard
