import { Clock3, Languages, Star, User } from "lucide-react";
import Badge from "../badge";
import Button from "../button";

import { Card, CardBody, CardHeader, CardFooter } from "../card";

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

function Coursecard({ course }: CourseCardProps) {
  return (
    <Card className="w-[390px] h-[500px] bg-[#292524] text-white rounded-buttonHuge">
      <CardHeader className="w-full mb-4">
        <img
          src={"https://res.cloudinary.com/dyve1c6cb/image/upload/v1731927763/2151206389_1_qpaemc.jpg"}
          alt="Course"
          className="w-full h-[162px]
           rounded-tl-smallrad rounded-tr-smallrad"
        />
      </CardHeader>
      <CardBody className="px-4 pt-4 flex flex-col gap-2">
        <p className="leading-[150%] capitalize flex gap-3 items-center">
          <strong className="truncate">{course.title}</strong>
          <Badge className="py-[3px] w-10 h-5 rounded-smallrad">
            <span className="text-[12px] flex items-center justify-center">
              <Star className="w-3 h-3" />
              {course.rating}
            </span>
          </Badge>
        </p>
        <p className="flex items-center w-full gap-1 text-sm h-auto">
          <span className="flex items-center text-tbase gap-1">
            <User className="w-6 h-6" />
            <span className="text-sm text-tbase">created by</span>
            <img
              alt="Author"
              className="h-6 w-6  rounded-full"
              src={course.authorImage}
            />
            <span className="text-primary max-w-20 truncate">{course.author}</span>
          </span>
        </p>
        <p className="flex items-center w-full gap-4 text-sm h-auto text-tbase">
          <span className="text-sm text-tbase capitalize flex items-center gap-1">
            <Languages className="w-6 h-6" />
            {course.language}
          </span>
          <span className="flex items-center gap-1 text-tbase">
            <Clock3 className="h-6 w-6" />
            <span>{course.duration}</span>
          </span>
        </p>
        <p className="font-normal text-base text-tbase leading-[150%] mt-2 line-clamp-3">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel blanditiis quis quas in, impedit magnam tenetur amet laudantium adipisci expedita quia repellendus recusandae dicta odio excepturi quo nostrum magni vero laboriosam minima necessitatibus ratione! Aliquam, natus unde autem laboriosam adipisci voluptate quae voluptas, quod praesentium quibusdam, a explicabo obcaecati numquam.
        </p>
      </CardBody>
      <CardFooter className="px-4 py-4 gap-2">
        <Button variant="secondary" className="w-full" size="medium">
          Details
        </Button>
        <Button variant="primary" className="w-full" size="medium">
          Enroll Now
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Coursecard;