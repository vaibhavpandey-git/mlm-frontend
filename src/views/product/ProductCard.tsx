// ProductCard.tsx

'use client'

// React Imports
import { MouseEvent, useState } from 'react'

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
  handleClick: (event: MouseEvent<HTMLButtonElement>, product: Product, action: 'share' | 'buy') => void
  handleClose: () => void
}

const ProductCard: React.FC<ProductCardProps> = ({ product, handleClick, handleClose }) => {
  const [enableShare, setEnableShare] = useState(false)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  function onShare(type: any) {
    setAnchorEl(null)
    setEnableShare(false)
  }

  function handlerShareClick(event: MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget)
    setEnableShare(true)
  }

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
        <Button variant='contained' color='primary' onClick={event => handleClick(event, product, 'buy')}>
          Buy
        </Button>
        <IconButton
          id={`share-button-${product.id}`}
          aria-haspopup='true'
          aria-expanded={enableShare ? 'true' : 'false'}
          onClick={event => handlerShareClick(event)}
        >
          <i className='ri-share-line' />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl && enableShare)}
          MenuListProps={{ 'aria-labelledby': `share-button-${product.id}` }}
          onClose={onShare}
        >
          <MenuItem onClick={() => onShare(1)}>
            <i className='ri-facebook-fill text-xl' />
          </MenuItem>
          <MenuItem onClick={() => onShare(2)}>
            <i className='ri-twitter-fill text-xl' />
          </MenuItem>
          <MenuItem onClick={() => onShare(3)}>
            <i className='ri-linkedin-fill text-xl' />
          </MenuItem>
          <MenuItem onClick={() => onShare(4)}>
            <i className='ri-google-fill text-xl' />
          </MenuItem>
        </Menu>
      </div>
    </div>
  )
}

export default ProductCard
