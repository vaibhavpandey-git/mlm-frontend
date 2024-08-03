export default function Example() {
  return (
    <div className='relative overflow-hidden bg-white py-40 pb:40'>
      <div className='pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40'>
        <div className='relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8'>
          <div className='sm:max-w-lg'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>Easy and Secure Shopping</h1>
            <p className='mt-4 text-xl text-gray-500'>
              Enjoy a seamless online shopping experience with secure payment options and fast, reliable shipping. Plus,
              with our hassle-free returns, you can shop with confidence.
            </p>
          </div>
          <div>
            <div className='mt-10'>
              {/* Decorative image grid */}
              <div
                aria-hidden='true'
                className='pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl'
              >
                <div className='absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8'>
                  <div className='flex items-center space-x-6 lg:space-x-8'>
                    <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
                      <div className='h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100'>
                        <img
                          alt=''
                          src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg'
                          className='h-full w-full object-cover object-center'
                        />
                      </div>
                      <div className='h-64 w-44 overflow-hidden rounded-lg'>
                        <img
                          alt=''
                          src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg'
                          className='h-full w-full object-cover object-center'
                        />
                      </div>
                    </div>
                    <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
                      <div className='h-64 w-44 overflow-hidden rounded-lg'>
                        <img
                          alt=''
                          src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg'
                          className='h-full w-full object-cover object-center'
                        />
                      </div>
                      <div className='h-64 w-44 overflow-hidden rounded-lg'>
                        <img
                          alt=''
                          src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg'
                          className='h-full w-full object-cover object-center'
                        />
                      </div>
                      <div className='h-64 w-44 overflow-hidden rounded-lg'>
                        <img
                          alt=''
                          src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg'
                          className='h-full w-full object-cover object-center'
                        />
                      </div>
                    </div>
                    <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
                      <div className='h-64 w-44 overflow-hidden rounded-lg'>
                        <img
                          alt=''
                          src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg'
                          className='h-full w-full object-cover object-center'
                        />
                      </div>
                      <div className='h-64 w-44 overflow-hidden rounded-lg'>
                        <img
                          alt=''
                          src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg'
                          className='h-full w-full object-cover object-center'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href='#product-section'
                className='inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700'
              >
                Purchase
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
