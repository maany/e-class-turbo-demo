"use client";
import React from 'react';
import { z } from 'zod';
import TextInput from './TextInput';
import Button from '@repo/ui/button';

const loginSchema = z.object({
  email: z.string()
    .min(1, "Email is required")
    .email("Invalid email address"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginCard: React.FC = () => {
  const [formData, setFormData] = React.useState<LoginFormData>({
    email: '',
    password: ''
  });

  const [errors, setErrors] = React.useState<Partial<Record<keyof LoginFormData, string>>>({});

  const validateField = (field: keyof LoginFormData) => {
    try {
      const fieldSchema = loginSchema.shape[field];
      fieldSchema.parse(formData[field]);
      setErrors(prev => ({ ...prev, [field]: undefined }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(prev => ({
          ...prev,
          [field]: error.errors[0]?.message
        }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const validatedData = loginSchema.parse(formData);
      // Handle successful validation
      console.log('Form data is valid:', validatedData);
      // Add your login logic here
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof LoginFormData, string>> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof LoginFormData] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <main className="flex sm:w-[435px] w-full overflow-hidden flex-col justify-center p-4 sm:p-8 rounded-2xl border border-solid bg-stone-900 border-stone-800">
      <div className="flex flex-col w-full">
        <header className="flex flex-col justify-center align-center w-full text-center text-stone-50">
          <h1 className="text-3xl font-bold leading-tight">Welcome</h1>
          <p className="mt-2 text-base">Login to access all your classes</p>
        </header>
        <form onSubmit={handleSubmit} className="flex flex-col mt-6 w-full">
          <TextInput
            label="Email"
            placeholder="Email address"
            type="email"
            value={formData.email}
            onChange={(value: any) => setFormData(prev => ({ ...prev, email: value }))}
            onBlur={() => validateField('email')}
            error={errors.email}
          />
          <TextInput
            label="Password"
            placeholder="Password"
            type="password"
            showPasswordToggle
            value={formData.password}
            onChange={(value: any) => setFormData(prev => ({ ...prev, password: value }))}
            onBlur={() => validateField('password')}
            error={errors.password}
          />
          <Button variant="text" className="self-start mt-2">
            Forgot password?
          </Button>
          <div className="flex flex-col mt-6 w-full leading-none">
            <Button variant="primary" className="w-full" size={"medium"}>
              Continue
            </Button>
            <div className="flex gap-2 items-center mt-2 w-full">
              <p className="self-stretch my-auto text-base text-stone-300">
                Don't have an account?
              </p>
              <Button variant="text">Sign up</Button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default LoginCard;