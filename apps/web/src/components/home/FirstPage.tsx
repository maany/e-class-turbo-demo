import React from 'react';

const FirstPage = () => {
  return (
    <div className="bg-black w-full md:px-16">

      <div className="flex flex-col sm:flex-row gap-16 justify-center w-full">
        {/* Text Content */}
        <div className="lg:max-w-[678px] md:max-w-[450px] flex flex-col gap-4 ">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-50">
            Platform's Title, short and powerful
          </h1>
          <p className="text-gray-200 leading-relaxed w-full lg:text-2xl text-lg">
            Platform introduction. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
            mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
            Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
          </p>
        </div>

        {/* Image Container */}

        <div className="relative w-full max-w-lg">
          <img
            src="/home/1.png"
            alt="Platform Introduction"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>


      </div>
    </div>
  );
};

export default FirstPage;