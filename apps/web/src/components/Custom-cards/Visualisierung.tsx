import React from 'react';
import Badge from '@repo/ui/badge';
import Button from '@repo/ui/button';

interface CustomCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  buttonText: string;
  badgeText?: string;
}

const CustomCard: React.FC<{data:CustomCardProps}> = ({data}) => {
  console.log(data)
  return (
    <article className="flex flex-col max-w-[362px] max-h-[542px]">
      <div className="flex relative flex-col justify-center w-full rounded-2xl border border-solid bg-stone-900 border-stone-800">
        <img loading="lazy" src={data?.imageSrc} alt="" className="object-contain z-0 w-full rounded-xl aspect-[1.39]" />
        <div className="flex z-0 flex-col p-4 w-full">
          <header>
            <h2 className="text-2xl font-bold leading-none text-stone-50">{data?.title}</h2>
            <p className="mt-2 text-base leading-6 text-stone-300 mb-3 ">{data?.description}</p>
          </header>
          <Button className="w-full py-3" size={"medium"}  children={data?.buttonText} />
        </div>
        <Badge 
           className="absolute right-2 top-3 z-10 " 
           variant="secondary" 
           size="big"
          >
            {data?.badgeText}
          </Badge>
      </div>
    </article>
  );
};

export default CustomCard;