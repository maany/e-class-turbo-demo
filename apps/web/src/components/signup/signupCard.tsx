"use client";
import React from "react";
import { z } from "zod";
import TextInput from "../login/TextInput";
import Button from "@repo/ui/button";
import { useRouter } from "next/navigation";  

// Define the schema for sign-up form validation
const signUpSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string()
    .min(1, "Email is required")
    .email("Invalid email address"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  coupon: z.string().optional(),
});

type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUpCard: React.FC = () => {
  const router = useRouter(); // Initialize the router
  const [formData, setFormData] = React.useState<SignUpFormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    coupon: "",
  });

  const [errors, setErrors] = React.useState<Partial<Record<keyof SignUpFormData, string>>>({});

  const validateField = (field: keyof SignUpFormData) => {
    try {
      const fieldSchema = signUpSchema.shape[field];
      fieldSchema.parse(formData[field]);
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors((prev) => ({
          ...prev,
          [field]: error.errors[0]?.message,
        }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const validatedData = signUpSchema.parse(formData);
      // Handle successful validation
      console.log("Form data is valid:", validatedData);
      // Add your signup logic here
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof SignUpFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof SignUpFormData] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  // Navigation to login page
  const handleLoginClick = () => {
    router.push("/login");
  };

  return (
    <main className="flex sm:w-[435px] w-full overflow-hidden flex-col justify-center p-4 sm:p-8 rounded-2xl border border-solid bg-stone-900 border-stone-800">
      <div className="flex flex-col w-full">
        <header className="flex flex-col justify-center align-center w-full text-center text-stone-50">
          <h1 className="text-3xl font-bold leading-tight">Create Account</h1>
          <p className="mt-2 text-base">Sign up to access all your classes</p>
        </header>
        <form onSubmit={handleSubmit} className="flex flex-col mt-6 w-full ">
          <div className="flex gap-2 ">
            <TextInput
              label="First Name"
              placeholder="First name"
              type="text"
              value={formData.firstName}
              onChange={(value: any) => setFormData((prev) => ({ ...prev, firstName: value }))}
              onBlur={() => validateField("firstName")}
              error={errors.firstName}
            />
            <TextInput
              label="Last Name"
              placeholder="Last name"
              type="text"
              value={formData.lastName}
              onChange={(value: any) => setFormData((prev) => ({ ...prev, lastName: value }))}
              onBlur={() => validateField("lastName")}
              error={errors.lastName}
            />
          </div>
          <TextInput
            label="Email"
            placeholder="Email address"
            type="email"
            value={formData.email}
            onChange={(value: any) => setFormData((prev) => ({ ...prev, email: value }))}
            onBlur={() => validateField("email")}
            error={errors.email}
          />
          <TextInput
            label="Password"
            placeholder="Password"
            type="password"
            showPasswordToggle
            value={formData.password}
            onChange={(value: any) => setFormData((prev) => ({ ...prev, password: value }))}
            onBlur={() => validateField("password")}
            error={errors.password}
          />
          <TextInput
            label="Coupons"
            placeholder="Coupon code (optional)"
            type="text"
            value={formData.coupon ?? ""}
            onChange={(value: any) => setFormData((prev) => ({ ...prev, coupon: value }))}
            onBlur={() => validateField("coupon")}
            error={errors.coupon}
          />
          <div className="flex flex-col mt-6 w-full leading-none">
            <Button variant="primary" className="w-full">
              Sign Up
            </Button>
            <div className="flex gap-2 items-center mt-2 w-full">
              <p className="self-stretch my-auto text-base text-stone-300">
                Already have an account?
              </p>
              <Button variant="text" onClick={handleLoginClick}>
                Login
              </Button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SignUpCard;
