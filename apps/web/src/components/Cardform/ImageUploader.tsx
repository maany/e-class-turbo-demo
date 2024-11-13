import React from 'react';
import { BiCloudUpload  } from "react-icons/bi";

const ImageUploader: React.FC = () => {
  return (
    <div className="flex flex-col w-full leading-none max-md:max-w-full">
      <div className="flex overflow-hidden flex-col justify-center px-6 pt-4 pb-6 w-full rounded-lg border border-dashed bg-stone-900 border-stone-700 max-md:px-5 max-md:max-w-full">
      <div className="w-full flex justify-center items-center"><BiCloudUpload className=" text-3xl text-tbase " /></div>
      
        <div className="flex flex-col justify-center w-full">
          <div className="flex flex-wrap gap-2 justify-center items-center w-full">
            <button className="gap-1 self-stretch py-2.5 my-auto text-sm font-bold text-amber-500 rounded-md min-h-[32px]">
              Click to upload
            </button>
            <span className="self-stretch my-auto text-sm text-stone-50">
              or drag & drop file
            </span>
          </div>
          <p className="self-center mt-1 text-xs text-stone-300">
            Max size: 15MB
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;