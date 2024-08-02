'use client'

// React Imports
import { useState } from 'react'
import type { MouseEvent } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

const CardMobile = ({ product }: any) => {
  // States
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const open = Boolean(anchorEl)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    product && (
      <Card>
        <Grid container>
          <Grid item xs={12} md={5} className='flex items-center justify-center'>
            <CardContent className='flex items-center justify-center'>
              <img alt={product.imageAlt} src={product.imageSrc} height={175} />
            </CardContent>
          </Grid>
          <Grid item xs={12} md={7} className='md:border-is border-bs md:border-bs-0'>
            <CardContent>
              <Typography variant='h5' className='mbe-2'>
                {product.name}
              </Typography>
              <Typography className='mbe-2'>{product.description}</Typography>
              <div className='flex gap-1'>
                <Typography color='text.primary'>Price:</Typography>
                <Typography className='font-medium' color='text.primary'>
                  {product.price}
                </Typography>
              </div>
            </CardContent>
            <CardActions className='justify-between card-actions-dense'>
              <Button startIcon={<i className='ri-shopping-cart-2-line' />}>Add to Cart</Button>
              <IconButton
                id='share-button'
                aria-haspopup='true'
                {...(open && { 'aria-expanded': true, 'aria-controls': 'share-menu' })}
                onClick={handleClick}
              >
                <i className='ri-share-line' />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                MenuListProps={{ 'aria-labelledby': 'share-button' }}
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
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    )
  )
}

export default CardMobile
