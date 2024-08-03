type ButtonProProps = {
  label: string
  onClick?: any
}

const CustomButton = ({ label, onClick }: ButtonProProps) => {
  return (
  
    <div className="mt-6">
    <button onClick={onClick}
      
      className="w-full flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer"
    >
      {label}
    </button>
  </div>
  )
}

export default CustomButton
