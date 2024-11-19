import React from 'react';
import { Card, CardBody, CardFooter, CardHeader } from "../card";
import { Languages, Video } from 'lucide-react';
import Badge from '../badge';
import Button from '../button';
import FractionalStarRating from '../ratings/ratingsCompo';

interface Course {
  image: string;
  title: string;
}

interface CoachingdemandProps {
  coachName: string;
  coachImage: string;
  languages: string[];
  sessionCount: number;
  skills: string[];
  description: string;
  courses: Course[];
  rating: number;
}

const Coursedemand: React.FC<{ course: CoachingdemandProps }> = ({ course }) => {
  return (
    <Card className="text-tbase bg-[#292524] h-[488px] w-[388px] p-4">
      <CardHeader className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <img src={course.coachImage} className="w-10 h-10" alt="coach-img" />
          <div>
            <p className="text-white">{course.coachName}</p>
            <div className="flex items-center gap-1">
              <FractionalStarRating rating={course.rating} />
              <p className='text-sm'>{course.rating}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="flex items-center gap-1">
            <Languages />
            <span className="capitalize">{course.languages.join(', ')}</span>
          </p>
          <p className="flex items-center gap-1">
            <Video />
            <span className="capitalize">
              {course.sessionCount} coaching session
              {course.sessionCount > 1 ? 's' : ''}
            </span>
          </p>
        </div>
        <div className="flex flex-wrap w-full min-h-14 items-center gap-2">
          {course.skills.map((skill, index) => (
            <Badge key={index} className="h-6 w-auto py-1 text-base">
              {skill}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardBody className="mt-4 flex flex-col gap-4">
        <p className="font-normal min-h-21 text-base text-tbase leading-[150%]">
          {course.description}
        </p>
        <div className="flex items-start">
          <div className="w-full flex flex-wrap gap-1">
            <span className="whitespace-nowrap">Teaches:</span>
            {course.courses.map((course, index) => (
              <div className="flex items-center gap-1" key={index}>
                <img
                  className="rounded-smallrad w-6 h-6"
                  src={"https://res.cloudinary.com/dyve1c6cb/image/upload/v1731927763/2151206389_1_qpaemc.jpg"}
                  alt={`Course ${index + 1}`}
                />
                <p className="text-primary text-bold text-sm capitalize">
                  {course.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </CardBody>
      <CardFooter className="py-4 gap-2 mt-4">
        <Button variant="secondary" className="w-full" size="medium">
          Details
        </Button>
        <Button variant="primary" className="w-full" size="medium">
          Enroll Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Coursedemand;