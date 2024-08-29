// ProductCard.tsx

'use client'

// React Imports
import { MouseEvent, useState } from 'react'


interface ProductCardProps {
    src: string,
    title: any,
    subTitle: string
}

const ImageComponent: React.FC<ProductCardProps> = ({ src, title, subTitle }) => {

    return (
        <div className='group relative'>
            <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none  lg:h-80'>
                <img
                    alt={title}
                    src={src}
                    className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                />
            </div>
            <div className='mt-4 flex justify-between'>
                <div>
                    <h3 className='text-sm text-gray-700'>
                        <a>
                            <span aria-hidden='true' className='absolute inset-0' />
                            {title}
                        </a>
                    </h3>
                    <p className=' text-sm text-gray-500'>{subTitle}</p>
                </div>
            </div>

        </div>
    )
}

export default ImageComponent
