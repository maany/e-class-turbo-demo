import React from 'react';

const FirstPage = () => {
  return (
    <div className="min-h-screen bg-black ">
      <div className="container p-7 px-5 md:px-6 lg:px-11 ">
        <div className="flex flex-col lg:flex-row items-center  justify-between py-12 md:py-16 lg:py-20 gap-8 lg:gap-16">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 max-w-2xl">
            <h1 className="md:text-5xl lg:text-6xl sm:text-4xl text-3xl font-bold text-gray-50 mb-6">
              Platform's Title, short and powerful
            </h1>
            <p className="text-lg  md:text-xl text-gray-200 leading-relaxed">
              Platform introduction. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, 
              mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. 
              Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
            </p>
          </div>

          {/* Image Container */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:mt-11">
            <div className="relative w-full max-w-lg">
              <img 
                src="./home/1.png"
                alt="Platform Introduction" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;