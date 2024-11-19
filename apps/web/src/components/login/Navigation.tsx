"use client";
import React, { ChangeEvent, useState } from "react";
import Image from 'next/image';
import { Menu, X } from "lucide-react";
import Button from "@repo/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from '@/context/Themecontext';

const themes = ["orange", "blue", "dark-orange-shade"];
export const Navigation = ({ locale }: { locale: string }): JSX.Element => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const { theme, setTheme } = useTheme();
    const navigationItems = ["Offers", "Coaching", "How it works", "About"];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const handleLocaleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value as string;
        const path = pathname.split("/").slice(2).join("/");
        router.push(`/${newLocale}/${path}`);
    };
    return (
        <header className="fixed w-full z-20 px-4 md:px-6 py-4 bg-transparent backdrop-blur-sm ">
            <nav className="container mx-auto flex items-center justify-between">
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
                {/* Theme Selector */}
                <div className="sm:flex hidden space-x-2 ml-4">
                    {themes.map((them) => (
                        <button
                            key={them}
                            onClick={() => setTheme(them)}
                            className={`w-8 h-8 rounded-full transition-transform hover:scale-110 ${theme === them ? 'ring-2 ring-primary ring-offset-2' : ''
                                } ${them === 'orange' ? 'bg-orange-500' :
                                    them === 'blue' ? 'bg-blue-500' :
                                        'bg-orange-700'
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
                            <select
                                onChange={(e) => handleLocaleChange(e)}
                                className="w-full py-2 px-4 bg-transparent text-primary cursor-pointer"
                                value={locale}
                            >
                                <option value="en">English</option>
                                <option value="es">Spanish</option>
                                <option value="fr">French</option>
                            </select>

                            {/* <ChevronDown className="w-5 h-5 text-white" /> */}
                        </button>
                        <div className="flex space-x-2 ml-4">
                            {themes.map((them) => (
                                <button
                                    key={them}
                                    onClick={() => setTheme(them)}
                                    className={`w-8 h-8 rounded-full transition-transform hover:scale-110 ${theme === them ? 'ring-2 ring-primary ring-offset-2' : ''
                                        } ${them === 'orange' ? 'bg-orange-500' :
                                            them === 'blue' ? 'bg-blue-500' :
                                                'bg-orange-700'
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
