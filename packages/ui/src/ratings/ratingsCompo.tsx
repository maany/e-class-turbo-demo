import React from 'react';
import { Star } from 'lucide-react';

interface FractionalRatingProps {
    rating: number;
    totalStars?: number;
    size?: number;
}

const FractionalStarRating = ({ rating = 4.6, totalStars = 5, size = 16 }:FractionalRatingProps) => {

  const wholeStars = Math.floor(rating);
  const decimalPart = rating % 1;

  return (
    <div className="flex flex-col gap-3">
      <div className="relative flex gap-1">
        {[...Array(totalStars)].map((_, index) => {
          let fillPercentage = 0;
          
          if (index < wholeStars) {
            fillPercentage = 100;
          } else if (index === wholeStars) {
            fillPercentage = decimalPart * 100;
          }

          return (
            <div key={index} className="relative" style={{ width: size, height: size }}>
              <Star 
                size={size} 
                className="absolute  text-gray-200"
                strokeWidth={1.5}
              />

              <div 
                style={{ width: `${fillPercentage}%` }} 
                className="absolute h-full overflow-hidden"
              >
                <Star 
                  size={size} 
                  className="text-[#F59E0B] fill-[#F59E0B]"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default FractionalStarRating;