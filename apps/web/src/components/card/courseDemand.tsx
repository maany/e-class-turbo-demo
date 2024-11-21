import Coursedemand from '@repo/ui/coursedemand'
import React from 'react'
interface Course {
    image: string;
    title: string;
}

export interface CoachingdemandProps {
    coachName: string;
    coachImage: string;
    languages: string[];
    sessionCount: number;
    skills: string[];
    description: string;
    courses: Course[];
    rating?: number;
    //   onDetailsClick?: () => void;
    //   onEnrollClick?: () => void;
}
function Coursesdemand({ course }: { course: CoachingdemandProps }) {
    return (
        <Coursedemand
            course={course}
        />
    )
}

export default Coursesdemand