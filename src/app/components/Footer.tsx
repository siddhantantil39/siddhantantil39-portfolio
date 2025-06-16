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
    className: ''
  },
  {
    type: 'next',
    icon: ArrowRightCircle,
    label: 'Next',
    className: 'ml-auto '
  }
] as const;

const Footer = () => {
    const pathname = usePathname();
    const currentRoute = routeMap[pathname];

    if (!currentRoute) return null;

    const hasNextRoute = Boolean(currentRoute.next);
    const hasPrevRoute = Boolean(currentRoute.prev);
    const singleButton = Number(hasNextRoute) + Number(hasPrevRoute) === 1;

    return(
        <footer className="w-full text-primary py-4">
            <div className={`grid ${singleButton ? 'grid-cols-1' : 'grid-cols-2'} gap-4 max-w-full mx-auto`}>
                {navigationButtons.map(({ type, icon: Icon, label, className }) => {
                    const route = currentRoute[type];
                    if (!route) return null;

                    return (
                        <Link 
                            key={type}
                            href={route.path} 
                            className={`flex items-center gap-2 border border-color rounded-lg p-4 transition hover:border-color w-full ${type === 'next' ? 'justify-end' : 'justify-start'} hover:text-blue-500`}
                        >
                            {type === 'prev' && <Icon />}
                            <div className="flex flex-col">
                                <span className={`text-sm text-secondary ${className}`}>{label}</span>
                                <span className={`text-base text-primary `}>{route.label}</span>
                            </div>
                            <div className="">
                                {type === 'next' && <Icon />}
                            </div>
                        </Link> 
                    );
                })}
            </div>
        </footer>
    );
};

export default Footer;