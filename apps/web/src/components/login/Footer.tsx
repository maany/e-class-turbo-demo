import React from "react";
import Image from 'next/image';
import { ChevronDown } from "./ChevronDown";

export const Footer = (): JSX.Element => {
  const footerLinks = [
    "Impressum",
    "Datenschutzerklärung",
    "Nutzungsbedingungen"
  ];

  return (
    <footer className="bg-stone-950 px-4 md:px-6 py-8 w-full">
      <div className="container mx-auto">
        <div className="flex flex-col w-full md:flex-row  items-center md:items-start gap-8 md:gap-0 justify-between">
          {/* Left side: Logo */}
          <div className="flex items-center justify-between w-1/4 md:w-auto">
            <Image
              alt="Logo just do ad"
              width={44}
              height={62}
              src="/courses/justdoad.png"
              className="object-contain"
            />
            {/* Company Info (right-aligned for small screens) */}
            <p className="text-right md:hidden text-xs text-gray-400">
              © 2024 JUST DO AD GmbH • Hermetschloostrasse 70, 8048 Zürich • 
              <a href="mailto:hi@justdoad.ai" className="hover:text-amber-500 ml-1">
                hi@justdoad.ai
              </a>
            </p>
          </div>

          {/* Right side: Links and Language Selector */}
          <div className="flex flex-col items-center md:items-end w-3/4 gap-4">
            {/* Footer Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-4">
              {[
                "Impressum (NO ACCEPTANCE NEED)",
                "Privacy Policy",
                "Terms of Use",
                "Rules",
                "Course Information"
              ].map((link) => (
                <button
                  key={link}
                  className="text-amber-500 hover:text-amber-400 transition-colors text-sm md:text-base"
                >
                  {link}
                </button>
              ))}
            </div>

            {/* Company Info (for medium and larger screens) */}
            <p className="hidden md:block text-center md:text-right text-xs md:text-sm text-gray-400">
              © 2024 JUST DO AD GmbH • Hermetschloostrasse 70, 8048 Zürich • 
              <a href="mailto:hi@justdoad.ai" className="hover:text-amber-500 ml-1">
                hi@justdoad.ai
              </a>
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
  );
};

export default Footer;
