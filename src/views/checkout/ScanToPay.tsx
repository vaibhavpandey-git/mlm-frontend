'use client'

import { Box } from "@mui/material"
import QRCode from "qrcode";
import { useEffect, useState } from "react";

interface PaymentInfo {
  amount: number;
  upiId: string;
  note: string;
  name: string;
}



const ScanToPay = () => {

  const product = {
    title: "Ghee Product",
    price: 5000,
    image: 'https://picsum.photos/200/300',
    isActive: true,
    parentCommission: 0.4,
    grandParentCommission: 0.2,
    description: "Tagda product hai",
    priceBreakUp: [
      {
        label: 'Price',
        amount: '₹5000'
      },
      {
        label: '',
        amount: 'Incl. all taxes'
      },
      {
        label: 'Total Pay',
        amount: '₹5000'
      }
    ]
  }

  // const upiId = process.env.UPI_ID
  const upiId = '7827295033@paytm'

  const [svgData, setSvgData] = useState<string>('');
  const [upiLink, setUpiLink] = useState<string>('');

  const generateUPIQRCode = async ({ amount, upiId, note, name }: PaymentInfo) => {
    // UPI payment string
    const upiString = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amount}&tn=${encodeURIComponent(note)}&cu=INR`;

    try {
      // Generate the QR code as an SVG
      const svg = await QRCode.toString(upiString, { type: 'svg' });
      setSvgData(svg);
      setUpiLink(upiString); // Set the UPI link for direct payment
      console.log(upiLink);
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  useEffect(() => {
    const amount = product.price;
    const note = "This is for ghee"
    const name = "Big MLM"
    generateUPIQRCode({ amount, upiId, note, name })
  }, [product])



  return (
    <Box sx={{ maxWidth: 'lg', mx: 'auto', px: { xs: 2, sm: 6 }, py: { xs: 6, sm: 12 } }}>
      <div className="flex items-center pb-3 border-b border-gray-200">
        <div className="flex-1">
          <h3 className="text-gray-800 text-xl font-bold">Details</h3>
          <p className="text-gray-600 text-xs mt-1">Please fill your details</p>
        </div>

      </div>
      <div className='pt-6'>
        <div className='flex flex-col items-center justify-center  p-5'>
          <div className='bg-white rounded-lg max-w-md w-full'>

            <div className='flex flex-col items-center'>
              <img
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                alt='Company Logo'
                width={50}
                height={50}
                className='mb-4'
              />
              <h1 className='text-2xl font-semibold text-gray-900 mb-6'>MLM</h1>
            </div>
            <div className='flex justify-center mb-6'>
              {svgData && (
                <div
                  dangerouslySetInnerHTML={{ __html: svgData }}
                  style={{ width: '200px', height: '200px' }}
                />
              )}
              {/* <svg width={200} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"><path d="M1 1h7v7h-7zM10 1h1v1h2v1h1v1h-2v1h4v-1h-1v-1h1v-1h1v3h1v1h-7v-2h-1v2h1v1h-1v2h-1v-6h1zM13 1h1v1h-1zM15 1h1v1h-1zM17 1h1v1h-1zM19 1h4v1h-1v1h-1v-1h-1v1h-1zM27 1h7v7h-7zM2 2v5h5v-5zM28 2v5h5v-5zM3 3h3v3h-3zM20 3h1v1h-1zM22 3h1v1h-1zM29 3h3v3h-3zM19 4h1v1h-1zM24 4h1v1h1v1h-3v-1h1zM21 5h1v1h-1zM19 6h2v1h-1v1h-1zM22 6h1v1h-1zM11 7h1v1h-1zM13 7h1v2h-2v-1h1zM15 7h1v3h-1v1h1v-1h2v-1h1v1h1v-2h1v-1h1v1h1v-1h1v3h-1v3h1v1h1v-1h2v1h1v1h-4v1h-1v-2h-1v-1h-1v-2h-2v1h1v1h-2v-2h-1v2h1v1h-1v1h1v-1h2v1h-1v1h-2v2h1v3h-1v1h1v1h-2v1h-1v-2h1v-2h-1v-1h1v-5h-1v-1h1v-1h-1v1h-2v2h-1v-1h-1v-2h-1v1h-1v-3h1v1h1v-1h1v1h1v1h1v-1h-1v-1h1v-1h1zM17 7h1v2h-1zM25 7h1v1h-1zM1 9h1v1h-1zM3 9h5v1h-1v1h-2v-1h-1v2h2v1h-2v1h-1v-1h-1v-2h1zM27 9h5v1h2v1h-1v1h-1v1h-2v-1h1v-2h-3v1h1v2h1v1h-2v-1h-1v-1h-1v-1h1zM24 10h2v1h-2zM7 11h1v1h-1zM33 12h1v1h-1zM1 13h1v1h-1zM7 13h2v1h-2zM20 13h1v1h-1zM32 13h1v1h1v1h-1v3h-1v-1h-2v-1h1v-2h1zM2 14h1v1h2v1h-2v1h-1v1h4v1h3v1h2v-1h1v2h-1v2h-2v-1h1v-1h-1v1h-2v-1h1v-1h-2v2h-2v-1h-1v-1h1v-1h-2v1h-1v-5h1zM7 15h1v1h-1zM9 15h1v1h-1zM21 15h1v1h-1zM10 16h5v1h-1v1h-1v-1h-1v1h-1v1h-2v-1h1zM19 16h1v1h-1zM22 16h1v1h1v1h1v1h-3v-1h-1v-1h1zM26 16h1v2h1v1h-1v1h-1zM28 16h1v1h-1zM7 17h1v1h-1zM18 17h1v1h-1zM29 17h1v1h-1zM12 18h1v1h-1zM20 18h1v1h-1zM33 18h1v1h-1zM19 19h1v1h-1zM21 19h1v1h-1zM29 19h3v2h-1v-1h-1v1h1v2h-1v-1h-2v-1h1zM13 20h2v1h-2zM22 20h4v1h-2v1h-1v-1h-1zM2 21h1v2h-1v3h-1v-4h1zM12 21h1v1h-1zM19 21h1v1h-1zM26 21h1v1h-1zM32 21h2v2h-1v1h1v1h-3v-1h1zM20 22h3v1h-3zM24 22h1v1h-1zM27 22h1v2h-1zM3 23h3v1h-3zM7 23h2v1h-2zM12 23h1v1h-1zM25 23h1v1h-1zM29 23h1v1h-1zM6 24h1v1h1v1h-2zM11 24h1v1h-1zM14 24h1v1h1v1h-1v1h-2v-2h1zM17 24h1v1h1v1h1v-1h1v1h1v1h-3v1h1v1h-2v1h-1v-2h1v-1h-1zM19 24h1v1h-1zM22 24h1v1h-1zM24 24h1v1h1v-1h1v1h1v-1h1v1h2v1h-1v4h1v1h1v2h1v1h-4v-2h1v-1h-1v1h-3v-1h2v-1h-3v-1h-1v1h-1v-1h-1v-2h1v1h1v-1h1v-1h-1zM3 25h1v1h-1zM9 25h1v2h-1zM26 26v3h3v-3zM33 26h1v1h-1zM1 27h7v7h-7zM10 27h1v1h-1zM12 27h1v1h-1zM15 27h2v1h-2zM27 27h1v1h-1zM32 27h1v1h-1zM2 28v5h5v-5zM9 28h1v1h1v-1h1v1h2v-1h1v4h-1v-1h-2v1h-1v-2h-1v2h-1zM31 28h1v1h-1zM33 28h1v1h-1zM3 29h3v3h-3zM16 30h1v1h1v1h-1v2h-3v-1h1v-1h1zM19 30h4v1h-3v1h-1zM24 30h1v2h-2v-1h1zM32 30h2v1h-2zM13 32h1v1h-1zM20 32h3v1h-1v1h-2zM9 33h2v1h-2zM12 33h1v1h-1zM18 33h1v1h-1zM23 33h4v1h-4z" /></svg> */}
            </div>
            <div className='text-center'>
              <p className='text-xl text-gray-700 mb-2'>Amount to Pay:</p>
              <p className='text-3xl font-bold text-gray-900'>${product.price}</p>
            </div>

            {upiLink && (
              <div style={{ "textAlign": "center" }}>
                <a href={upiLink} target="_blank" rel="noopener noreferrer">
                  <u><b>Pay via UPI</b></u>
                </a>
              </div>
            )}

          </div>
        </div>

      </div>
    </Box>
  )
}

export default ScanToPay
