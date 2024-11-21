import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@repo/ui/button';

interface CourseCardProps {
  imageUrl: string;
  title: string;
  courseCount: number;
  description: string;
  role: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ imageUrl, title, courseCount, description }) => {
  const { t } = useTranslation('./course/courseCard'); // Specify the namespace for this component

  return (
    <article className="w-[300px] h-full bg-bgprimary border border-surfacecolour rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105 hover:shadow-2xl ml-0">
      <img
        loading="lazy"
        src={imageUrl}
        alt={title} // Directly use props here
        className="object-cover w-full h-40"
      />
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2 leading-tight">
            {title}
          </h2>
          <div className="flex items-center mb-4 text-white text-sm font-semibold">
            <span>
              {courseCount} {courseCount > 1 ? t('courseCount') : t('course')}
            </span>
          </div>
          <p className="text-base text-white mb-4">
            {description}
          </p>
        </div>
        <div className="flex justify-center ">
          <Button className="w-full py-3"  size={"medium"} >
            {t('view Course')}
          </Button>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;
