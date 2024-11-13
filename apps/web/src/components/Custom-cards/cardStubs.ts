import { ReactNode } from "react";

// Common interface for all cards
export interface BaseCardProps {
  title: string;
  description: string;
  imageSrc: string;
  buttonText: string;
}

// Extended interface for cards with badge
export interface CustomCardProps extends BaseCardProps {
  badgeText: string;
}

// Interface for cards without badge
export interface SimplifiedCardProps extends BaseCardProps {}

// Stub interfaces for each card type
export interface CardStub {
  render: (props: CustomCardProps | SimplifiedCardProps) => ReactNode;
}

// Create stub classes for each card type
class DefaultCardStub implements CardStub {
  render(props: CustomCardProps | SimplifiedCardProps): ReactNode {
    return null;
  }
}

// Singleton instances for each card type
const stubs = {
  visualisierung: new DefaultCardStub(),
  campaigning: new DefaultCardStub(),
  coaching: new DefaultCardStub(),
  enterprise: new DefaultCardStub(),
  course: new DefaultCardStub(),
};

// Getters and setters for stubs
export const getCardStub = (type: keyof typeof stubs) => stubs[type];
export const setCardStub = (type: keyof typeof stubs, newStub: CardStub) => {
  stubs[type] = newStub;
};
