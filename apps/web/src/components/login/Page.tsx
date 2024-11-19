import React from "react";
import Image from 'next/image';
import LoginCard from "./LoginCard";
import { Navigation } from "lucide-react";

export const Page = (): JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col px-[-56px]">
      {/* Main content wrapper with background */}
      <div className="flex-1 relative">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/courses/background.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Header */}
        <Navigation />

        {/* Main content */}
        <main className="relative z-10 flex w-full justify-center items-center min-h-[calc(100vh-theme(spacing.24))] py-8">
          <div className="container px-4 md:px-8">
            <div className="flex flex-col-reverse md:flex-row items-center gap-8 justify-center w-full">
              {/* Left Side: Image */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <Image
                  src="/courses/image.png"
                  alt="Marketing illustration"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover w-full max-w-md md:max-w-lg"
                />
              </div>

              {/* Right Side: LoginCard */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-full max-w-md">
                  <LoginCard />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Page;
