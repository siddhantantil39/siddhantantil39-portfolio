"use client"

import Link from "next/link"
import SearchComponent from "./Search";
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";

const Header = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return(
        <header className="sticky top-0 py-2 z-10">
            <div className="grid grid-cols-4 md:grid-cols-12 items-center max-w-screen-2xl mx-auto gap-4">
                <h1 className="text-2xl font-bold col-span-3 md:col-span-3">
                    <Link href="/" className="text-primary hover:text-blue-400 whitespace-nowrap text-left">
                        Siddhant Antil
                    </Link>
                </h1>

                <div className="col-span-1 col-start-4 md:col-span-6">
                    <SearchComponent />
                </div>

                <div className="hidden md:flex md:col-span-3 justify-end pr-4">
                    <select 
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                        className="bg-transparent border border-secondary rounded px-2 py-1 text-sm focus:outline-none focus:border-blue-400 text-primary"
                    >
                        <option value="system" className="bg-white text-black">System</option>
                        <option value="light" className="bg-white text-black">Light</option>
                        <option value="dark" className="bg-gray-900 text-white">Dark</option>
                    </select>
                </div>
            </div>
        </header>
        
    )
}

export default Header;