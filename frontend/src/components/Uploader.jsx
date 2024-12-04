import { useState } from 'react';
import Viewer from './Viewer';


const Uploader = () => {
  const [isUploaded, setIsUploaded] = useState(false);

  //handler for file upload
  const handleFileChange = (event) => {
    if(event.target.files && event.target.files.length > 0) {
      setIsUploaded(true);
    }else {
      setIsUploaded(false);
    }
  }
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-screen">
      {/* Upload Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-100 p-4">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-center">
          Upload Your Photo
        </h1>
        <input
          type="file"
          className="border rounded p-2 w-full md:w-3/4 lg:w-1/2"
          onChange={handleFileChange}
        />
      </div>

      {/* Viewer Section */}
      <div className="w-full md:w-1/2 bg-black h-48 sm:h-64 md:h-full">
      {isUploaded ? ( // Render Viewer only when a file is uploaded
          <Viewer />
        ) : (
          <p className="text-white text-center">
            Please upload a photo to see the 3D model.
          </p>
        )}
      </div>
    </div>
  );
};

export default Uploader;
