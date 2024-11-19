import { Coursecard } from "./types";

const coursesData: Coursecard[] = [
    {
      image: 'https://res.cloudinary.com/dgk9gxgk4/image/upload/v1725862263/Screenshot_2024-09-06_at_4.50.12_PM_j3purh.png',
      title: 'Course Title 1',
      rating: 4.5,
      author: 'Alice Smith',
      authorImage: 'https://res.cloudinary.com/dgk9gxgk4/image/upload/v1727665998/anxious-people-under-stress_01_8_ts6dma.png',
      language: 'English',
      duration: '3 hours',
      description: 'Learn the essentials of branding and identity creation in this introductory course.'
    },
    {
      image: 'https://res.cloudinary.com/dgk9gxgk4/image/upload/v1725862263/Screenshot_2024-09-06_at_4.50.12_PM_j3purh.png',
      title: 'Course Title 2',
      rating: 4.8,
      author: 'Bob Johnson',
      authorImage: 'https://res.cloudinary.com/dgk9gxgk4/image/upload/v1727665998/anxious-people-under-stress_01_8_ts6dma.png',
      language: 'Spanish',
      duration: '5 hours',
      description: 'Dive deep into advanced concepts of modern design and creative thinking.'
    },
    {
      image: 'https://res.cloudinary.com/dgk9gxgk4/image/upload/v1725862263/Screenshot_2024-09-06_at_4.50.12_PM_j3purh.png',
      title: 'Course Title 3',
      rating: 4.6,
      author: 'Chris Lee',
      authorImage: 'https://res.cloudinary.com/dgk9gxgk4/image/upload/v1727665998/anxious-people-under-stress_01_8_ts6dma.png',
      language: 'French',
      duration: '2.5 hours',
      description: 'Master the art of visual storytelling and connect with audiences like never before.'
    },
    {
      image: 'https://res.cloudinary.com/dgk9gxgk4/image/upload/v1725862263/Screenshot_2024-09-06_at_4.50.12_PM_j3purh.png',
      title: 'Course Title 4',
      rating: 4.9,
      author: 'Dana White',
      authorImage: 'https://res.cloudinary.com/dgk9gxgk4/image/upload/v1727665998/anxious-people-under-stress_01_8_ts6dma.png',
      language: 'German',
      duration: '6 hours',
      description: 'Explore the intricacies of color theory and practical application in design.'
    },
    {
      image: 'https://res.cloudinary.com/dgk9gxgk4/image/upload/v1725862263/Screenshot_2024-09-06_at_4.50.12_PM_j3purh.png',
      title: 'Course Title 5',
      rating: 4.4,
      author: 'Emma Brown',
      authorImage: 'https://res.cloudinary.com/dgk9gxgk4/image/upload/v1727665998/anxious-people-under-stress_01_8_ts6dma.png',
      language: 'Italian',
      duration: '4 hours',
      description: 'Understand user experience design principles and apply them to real-world projects.'
    },
    {
      image: 'https://res.cloudinary.com/dgk9gxgk4/image/upload/v1725862263/Screenshot_2024-09-06_at_4.50.12_PM_j3purh.png',
      title: 'Course Title 6',
      rating: 4.3,
      author: 'Frank Harris',
      authorImage: 'https://res.cloudinary.com/dgk9gxgk4/image/upload/v1727665998/anxious-people-under-stress_01_8_ts6dma.png',
      language: 'Portuguese',
      duration: '7 hours',
      description: 'Learn to create effective digital marketing strategies that boost brand awareness.'
    }
  ];


  const commonImageURL = "https://res.cloudinary.com/dgk9gxgk4/image/upload/v1727665998/anxious-people-under-stress_01_8_ts6dma.png";

  const coachingData = [
    {
      coachName: "John Doe",
      coachImage: commonImageURL,
      languages: ["English", "Spanish"],
      sessionCount: 30,
      skills: ["Skill A", "Skill B", "Skill C", "Skill D", "and 10 more..."],
      description: "Experience tailored coaching sessions that empower you with practical leadership strategies and communication techniques.",
      courses: [
        { image: commonImageURL, title: "Public Speaking Mastery" },
        { image: commonImageURL, title: "Motivation Essentials" },
        { image: commonImageURL, title: "Mindfulness Techniques" }
      ],
      rating:4.5
      
    },
    {
      coachName: "Jane Smith",
      coachImage: commonImageURL,
      languages: ["English", "French"],
      sessionCount: 24,
      skills:["Skill A", "Skill B", "Skill C", "Skill D", "and 10 more..."],
      description: "Experience tailored coaching sessions that empower you with practical leadership strategies and communication techniques.",
      courses: [
        { image: commonImageURL, title: "Public Speaking Mastery" },
        { image: commonImageURL, title: "Motivation Essentials" },
        { image: commonImageURL, title: "Mindfulness Techniques" }
      ],
      
      rating:4.5
     
    },
    {
      coachName: "Alex Johnson",
      coachImage: commonImageURL,
      languages: ["German", "English"],
      sessionCount: 20,
      skills: ["Skill A", "Skill B", "Skill C", "Skill D", "and 10 more..."],
      description: "Enhance your productivity and build strong, lasting habits with personalized coaching methods.",
      courses: [
        { image: commonImageURL, title: "Public Speaking Mastery" },
        { image: commonImageURL, title: "Motivation Essentials" },
        { image: commonImageURL, title: "Mindfulness Techniques" }
      ],
    
    },
    {
      coachName: "Emily Davis",
      coachImage: commonImageURL,
      languages: ["Italian", "English"],
      sessionCount: 15,
      skills:["Skill A", "Skill B", "Skill C", "Skill D", "and 10 more..."],
      description: "Enhance your productivity and build strong, lasting habits with personalized coaching methods.",
      courses: [
        { image: commonImageURL, title: "Public Speaking Mastery" },
        { image: commonImageURL, title: "Motivation Essentials" },
        { image: commonImageURL, title: "Mindfulness Techniques" }
      ],
      rating:4.5
    },
    {
      coachName: "Michael Lee",
      coachImage: commonImageURL,
      languages: ["Chinese", "English"],
      sessionCount: 18,
      skills:["Skill A", "Skill B", "Skill C", "Skill D", "and 10 more..."],
      description: "Enhance your productivity and build strong, lasting habits with personalized coaching methods.",
      courses: [
        { image: commonImageURL, title: "Public Speaking Mastery" },
        { image: commonImageURL, title: "Motivation Essentials" },
        { image: commonImageURL, title: "Mindfulness Techniques" }
      ],
      rating:4.5
    
    },
    {
      coachName: "Sophia Martinez",
      coachImage: commonImageURL,
      languages: ["Chinese", "English"],
      sessionCount: 22,
      skills: ["Skill A", "Skill B", "Skill C", "Skill D", "and 10 more..."],
      description: "Enhance your productivity and build strong, lasting habits with personalized coaching methods.",
      courses: [
        { image: commonImageURL, title: "Public Speaking Mastery" },
        { image: commonImageURL, title: "Motivation Essentials" },
        { image: commonImageURL, title: "Mindfulness Techniques" }
      ],
      rating:4.5
     
    }
  ];
  type Topic = {
    name: string;
    checked?: boolean;
  };
  const updatedTopics:Topic[] = [
    { name: 'Branding and Identity', checked: true },
    { name: 'Graphic and Visual Design', checked: false },
    { name: 'Motion Design and Animation', checked: true },
    { name: 'Sound Design and Editing', checked: false },
    { name: 'Digital Content and Social Media Strategy', checked: true },
    { name: 'Web Design and Development', checked: false },
    { name: 'UI/UX Design', checked: true },
    { name: 'Visual Storytelling', checked: false },
    { name: 'Advertising Campaigns', checked: true },
    { name: 'Key Visual Creation', checked: false },
    { name: 'Holistic Concept Development', checked: true },
    { name: 'Photography and Editing', checked: false },
  
   
  ];
  
 
  
  
 export {coursesData,coachingData,updatedTopics};