import { GetStaticProps } from 'next';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CardPage from '@/components/home/CardPage';
import Firstpage from '@/components/home/FirstPage';
import OffersByTopic from '@/components/home/Offersbytopic';
import CoachingOnDemand from '@/components/home/CoachingOnDemand';
import  {AccordionExample1}  from '@/components/home/Accordian';

export default function Course() {
  return (
    <div className='w-full min-h-screen   bg-surfacecolour p-8 flex flex-col lg:gap-20 md:gap-16 gap-8'>
      <Firstpage />
      <CardPage />
      <OffersByTopic />
      <CoachingOnDemand />
      <div className='flex justify-center items-center'> <AccordionExample1  /></div>
      
    </div>
  );
}