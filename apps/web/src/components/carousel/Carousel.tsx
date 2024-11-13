// Carousel.tsx
import React from 'react';
import BasicCardExample from './card';

const Carousel: React.FC = () => {
  const items = [
    <BasicCardExample key="1"  />,
    <BasicCardExample key="2" />,
    <BasicCardExample key="3" />,
  ];

  return (
    <div className={`carousel w-full p-8 rounded-lg shadow-lg transition-colors duration-300 `}>
      <div className="flex flex-row justify-between gap-4">
        {items.map((item, index) => (
          <div key={index} className="flex-1">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
