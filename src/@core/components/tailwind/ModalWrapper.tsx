'use client'

import { ReactElement } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

type ModalProps = {
    isOpen: boolean
    onClose: any
    children: ReactElement
}

export default function ModalWrapper({ isOpen, onClose, children }: ModalProps) {
    const router = useRouter()

    return (
        <Dialog open={Boolean(isOpen)} onClose={onClose} className='relative z-10000'>
            <DialogBackdrop
                transition
                className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0'
            />

            <div className='fixed inset-0 overflow-hidden'>
                <div className='absolute inset-0 overflow-hidden'>
                    <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
                        <DialogPanel
                            transition
                            className='pointer-events-auto w-screen max-w-xl transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700'
                        >
                            <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
                                <div className='flex-1 overflow-y-auto px-4 py-6 sm:px-6'>
                                    {/* Children */}
                                    {children}

                                </div>

                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}
