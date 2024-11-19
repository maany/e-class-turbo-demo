"use client"
import React, { ChangeEvent } from "react";
import Image from 'next/image';
import { ChevronDown } from "./ChevronDown";
import Button from "@repo/ui/button";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export const Footer = ({ locale }: { locale: string }): JSX.Element => {
  const footerLinks = [
    "Impressum",
    "Datenschutzerklärung",
    "Nutzungsbedingungen"
  ];
  const pathname = usePathname();
  const router = useRouter();
  const handleLocaleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };
  return (
    // <footer className="bg-stone-950 px-4 md:px-6 py-8 w-full">
    //   <div className="container mx-auto">
    //     <div className="flex flex-col w-full md:flex-row  items-center md:items-start gap-8 md:gap-0 justify-between">
    //       {/* Left side: Logo */}
    //       <div className="flex items-center justify-between w-1/4 md:w-auto">
    //         <Image
    //           alt="Logo just do ad"
    //           width={44}
    //           height={62}
    //           src="/courses/justdoad.png"
    //           className="object-contain"
    //         />
    //         {/* Company Info (right-aligned for small screens) */}
    //         <p className="text-right md:hidden text-xs text-gray-400">
    //           © 2024 JUST DO AD GmbH • Hermetschloostrasse 70, 8048 Zürich •
    //           <a href="mailto:hi@justdoad.ai" className="hover:text-amber-500 ml-1">
    //             hi@justdoad.ai
    //           </a>
    //         </p>
    //       </div>

    //       {/* Right side: Links and Language Selector */}
    //       <div className="flex flex-col items-center md:items-end w-3/4 gap-4">
    //         {/* Footer Links */}
    //         <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-4">
    //           {[
    //             "Impressum (NO ACCEPTANCE NEED)",
    //             "Privacy Policy",
    //             "Terms of Use",
    //             "Rules",
    //             "Course Information"
    //           ].map((link) => (
    //             <button
    //               key={link}
    //               className="text-amber-500 hover:text-amber-400 transition-colors text-sm md:text-base"
    //             >
    //               {link}
    //             </button>
    //           ))}
    //         </div>

    //         {/* Company Info (for medium and larger screens) */}
    //         <p className="hidden md:block text-center md:text-right text-xs md:text-sm text-gray-400">
    //           © 2024 JUST DO AD GmbH • Hermetschloostrasse 70, 8048 Zürich •
    //           <a href="mailto:hi@justdoad.ai" className="hover:text-amber-500 ml-1">
    //             hi@justdoad.ai
    //           </a>
    //         </p>


    //       </div>
    //       {/* Language Selector */}
    //       <Button className="flex items-center gap-2 px-4 py-2 bg-stone-800 rounded-lg hover:bg-stone-700 transition-colors">
    //         <select
    //           onChange={(e) => handleLocaleChange(e)}
    //           className=" bg-stone-800  hover:bg-stone-700 text-white border-0"
    //           value={locale}
    //         >
    //           <option value="en">English</option>
    //           <option value="es">Spanish</option>
    //           <option value="fr">French</option>
    //         </select>
    //       </Button>
    //     </div>
    //   </div>
    // </footer>

    <footer className="bg-stone-950 w-full mt-auto">
      <div className="grid grid-cols-6 grid-rows-2 ">

        <div className=" row-start-1 sm:row-span-2 row-span-1 col-span-2 justify-items-center py-4">
          <img
            alt="Logo just do ad"
            src="/courses/justdoad.png"
            className="object-contain w-16 h-16"
          />
        </div>

        <div className="row-start-2 sm:gap-4 sm:border-t-0 border-t-[#44403C]  col-start-1 md:py-0 py-6 border-t-2 md:px-0 px-2   sm:col-start-3 md:row-start-1 col-span-4 flex flex-wrap md:justify-start gap-1  justify-items-end content-center sm:content-end">
          {[
            "Impressum (NO ACCEPTANCE NEED)",
            "Privacy Policy",
            "Terms of Use",
            "Rules",
            "Course Information"
          ].map((link) => (
            <Link
              key={link}
              href={"/link"}
              className="text-primary text-center transition-colors text-sm md:text-base"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Company Info */}
        <p className="col-start-3 w-full h-full col-span-4 sm:content-start content-center  md:row-start-2 text-gray-400 text-sm sm:text-base">
          © 2024 JUST DO AD GmbH • Hermetschloostrasse 70, 8048 Zürich
          <a href="mailto:hi@justdoad.ai" className="hover:text-amber-500 ml-1">
            hi@justdoad.ai
          </a>
        </p>

        {/* Language Selector */}
        <div className="md:row-span-2 py-6 md:py-0 sm:border-t-0 border-t-2  col-span-2 sm:col-span-1 border-t-[#44403C] row-span-1 md:row-start-1 row-start-2 col-start-5 md:col-start-6 flex w-full items-center px-4">
          <Button className="flex items-center gap-2 px-4 py-2 bg-stone-800 rounded-lg hover:bg-stone-700 transition-colors">
            <select
              onChange={(e) => handleLocaleChange(e)}
              className=" bg-stone-800  hover:bg-stone-700 text-white border-0"
              value={locale}
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
