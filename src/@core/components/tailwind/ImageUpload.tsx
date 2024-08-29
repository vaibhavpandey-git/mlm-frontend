import { useState } from 'react';

const ImageUpload: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setProgress(35); // Simulating progress
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setFileName('');
    setProgress(0);
  };

  return (

    <div className="flex flex-wrap justify-center items-center w-full h-full">
      <div className="w-full max-w-lg bg-white  rounded-lg p-6 relative">
        <div className="flex items-center pb-3 border-b border-gray-200">
          <div className="flex-1">
            <h3 className="text-gray-800 text-xl font-bold">Upload Receipt</h3>
            <p className="text-gray-600 text-xs mt-1">Upload screenshot or Receipt of payment</p>
          </div>

        </div>

        <div className="rounded-lg border-2 border-gray-200 border-dashed mt-6">
          <div className="p-4 min-h-[180px] flex flex-col items-center justify-center text-center cursor-pointer">
            {image ? (
              <img src={image} alt="Uploaded Preview" className="w-full h-full object-cover" />
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 mb-4 fill-gray-600 inline-block"
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                    data-original="#000000"
                  />
                  <path
                    d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                    data-original="#000000"
                  />
                </svg>
                <h4 className="text-sm text-gray-600">
                  Drag & Drop or{' '}
                  <label htmlFor="chooseFile" className="text-blue-600 cursor-pointer">
                    Choose file
                  </label>{' '}
                  to upload
                </h4>
                <input type="file" id="chooseFile" className="hidden" onChange={handleImageChange} />
              </>
            )}
          </div>
        </div>

        {image && (
          <div className="flex flex-col bg-gray-50 p-4 rounded-lg mt-4">
            <div className="flex">
              <p className="text-xs text-gray-600 flex-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 mr-2 fill-current inline-block"
                >
                  <path
                    d="m433.798 106.268-96.423-91.222C327.119 5.343 313.695 0 299.577 0H116C85.673 0 61 24.673 61 55v402c0 30.327 24.673 55 55 55h280c30.327 0 55-24.673 55-55V146.222c0-15.049-6.27-29.612-17.202-39.954zM404.661 120H330c-2.757 0-5-2.243-5-5V44.636zM396 482H116c-13.785 0-25-11.215-25-25V55c0-13.785 11.215-25 25-25h179v85c0 19.299 15.701 35 35 35h91v307c0 13.785-11.215 25-25 25z"
                    data-original="#000000"
                  />
                  <path
                    d="M363 200H143c-8.284 0-15 6.716-15 15s6.716 15 15 15h220c8.284 0 15-6.716 15-15s-6.716-15-15-15zm0 80H143c-8.284 0-15 6.716-15 15s6.716 15 15 15h220c8.284 0 15-6.716 15-15s-6.716-15-15-15zm-147.28 80H143c-8.284 0-15 6.716-15 15s6.716 15 15 15h72.72c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
                    data-original="#000000"
                  />
                </svg>
                {fileName} <span className="ml-2">1.5 mb</span>
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
                viewBox="0 0 320.591 320.591"
                onClick={handleRemoveImage}
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </div>

            <div className="bg-gray-300 rounded-full w-full h-2 my-2">
              <div className="w-1/3 h-full rounded-full bg-blue-600 flex items-center relative">
                <span className="absolute text-xs right-0 bg-white w-2 h-2 rounded-full"></span>
              </div>
            </div>

            <p className="text-xs text-gray-600 flex-1">35% done</p>
          </div>
        )}


      </div>
    </div>
  );
};

export default ImageUpload;
