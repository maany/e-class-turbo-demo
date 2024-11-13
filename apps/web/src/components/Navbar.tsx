"use client"
import React from 'react'
import { useTheme } from '../../Contextprovider/Themecontext';
const themes = ["orange", "blue", "dark-orange-shade"];
function Navbar() {

    const { theme, setTheme } = useTheme();
    return (
        <nav className="fixed h-10 top-0 left-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        {/* Logo and Menu */}
                    </div>

                    {/*  <div className="flex items-center space-x-4"> */}

                    {/* <div className="relative group">
                <button className="flex items-center space-x-2 text-primary hover:text-primary/80 transition">
                  <Globe className="w-5 h-5" />
                  <span className="uppercase">{locale}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-surface rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <select
                    onChange={(e) => handleLocaleChange(e.target.value)}
                    className="w-full py-2 px-4 bg-transparent text-primary cursor-pointer"
                    value={locale}
                  >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                  </select>
                </div>
              </div>  */}

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

        </nav>
    )
}

export default Navbar