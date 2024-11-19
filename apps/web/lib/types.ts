export interface Coursecard{
   
    image: string;
    title: string;
    rating: number;
    author: string;
    authorImage: string;
    language: string;
    duration: string;
    description: string;
  
}

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
//   onDetailsClick?: () => void;
//   onEnrollClick?: () => void;
}