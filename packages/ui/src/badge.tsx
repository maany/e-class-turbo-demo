import React from 'react';

import { cva, VariantProps } from 'class-variance-authority';
import { FC } from 'react';
import { cn } from './lib/utils';


const badgeStyles = cva(
  'inline-flex items-center justify-center font-bold transition-colors focus:outline-none px-4',
  {
    variants: {
      variant: {
        secondary: 'bg-badge-secondary text-black',
        errorprimary: 'bg-badge-errorprimary text-black',
        warningprimary: 'text-primary border-primary bg-badge-warningprimary',
        successprimary: 'text-primary bg-badge-warningprimary',
      },
      size: {
        small: 'py-1 text-[10px] rounded-[6px]',
        big: 'py-2 text-sm rounded-[8px]',
      },
    },
    defaultVariants: {
      variant: 'secondary',
      size: 'big',
    },
  }
);

interface BadgeProps extends VariantProps<typeof badgeStyles> {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Badge: FC<BadgeProps> = ({ variant, size, children, onClick, className }) => {
  return (
    <span className={cn(badgeStyles({ variant, size }), className)} onClick={onClick}>
      {children}
    </span>
  );
};

export default Badge;