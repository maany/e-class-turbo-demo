import React from 'react';

import Image from 'next/image';


import { CiClock2, CiStar } from 'react-icons/ci';
Badge
import Button from '@repo/ui/button';
import Badge from '@repo/ui/badge';
import { Card, CardBody, CardFooter, CardHeader } from '@repo/ui/card';


const BasicCardExample = () => {
  return (
    <Card className="lg:w-[390px] w-[352px] max-h-[647px] bg-[#292524]">
    <CardHeader>
     <img alt='not-found' src={"https://res.cloudinary.com/dyve1c6cb/image/upload/v1731928044/Rectangle_3_oqzlev.png"} className='w-full h-[220px] rounded-md'/>
    </CardHeader>
    <CardBody className="flex flex-col px-6 text-tbase pt-6">  
    <div className='flex flex-col gap-4 py-2'>
      <h1 className='text-tbase text-xl  lg:text-[32px] line-clamp-2'>Package Title, Firmen und Einzelpersonen</h1>
      <div className='w-full flex gap-2 text-white' >
        <Badge className='flex gap-0.5 items-center p-0 py-1 px-2 text-sm' variant={"secondary"} size={"big"}><CiClock2 size={16}/>2h 43m</Badge>
        <Badge  className='flex gap-0.5 items-center p-0 py-1 px-2 text-sm'variant={"secondary"} size={"big"}><CiStar size={16}/> 4.7</Badge>
        <Badge  className='flex gap-0.5 items-center p-0 py-1 px-2 text-sm'variant={"secondary"} size={"big"}>4 courses </Badge>
      </div>
     </div>
      <p className='lg:text-xl md:text-base sm:text-sm py-4 '>Das Angebot "Visualisierung" richtet sich an Firmen und Einzelpersonen, die bereits über eine Idee, ein Konzept und ein Briefing verfügen.</p>
    </CardBody>
    <CardFooter className="flex flex-col gap-2 justify-end space-x-2 px-6 pb-6"> 
     <div className='flex  gap-2'>
      <Button  size={"large"}>Purchase Package</Button>
      <Button  variant={"secondary"} size={"medium"}>Details</Button>
     </div>
    <div className='flex gap-2' >
      <p>CChf840</p>
      <p>save <span className='uppercase text-[#BEF264]'>CHF 240</span></p>
    </div>
    </CardFooter>
  </Card>
  );
};

export default BasicCardExample;