import type { Meta, StoryObj } from '@storybook/react';
import Button from '@repo/ui/button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'text'],
      description: 'The visual style of the button',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    onClick: {
      action: 'clicked',
      description: 'Optional click handler',
    },
    children: {
      control: 'text',
      description: 'The content to display inside the button',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Base story
export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
  },
};

// Variant stories
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Text: Story = {
  args: {
    children: 'Text Button',
    variant: 'text',
  },
};

// Size stories
export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium Button',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'large',
  },
};

// State stories
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

// Combined variants
export const SmallSecondary: Story = {
  args: {
    children: 'Small Secondary',
    variant: 'secondary',
    size: 'small',
  },
};

export const LargeText: Story = {
  args: {
    children: 'Large Text',
    variant: 'text',
    size: 'large',
  },
};

// With custom className
export const WithCustomClass: Story = {
  args: {
    children: 'Custom Class',
    className: 'shadow-lg',
  },
};

// With click handler
export const WithClickHandler: Story = {
  args: {
    children: 'Click Me',
    onClick: () => alert('Button clicked!'),
  },
};