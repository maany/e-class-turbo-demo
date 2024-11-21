import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from './carousel1';
import Image from 'next/image';
import Photo from "../../public/courses/33.png"
import Button from "@repo/ui/button";
import { CiClock2, CiStar } from 'react-icons/ci';
import Badge from '@repo/ui/badge';


const BasicCardExample = () => {
  return (
    <Card className="max-w-[420px] h-[550px] p-0 bg-bgprimary border-bgprimary">
      <CardHeader className="text-lg font-bold">
        <Image alt='not-found' width={410} height={220} src={Photo} className='w-full h-[220px] rounded-md' />
        <div className='flex flex-col gap-2 px-4 py-2'>
          <h1 className='text-tbase'>Campaning</h1>
          <div className='w-full flex gap-2 text-white' >
            <Badge className='flex gap-0.5 items-center' variant={"secondary"} size={"big"}><CiClock2 />  2h 43m</Badge>
            <Badge className='flex gap-0.5 items-center' variant={"secondary"} size={"big"}><CiStar /> 4.7</Badge>
            <Badge className='flex gap-0.5 items-center' variant={"secondary"} size={"big"}>4 courses </Badge>
          </div>
        </div>
      </CardHeader>
      <CardBody className="flex flex-col space-y-2 px-4 py-2 text-tbase">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dignissimos, ipsa exercitationem animi qui odio porro, molestiae aliquam aliquid aperiam atque sit
          veniam esse tenetur error! Omnis maiores possimus minus?</p>
      </CardBody>
      <CardFooter className="flex flex-col gap-2 justify-end space-x-2 px-4 py-2">
        <div className='flex gap-2'>
          <Button size={"large"}>Purchase Package</Button>
          <Button variant={"secondary"} size={"medium"}>Details</Button>
        </div>
        <div className='flex gap-2 text-tbase' >
          <p>CChf840</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BasicCardExample;


// // BasicCardExample.tsx
// import React from 'react';
// import { Card, CardHeader, CardBody, CardFooter } from "./carousel1";
// import Image from 'next/image';
// import Photo from "../../public/courses/1.png";
// import Button from "../buttons/Button";

// interface BasicCardExampleProps {
//   theme: 'theme1' | 'theme2' | 'theme3';
// }

// const BasicCardExample: React.FC<BasicCardExampleProps> = ({ theme }) => {
//   const cardClasses = `bg-${theme}-background text-${theme}-primary font-theme`;

//   return (
//     <Card className={`max-w-[510px] p-0 ${cardClasses}`}>
//       <CardHeader className="text-lg font-bold">
//         <Image alt='not-found' width={410} height={200} src={Photo} className='w-full h-[200px]' />
//         <div className='flex flex-col gap-2 p-2'>
//           <h1>Campaigning</h1>
//           <div className='w-full flex gap-2'>
//             <Button theme={theme} size="small">2h 43m</Button>
//             <Button theme={theme} size="small">4.7</Button>
//             <Button theme={theme} size="small">4 courses</Button>
//           </div>
//         </div>
//       </CardHeader>
//       <CardBody className="flex flex-col space-y-2 p-2">
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dignissimos, ipsa exercitationem animi qui odio porro, molestiae aliquam aliquid aperiam atque sit veniam esse tenetur error! Omnis maiores possimus minus?</p>
//       </CardBody>
//       <CardFooter className="flex flex-col gap-2 justify-end space-x-2 p-2">
//         <div className='flex gap-2'>
//           <Button className='w-[50%]' theme={theme} size="large">Purchase Package</Button>
//           <Button theme={theme} size="medium">Details</Button>
//         </div>
//         <div className='flex gap-2'>
//           <p>CChf840</p>
//         </div>
//       </CardFooter>
//     </Card>
//   );
// };

// export default BasicCardExample;
