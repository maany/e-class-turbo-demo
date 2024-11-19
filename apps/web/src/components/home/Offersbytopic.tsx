import React from 'react';
import Button from '@repo/ui/button';



interface Topic {
  name: string;
  minWidth?: string;
}

const topics: Topic[] = [
  { name: 'Branding and Identity' },
  { name: 'Graphic and Visual Design' },
  { name: 'Motion Design and Animation', minWidth: '240px' },
  { name: 'Sound Design and Editing' },
  { name: 'Digital Content and Social Media Strategy', minWidth: '240px' },
  { name: 'Web Design and Development', minWidth: '240px' },
  { name: 'UI/UX Design' },
  { name: 'Visual Storytelling' },
  { name: 'Advertising Campaigns' },
  { name: 'Key Visual Creation' },
  { name: 'Holistic Concept Development', minWidth: '240px' },
  { name: 'Photography and Editing' },
  { name: 'Prompting and AI Tools' },
  { name: 'Idea Generation and Brainstorming', minWidth: '240px' },
  { name: 'Copywriting and Content Creation', minWidth: '240px' },
  { name: 'Strategy and Concept Development', minWidth: '240px' },
  { name: 'Creative and Art Direction' },
  { name: 'Business Planning and Financing', minWidth: '240px' },
  { name: 'Pitching and Presentation Skills', minWidth: '240px' },
  { name: 'Typography, Layout, and Composition', minWidth: '240px' },
  { name: 'Cross-Channel Marketing' },
  { name: 'Campaign Development' },
  { name: 'Infographics and Data Visualization', minWidth: '240px' },
  { name: 'Packaging and Print Design' },
  { name: 'Film and Cinematography' },
];

const OffersByTopic: React.FC = () => {
  return (
    <section className="flex flex-col gap-6 md:px-16">
      <h2 data-layername="offersByTopic" className="self-center text-5xl font-bold leading-none text-stone-50">
        Offers by topic
      </h2>
      <nav data-layername="topicListLinks" className="flex flex-wrap gap-3 justify-center items-center  w-full text-base font-bold leading-none text-amber-500 max-md:max-w-full">
        {topics.map((topic, index) => (
            
          <Button key={index} variant={'secondary'} size={'medium'}> {topic.name} </Button>
        ))}
      </nav>
    </section>
  );
};

export default OffersByTopic;