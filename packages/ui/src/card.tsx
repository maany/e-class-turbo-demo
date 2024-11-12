

import { forwardRef, ReactNode } from 'react';
import { cn } from './lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}


interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children:ReactNode;
  className?: string;
}
const Card=forwardRef<HTMLDivElement,CardProps>(({children,className,...props},ref)=>{
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border  text-card-foreground shadow-sm p-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
})
Card.displayName="Card"

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 ', className)}
      {...props}
    >
      {children}
    </div>
  );
});
CardHeader.displayName="CardHeader";
const CardBody= forwardRef<HTMLDivElement, CardBodyProps>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex-grow', className)}
      {...props}
    >
      {children}
    </div>
  );
});
;
CardBody.displayName="CardBody";

const CardFooter= forwardRef<HTMLDivElement, CardFooterProps>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    >
      {children}
    </div>
  );
})
CardFooter.displayName="CardFooter";
export {Card,CardHeader,CardBody,CardFooter};
