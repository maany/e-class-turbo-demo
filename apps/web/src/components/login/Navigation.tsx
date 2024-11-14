"use client";
import React, { useState } from "react";
import Image from 'next/image';
import { ChevronDown } from "./ChevronDown";
import { Menu, X } from "lucide-react";
import Button from "@repo/ui/button";
import logo from '../../../public/courses/justdoad.png';
export const Navigation = (): JSX.Element => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigationItems = ["Offers", "Coaching", "How it works", "About"];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="relative z-20 px-4 md:px-6 py-4 bg-transparent">
            <nav className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="relative w-12 h-12 md:w-16 md:h-16">
                    <Image
                        src={logo}
                        alt="Logo just do ad"
                        width={44}
                        height={62}
                        className="object-contain"
                    />
                </div>

                {/* Right-Aligned Navigation Menu */}
                <div className="hidden lg:flex items-center gap-6 ml-auto">
                    {navigationItems.map((item) => (
                        <button
                            key={item}
                            className="p-4 text-white hover:text-amber-500 transition-colors"
                        >
                            {item}
                        </button>
                    ))}

                    <Button variant="primary" className="h-10 px-6 py-2 rounded-lg">
                        Login
                    </Button>

                    <button className="flex items-center gap-2 pl-4 pr-2 py-2 bg-stone-800 rounded-lg hover:bg-stone-700 transition-colors">
                        <span className="text-white">ENG</span>
                        <ChevronDown className="w-5 h-5 text-white" />
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-amber-500 p-2 text-4xl"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <X className="w-8 h-8 text-amber-500" />
                    ) : (
                        <Menu className="w-8 h-8 text-amber-500" />
                    )}
                </button>
            </nav>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-stone-900/95 backdrop-blur-sm py-4 z-50">
                    <div className="container mx-auto px-4 flex flex-col items-center gap-4">
                        {navigationItems.map((item) => (
                            <button
                                key={item}
                                className="w-full text-center p-2 text-white hover:text-amber-500 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </button>
                        ))}
                        <Button
                            variant="primary"
                            className="w-2/3 justify-center py-2 rounded-lg"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Login
                        </Button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-stone-800 rounded-lg hover:bg-stone-700 transition-colors">
                            <span className="text-white">ENG</span>
                            
                            <ChevronDown className="w-5 h-5 text-white" />
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navigation;
