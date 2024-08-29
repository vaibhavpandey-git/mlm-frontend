import { ReactNode, useState } from 'react';

export const steps = [
  { id: 0, name: 'Checkout Details' , step : 'form' },
  { id: 1, name: 'Payment',step : 'payment' },
  { id: 2, name: 'Upload Proof', step : 'upload' },
];

type MultiStepPanelProps = {
  currentStep : number;
  onChangeStep : any
}
const MultiStepPanel: React.FC<MultiStepPanelProps> = ({ currentStep , onChangeStep}) => {

  return (
    <div className="container mx-auto p-4">
      <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 border border-gray-200 rounded-lg  sm:text-base sm:p-4 sm:space-x-4 rtl:space-x-reverse">
        {steps.map((step, index) => (
          <li onClick={()=>onChangeStep(step)} key={step.id} className={`cursor-pointer flex items-center ${index  === currentStep ? 'text-blue-600' : ''}`}>
            <span className={`flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0 ${index <= currentStep ? 'border-blue-600' : 'border-gray-500'}`}>
              {step.id}
            </span>
            {step.name.split(' ').map((part, i) => (
              <span key={i} className="hidden sm:inline-flex sm:ms-2">{part}</span>
            ))}
            {index < steps.length - 1 && (
              <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MultiStepPanel;
