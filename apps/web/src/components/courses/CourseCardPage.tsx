"use client"
import React, { useEffect, useState } from 'react';
import CustomCard from '../Custom-cards/Visualisierung';
import CustomCard2 from '../Custom-cards/Campaining';
import CustomCard3 from '../Custom-cards/coaching';
import CustomCard4 from '../Custom-cards/enterprise';
import CustomCard5 from '../Custom-cards/course';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const courses = [
  {
    id: '1',
    imageUrl: './courses/22.png',
    title: 'Topic Title',
    courseCount: 3,
    description: 'This course teaches you how to create powerful, cohesive brand identities that resonate with audiences and stand out in the marketplace.',
  },
];
export interface coursecard {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  badgeText?: string;
  buttonText: string;
  type: string;
}
const CourseCardPage: React.FC = () => {
  const [courses, setCourses] = useState<coursecard[]>([]);
  const [loading,setloading] = useState<boolean>(false);
  useEffect(() => {
    async function getCourses() {
      try{
       setloading(true);
       const response = await fetch('/en/api/coursecard');
      const data = await response.json();
      setCourses(data);
      setloading(false);
      }catch(err){
        console.error('Error fetching courses:', err);
      }
    }
    getCourses();
  }, [])
  console.log(courses)
  return (
    <main className={`w-full min-h-screen  py-4 px-4`}>

      <div className="grid w-full mx-auto lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1  gap-8 mb-8 ">

      {loading|| courses.length>0 ?
         <>
          <CustomCard data={courses[0]}/>
          <CustomCard2 data={courses[1]}/>
          <CustomCard3 data={courses[2]}/> 
          <CustomCard4 data={courses[3]}/> 
          <CustomCard5 data={courses[4]}/>
          </>:<div className='col-span-full min-h-[calc(100vh-2rem)] flex items-center justify-center'><AiOutlineLoading3Quarters className='animate-infinite text-primary' size={40}/></div>

        }
        
      </div>
    </main>
  );
};

export default CourseCardPage;
