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
        /*TODO: fix the header when adding section header selecter*/
        /*header className="sticky top-0 py-2 z-20 h-16 bg-background/100 ">*/
        <header className="sticky top-0 py-2 z-20 h-16 bg-background/100 backdrop-blur-md border-b border-secondary-200">
            <div className="grid grid-cols-4 md:grid-cols-12 items-center gap-4">
                <h1 className="text-2xl font-bold col-span-3 md:col-span-3">
                    <Link href="/" className="text-primary hover:text-blue-400 whitespace-nowrap text-left">
                        Siddhant Antil
                    </Link>
                </h1>

                <div className="col-span-1 col-start-4 md:col-span-6">
                    <SearchComponent />
                </div>

                <div className="hidden md:flex md:col-span-3 justify-end md:justify-end pr-4">
                    <select 
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                        className="bg-background text-primary border border-primary rounded px-2 py-1 text-sm focus:outline-none focus:border-blue-400"
                    >
                        <option value="system" >System</option>
                        <option value="light" >Light</option>
                        <option value="dark" >Dark</option>
                    </select>
                </div>  
            </div>
        </header>
        
    )
}

export default Header;