'use client'

import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

import { usePathname } from 'next/navigation'
import clsx from 'clsx'


const AppBottombar = () => {
    const pathname = usePathname()



    const navItems = [
        { href: '/home', icon: HomeIcon, alt: 'Home', defaultTab: '/home' },
        { href: '/bible', icon: BibleIcon, alt: 'Bible', defaultTab: '/bible' },        
        { href: '/plan', icon: PlanIcon, alt: 'Plan', defaultTab: '/plan' },
        { href: '/menu', icon: MenuIcon, alt: 'Menu', defaultTab: '/menu' }


    ]

    const isActive = (href: string) => {
        const active = pathname && (pathname === href || pathname.startsWith(`${href}/`))
        return active

    }


    return (
        <div className='flex justify-between p-2'>
            {navItems.map((item) => (
                <Link key={item.href} href={item.defaultTab} passHref>
                    <Button
                        variant={isActive(item.href) ? 'default' : 'ghost'}
                        className='flex flex-col items-center justify-center w-full'
                    >
                        <item.icon
                            className={clsx('w-6 h-6 transition-colors', {
                                'text-black dark:text-white': !isActive(item.href),
                                'text-white dark:text-black': isActive(item.href)
                            })}
                        />
                    </Button>
                </Link>
            ))}
        </div>
    )
}

const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        stroke-linecap="round"
        strokeLinejoin="round"
        className="lucide lucide-home">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
)

const BibleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        stroke-linecap="round"
        strokeLinejoin="round"
        className="lucide lucide-book-text"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /><path d="M8 7h6" /><path d="M8 11h8" /></svg>
)

const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    stroke-linecap="round" 
    strokeLinejoin="round" 
    className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
)

const PlanIcon = (props: React.SVGProps<SVGSVGElement>) => (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" className="lucide lucide-notebook-pen"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/></svg>
)



export default AppBottombar