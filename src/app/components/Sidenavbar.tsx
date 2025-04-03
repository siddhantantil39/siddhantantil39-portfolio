"use client"

import { useState } from "react";
import { ChevronDownCircle } from '@geist-ui/icons';
import Link from "next/link";

const SideBarData = {
    gettingStarted: true,
    work: true
}

const Sidenavbar = () => {
    const [dropdowns, setDropdowns] = useState<typeof SideBarData>(SideBarData);
    console.log('Initial dropdowns state:', dropdowns);

    const toggleDropdown = (menu : keyof typeof SideBarData) => {
        setDropdowns((prev) => ({
            ...prev,
            [menu]: !prev[menu]
        }))
    };

    return(
        <nav className=" text-white p-6 w-64 min-h-screen">
            <div className="flex flex-col space-y-4">
                <div className="relative">
                    <button onClick={() => toggleDropdown("gettingStarted")} className="flex items-center">
                        Getting Started <ChevronDownCircle className="ml-1 w-4 h-4"/>
                    </button>
                    {dropdowns.gettingStarted && (
                        <ul className="relative left-0 mt-2 w-40 text-gray-300 ">
                            <li>
                                <Link href="/home" className="block px-4 py-2 hover:text-blue-500">
                                Overview
                                </Link>
                            </li>
                            <li>
                                <Link href="/work" className="block px-4 py-2 hover:text-blue-500">
                                Work history
                                </Link>
                            </li>
                            <li>
                                <Link href="/education" className="block px-4 py-2 hover:text-blue-500">
                                Education
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>

                <div className="relative">
                    <button onClick={() => toggleDropdown("work")} className="flex items-center">
                        Work <ChevronDownCircle className="ml-1 w-4 h-4"/>
                    </button>
                    {dropdowns.work && (
                        <ul className="relative left-0 mt-2 w-40 text-gray-300 ">
                            <li>
                                <Link href="/mui" className="block px-4 py-2 hover:text-blue-500">
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