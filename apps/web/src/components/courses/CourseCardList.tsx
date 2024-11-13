import React from 'react';
import CourseCard from './CourseCard';

interface Course {
  id: string;
  imageUrl: string;
  title: string;
  courseCount: number;
  description: string;
}

interface CourseCardListProps {
  courses: Course[];
  role: string;
}

const CourseCardList: React.FC<CourseCardListProps> = ({ courses, role }) => {
  return (
    <section className="flex justify-between flex-wrap gap-4">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          imageUrl={course.imageUrl}
          title={course.title}
          courseCount={course.courseCount}
          description={course.description}
          role={role}
        />
      ))}
    </section>
  );
};

export default CourseCardList;
