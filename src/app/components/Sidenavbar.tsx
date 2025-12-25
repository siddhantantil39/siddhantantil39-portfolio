"use client"

import { useState } from "react";
import { ChevronDownCircle } from '@geist-ui/icons';
import Link from "next/link";
import { usePathname } from 'next/navigation';

const SideBarData = {
    gettingStarted: true,
    work: true
}

const Sidenavbar = () => {
    const [dropdowns, setDropdowns] = useState<typeof SideBarData>(SideBarData);
    const pathname = usePathname();

    const toggleDropdown = (menu : keyof typeof SideBarData) => {
        setDropdowns((prev) => ({
            ...prev,
            [menu]: !prev[menu]
        }))
    };

    return(
        <nav className="text-primary py-6 w-64">
            <div className="flex flex-col space-y-4">
                <div className="relative">
                    <button 
                        onClick={() => toggleDropdown("gettingStarted")} 
                        className="flex items-center hover:text-blue-400 transition-colors"
                    >
                        Getting Started 
                        <ChevronDownCircle className={`ml-1 w-4 h-4 transition-transform ${dropdowns.gettingStarted ? 'rotate-180' : ''}`}/>
                    </button>
                    {dropdowns.gettingStarted && (
                        <ul className="relative left-0 mt-2 w-40 text-secondary">
                            <li>
                                <Link 
                                    href="/home" 
                                    className={`block px-4 py-2 hover:text-blue-500 transition-colors ${
                                        pathname === '/home' ? 'text-blue-500 font-medium' : ''
                                    }`}
                                >
                                    Overview
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/work" 
                                    className={`block px-4 py-2 hover:text-blue-500 transition-colors ${
                                        pathname === '/work' ? 'text-blue-500 font-medium' : ''
                                    }`}
                                >
                                    Work history
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/education" 
                                    className={`block px-4 py-2 hover:text-blue-500 transition-colors ${
                                        pathname === '/education' ? 'text-blue-500 font-medium' : ''
                                    }`}
                                >
                                    Education
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>

                <div className="relative">
                    <button 
                        onClick={() => toggleDropdown("work")} 
                        className="flex items-center hover:text-blue-400 transition-colors"
                    >
                        Open-source Projects 
                        <ChevronDownCircle className={`ml-1 w-4 h-4 transition-transform ${dropdowns.work ? 'rotate-180' : ''}`}/>
                    </button>
                    {dropdowns.work && (
                        <ul className="relative left-0 mt-2 w-40 text-secondary">
                            <li>
                                <Link 
                                    href="/mui" 
                                    className={`block px-4 py-2 hover:text-blue-500 transition-colors ${
                                        pathname === '/mui' ? 'text-blue-500 font-medium' : ''
                                    }`}
                                >
                                    MUI
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Sidenavbar;