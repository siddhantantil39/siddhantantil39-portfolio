'use client';

import Link from "next/link";
import { ArrowRightCircle, ArrowLeftCircle } from '@geist-ui/icons';
import { usePathname } from 'next/navigation';
import { routeMap } from '../lib/RouteConfig';

const navigationButtons = [
  {
    type: 'prev',
    icon: ArrowLeftCircle,
    label: 'Previous',
    className: 'hover:text-blue-500'
  },
  {
    type: 'next',
    icon: ArrowRightCircle,
    label: 'Next',
    className: 'ml-auto hover:text-blue-500'
  }
] as const;

const Footer = () => {
    const pathname = usePathname();
    const currentRoute = routeMap[pathname];

    if (!currentRoute) return null;

    return(
        <footer className="w-full text-white">
            <div className="flex justify-between items-center max-w-4xl mx-auto border border-red-500">
                {navigationButtons.map(({ type, icon: Icon, label, className }) => {
                    const route = currentRoute[type];
                    if (!route) return null;

                    return (
                        <Link 
                            key={type}
                            href={route.path} 
                            className={`flex items-center gap-2 border border-gray-600 rounded-lg p-4 transition ${className}`}
                        >
                            {type === 'prev' && <Icon />}
                            <div className="flex flex-col">
                                <span className="text-sm text-gray-400">{label}</span>
                                <span className="text-base">{route.label}</span>
                            </div>
                            {type === 'next' && <Icon />}
                        </Link> 
                    );
                })}
            </div>
        </footer>
    );
};

export default Footer;