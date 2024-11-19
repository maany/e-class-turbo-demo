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

    <footer className="bg-stone-950 w-full p-4 sm:px-16 sm:py-11">
      <div className="grid grid-cols-4 grid-rows-2 ">

        <div className="sm:row-span-2 row-span-1 row-start-1 col-span-1 content-center ">
          <Image
            height={16}
            width={16}
            alt="Logo just do ad"
            src="/courses/justdoad.png"
            className="object-contain w-16 h-16"
          />
        </div>

        <div className="sm:row-start-1  row-start-2 sm:col-span-2 col-span-3 content-center md:content-end col-start-1 sm:col-start-2 flex flex-wrap items-center gap-4">
          {[
            
            "Privacy Policy",
            "Terms of Use",
            "Rules",
            "Course Information"
          ].map((link) => (
            <Link
              key={link}
              href={"/link"}
              className="text-primary text-center transition-colors text-sm md:text-base "
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Company Info */}
        <p className=" text-white tracking-wider sm:row-start-2  row-start-1 sm:col-span-2 col-span-3 content-center col-start-2 sm:col-start-2 ">
          © 2024 JUST DO AD GmbH • Hermetschloostrasse 70, 8048 Zürich
          <a href="mailto:hi@justdoad.ai" className="hover:text-amber-500 ml-1">
            hi@justdoad.ai
          </a>
        </p>

        {/* Language Selector */}
        <div className=" row-start-2 col-start-4 justify-items-center">
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
