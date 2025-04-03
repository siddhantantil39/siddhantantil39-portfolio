'use client';

import Link from "next/link";
import { ArrowRightCircle, ArrowLeftCircle } from '@geist-ui/icons';
import { usePathname } from 'next/navigation';
import { routeMap } from '../lib/RouteConfig';

const Footer = () => {
    const pathname = usePathname();
    const currentRoute = routeMap[pathname];

    if (!currentRoute) return null;

    return(
        <footer className="w-full bg-black text-white p-4 border-t border-gray-700 fixed bottom-0">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                {currentRoute.prev && (
                    <Link href={currentRoute.prev.path} 
                        className="flex items-center gap-2 border border-gray-600 rounded-lg p-4 hover:bg-gray-800 transition">
                        <ArrowLeftCircle />
                        <span>Previous</span>
                        <span>{currentRoute.prev.label}</span>
                    </Link>
                )}
                
                {currentRoute.next && (
                    <Link href={currentRoute.next.path} 
                        className="flex items-center gap-2 border border-gray-600 rounded-lg p-4 hover:bg-gray-800 transition ml-auto">
                        <span>Next</span>
                        <span>{currentRoute.next.label}</span>
                        <ArrowRightCircle />
                    </Link>
                )}
            </div>
        </footer>
    );
};

export default Footer;