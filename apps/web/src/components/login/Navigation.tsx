"use client";

import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Button from "@repo/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "@/context/Themecontext";

// Mapping the navigation items to their respective routes
const navigationItems = [
  { label: "Offers", route: "/offers" },
  { label: "Coaching", route: "/coaching" },
  { label: "How it works", route: "/how-it-works" },
  { label: "About", route: "/about" }
];

const themes = ["orange", "blue", "dark-orange-shade"];

export const Navigation = ({ locale }: { locale: string }): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLocaleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };

  // Handling navigation when a menu item is clicked
  const handleNavigation = (route: string) => {
    router.push(route);
    setIsMenuOpen(false); 
  };

  return (
    <header className="fixed w-full z-20 px-4 md:px-6 py-4 bg-transparent backdrop-blur-sm max-w-screen-2xl">
      <nav className=" w-full flex items-center justify-between">
        {/* Logo */}
        <div className="w-12 h-12 md:w-16 md:h-16">
          <Image
            src={"/courses/justdoad.png"}
            alt="Logo just do ad"
            width={44}
            height={62}
            className="object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          {navigationItems.map((item) => (
            <button
              key={item.label}
              className="p-4 text-white hover:text-amber-500 transition-colors"
              onClick={() => handleNavigation(item.route)}
            >
              {item.label}
            </button>
          ))}
          <Button
            variant="primary"
            className="h-10 px-6 py-2 rounded-lg"
            onClick={() => handleNavigation("/login")}
          >
            Login
          </Button>
          <select
            onChange={handleLocaleChange}
            className="bg-stone-800 text-white border-0 px-4 py-2 rounded-lg hover:bg-stone-700 transition-colors"
            value={locale}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-amber-500 p-2 text-4xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-8 h-8 text-amber-500" />
          ) : (
            <Menu className="w-8 h-8 text-amber-500" />
          )}
        </button>

        {/* Theme Selector (Desktop) */}
        <div className="hidden md:flex ml-[5px]">
          {themes.map((them) => (
            <button
              key={them}
              onClick={() => setTheme(them)}
              className={`w-8 h-8 rounded-full transition-transform hover:scale-110 ${
                theme === them ? "ring-2 ring-primary ring-offset-2" : ""
              } ${
                them === "orange"
                  ? "bg-orange-500"
                  : them === "blue"
                  ? "bg-blue-500"
                  : "bg-orange-700"
              }`}
            />
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black backdrop-blur-sm py-4 z-50">
          <div className="container mx-auto px-4 flex flex-col items-center gap-4">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                className="w-full text-center p-2 text-white hover:text-amber-500 transition-colors"
                onClick={() => handleNavigation(item.route)}
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="primary"
              className="w-2/3 justify-center py-2 rounded-lg"
              onClick={() => handleNavigation("/login")}
            >
              Login
            </Button>
            <select
              onChange={handleLocaleChange}
              className="w-[50%] py-2 px-2 bg-transparent text-primary cursor-pointer"
              value={locale}
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
            <div className="flex space-x-2">
              {themes.map((them) => (
                <button
                  key={them}
                  onClick={() => setTheme(them)}
                  className={`w-8 h-8 rounded-full transition-transform hover:scale-110 ${
                    theme === them ? "ring-2 ring-primary ring-offset-2" : ""
                  } ${
                    them === "orange"
                      ? "bg-orange-500"
                      : them === "blue"
                      ? "bg-blue-500"
                      : "bg-orange-700"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
