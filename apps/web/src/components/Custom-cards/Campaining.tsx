import React from 'react';
import Badge from '@repo/ui/badge';
import Button from '@repo/ui/button';

interface CustomCardProps {
  title: string;
  description: string;
  imageSrc: string;
  buttonText: string;
  badgeText?: string;
}

const CustomCard2: React.FC<{data: CustomCardProps}> = ({ data }) => {
  console.log(data)
  return (
    <article className="flex flex-col max-w-[362px] max-h-[510px]">
      <div className="relative flex flex-col justify-between w-full h-full rounded-2xl border border-solid bg-stone-900 border-stone-800">
        <div className="relative">
          <img
            loading="lazy"
            src={data?.imageSrc}
            alt={data?.title}
            className="object-cover w-full rounded-t-2xl aspect-[1.39] max-h-[220px]"
          />
          <Badge className="absolute right-2 top-3 z-10" variant="secondary" size="big">
            {data?.badgeText}
          </Badge>
        </div>
        <div className="flex flex-col p-4 w-full flex-1">
          <header>
            <h2 className="text-2xl font-bold leading-none text-stone-50">{data?.title}</h2>
            <p className="mt-2 text-base leading-6 text-stone-300 mb-3">{data?.description}</p>
          </header>
          <div className="mt-auto">
            <Button className="w-full py-3" size="medium">
              {data?.buttonText}
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CustomCard2;
