import { NextResponse } from 'next/server';
export interface coursecard {
    id: string;
    title: string;
    description: string;
    imageSrc: string;
    badgeText?:string;
    buttonText: string;
    type:string;
  }
  
  export async function GET() {
    
  
    const pricingCards: coursecard[] = [
      
      {
        id: '1',
        title: 'Visualisierung',
        description: 'Du hast ein Konzept und konkrete Vorstellungen davon, was du umsetzen möchtest. Entwickle mit uns dein Branding, dein CI/CD, deine Website oder dein Werbefilm für Social Media. Wähle nur die Massnahmen, die du wirklich brauchst.',
        imageSrc: '/customcards/1.png',
        buttonText: 'from CHF 3140',
        badgeText: 'Package',
        type: 'standard'
      },
      {
        id: '2',
        title: 'Campaining',
        description: 'Du hast ein Konzept und konkrete Vorstellungen davon, was du umsetzen möchtest. Entwickle mit uns dein Branding, dein CI/CD, deine Website oder dein Werbefilm für Social Media. Wähle nur die Massnahmen, die du wirklich brauchst.',
        imageSrc: '/customcards/2.png',
        buttonText: 'from CHF 740',
        badgeText: 'Package',
        type: 'campaign'
      },
      {
        id: '3',
        title: 'Coaching on Demand',
        description: 'Our professionals provide support where they are needed. With workshops, tips and "learning by doing" we can reach our goals together more quickly.',
        imageSrc: '/customcards/3.png',
        buttonText: 'Find a coach (ab CHF 90)',
        type: 'coaching'
      },
      {
        id: '4',
        title: 'Enterprise',
        description: 'Ideal für Firmen oder Stellen, die einen freien und individuellen Zugang zu unserer Plattform brauchen und diese für einen längere Zeit nutzten wollen.',
        imageSrc: '/customcards/3.png',
        buttonText: 'Inquiries',
        type: 'enterprise'
      },
      {
        id: '5',
        title: 'Suggest a course',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
        imageSrc: '/customcards/4.png',
        buttonText: 'Get in touch',
        type: 'suggest'
      },
      
    ];
  
    return NextResponse.json(pricingCards);
  }