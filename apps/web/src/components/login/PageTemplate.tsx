import React from "react";
import Image from 'next/image';
import { ChevronDown } from "./ChevronDown";
import LoginCard from "./LoginCard";
import Button from "../buttons/Button";

export const PageTemplate = (): JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content wrapper with background image */}
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
          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Header */}
        <header className="relative z-10 flex items-center justify-between px-6 py-4 bg-transparent">
          <div className="relative w-16 h-16">
            <Image
              alt="Logo just do ad"
              width={44}
              height={62}
              src="/courses/justdoad.png"
              objectFit="contain"
            />
          </div>

          <div className="flex items-center gap-6">
            {["Offers", "Coaching", "How it works", "About"].map((item) => (
              <button
                key={item}
                className="p-4 text-white hover:text-amber-500 transition-colors"
              >
                {item}
              </button>
            ))}

            <Button variant={"primary"} className="h-10 px-6 py-2 rounded-lg transition-colors">
              Login
            </Button>

            <button className="flex items-center gap-2 pl-4 pr-2 py-2 bg-stone-800 rounded-lg hover:bg-stone-700 transition-colors">
              <span className="text-white">ENG</span>
              <ChevronDown className="w-5 h-5 text-white" />
            </button>
          </div>
        </header>

        {/* Main content */}
        <main className="relative z-10 flex w-full justify-center items-center min-h-[calc(100vh-theme(spacing.24))]">
          <div className="container">
            <div className="flex md:flex-row flex-col-reverse items-center gap-8  justify-center w-full px-8 ">

              {/* Left Side: Image */}
              <div className="sm:w-1/2 flex justify-end">
                <Image
                  src="/courses/image.png" // Update the path to your image
                  alt="Marketing illustration"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover md:w-[8] "
                />
              </div>

              {/* Right Side: LoginCard with fixed width */}
              <div className="flex sm:w-1/2 w-full justify-center">
                <LoginCard />
              </div>
            </div>
          </div>
        </main>


      </div>

      {/* Footer */}
      <footer className="bg-stone-950 px-6 py-8">
        <div className="container mx-auto flex items-center justify-between">
          {/* Left side: Logo */}
          <div className="flex items-center gap-6">
            <Image
              alt="Logo just do ad"
              width={44}
              height={62}
              src="/courses/justdoad.png"
            />
          </div>

          {/* Right side: Links and Language Selector */}
          <div className="flex items-center gap-12">
            <div className="flex flex-col items-end gap-1">
              <div className="flex gap-6">
                <button className="text-amber-500 hover:text-amber-400 transition-colors">
                  Impressum (NO ACCEPTANCE NEED)
                </button>
                <button className="text-amber-500 hover:text-amber-400 transition-colors">
                  Privacy Policy
                </button>
                <button className="text-amber-500 hover:text-amber-400 transition-colors">
                  Terms of Use
                </button>
                <button className="text-amber-500 hover:text-amber-400 transition-colors">
                  Rules
                </button>
                <button className="text-amber-500 hover:text-amber-400 transition-colors">
                  Course Information
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-400">
              © 2024 JUST DO AD GmbH  • Hermetschloostrasse 70, 8048 Zürich  • hi@justdoad.ai     
              </p>
            </div>

            {/* Language Selector */}
            <button className="flex items-center gap-2 px-4 py-2 bg-stone-800 rounded-lg hover:bg-stone-700 transition-colors">
              <span className="text-white">ENG</span>
              <ChevronDown className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default PageTemplate;
