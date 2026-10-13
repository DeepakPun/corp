'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Header() {
    const pathname = usePathname()

    const getLinkClass = (href: string) => {
        const isActive = pathname === href
        return isActive
            ? "border-b-2 border-white font-bold pb-1"
            : "font-normal"
    }

    return (
        <div className="w-full absolute text-white z-10">
            <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
                <Link className="font-bold text-3xl" href='/'>Home</Link>
                <div className="space-x-4 text-xl">
                    <Link className={getLinkClass('/performance')} href='/performance'>Performance</Link>
                    <Link className={getLinkClass('/reliability')} href='/reliability'>Reliability</Link>
                    <Link className={getLinkClass('/scale')} href='/scale'>Scale</Link>
                </div>
            </nav>
        </div>
    )
}