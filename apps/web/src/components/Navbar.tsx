"use client"
import React, { ChangeEvent } from 'react'


const themes = ["orange", "blue", "dark-orange-shade"];
import { usePathname, useRouter } from "next/navigation";
import { Globe } from 'lucide-react';
import { useTheme } from '@/Contextprovider/Themecontext';
function Navbar({ locale }: { locale: string }) {

    const { theme, setTheme } = useTheme();
    const pathname = usePathname();
    const router = useRouter();
    const handleLocaleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value as string;
        const path = pathname.split("/").slice(2).join("/");
        router.push(`/${newLocale}/${path}`);
    };
    return (

        <nav className="fixed top-0 left-0 right-0 bg-surface/80 backdrop-blur-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        {/* Logo and Menu */}
                    </div>

                    <div className="flex items-center space-x-4">
                        {/* Language Selector */}
                        <div className="relative group">
                            <button className="flex items-center space-x-2 text-primary hover:text-primary/80 transition">
                                <Globe className="w-5 h-5" />
                                <span className="uppercase">{locale}</span>
                            </button>
                            <div className="absolute right-0 mt-2 w-48 bg-surface rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                <select
                                    onChange={(e) => handleLocaleChange(e)}
                                    className="w-full py-2 px-4 bg-transparent text-primary cursor-pointer"
                                    value={locale}
                                >
                                    <option value="en">English</option>
                                    <option value="es">Spanish</option>
                                    <option value="fr">French</option>
                                </select>
                            </div>
                        </div>

                        {/* Theme Selector */}
                        <div className="flex space-x-2">
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
            </div>
        </nav>


    )
}

export default Navbar