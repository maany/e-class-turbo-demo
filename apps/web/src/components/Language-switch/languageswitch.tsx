import React from 'react';
import { useTranslation } from 'react-i18next';
// import CourseCardList from '../courses/CourseCardList';
import CustomCard3 from '../Custom-cards/coaching';

const courses = [
  {
    id: '1',
    imageUrl: './courses/22.png',
    title: 'Topic Title',
    courseCount: 3,
    description: 'This course teaches you how to create powerful, cohesive brand identities that resonate with audiences and stand out in the marketplace.',
  },
];

const Languageswitch: React.FC = () => {
  const { t } = useTranslation('cardLangDemo'); 
  const data1 = {
    title: t('coachingTitle1'),
    description: t('coachingDescription1'),
    imageSrc: '/customcards/3.png',
    buttonText: t('buttonText1'),
  }
  const data2 = {
    title: t('coachingTitle2'),
    description: t('coachingDescription2'),
    imageSrc: '/customcards/3.png',
    buttonText: t('buttonText2'),
  }
  return (
    <main className="p-5 min-h-screen">
      <h1 className="sr-only">{t('courseCatalog')}</h1>
      <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {/* <CourseCardList courses={courses} role={role} /> */}
        
        <CustomCard3 data={data1} />
        <CustomCard3 data={data2}
        />
      </div>
    </main>
  );
};

export default Languageswitch;
