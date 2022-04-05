import React from 'react'
import Link from 'next/link'
export default function Nav() {
    return (
        <div className="py-4 px-8 bg-white nav flex justify-between items-center sticky top-0 left-0 right-0 z-50">
            <img src="/logo.svg" alt="" className="w-24" />

            <ul className="flex justify-around w-4/12 text-lg">

                <li className="cursor-pointer">about</li>
                <li className="cursor-pointer"> <Link href="/projects">
                    <a>projects</a>
                </Link></li>

                <li className="cursor-pointer">blog</li>
                <li className="cursor-pointer">contact</li>
            </ul>
        </div>
    )
}
