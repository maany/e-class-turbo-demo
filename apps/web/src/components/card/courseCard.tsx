
import Coursecard from '@repo/ui/coursecard';
import React from 'react'
interface Course {
    image: string;
    title: string;
    rating: number;
    author: string;
    authorImage: string;
    language: string;
    duration: string;
    description: string;
  }
  
  interface CourseCardProps {
    course: Course;
  }
  
function Coursescard({ course }: CourseCardProps) {
  return (
    <Coursecard course={course} />
  )
}

export default  Coursescard;