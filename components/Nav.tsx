import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from "../styles/Home.module.css";

import { MoonIcon, SunIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
export default function Nav() {
    const { systemTheme, theme, setTheme } = useTheme()
    const [showMenu, setshowMenu] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])


    const renderThemeChanger = () => {
        if (!mounted) return !null

        const currentTheme = theme === 'system' ? systemTheme : theme

        if (currentTheme === 'dark') {
            return (
                <SunIcon className="w-7 h-7" role="button" onClick={() => setTheme('light')} />
            )
        }
        else {
            return (
                <MoonIcon className="w-7 h-7" role="button" onClick={() => setTheme('dark')} />
            )
        }
    }

    return (
        <div className="py-4 px-8 bg-white dark:bg-primary2 nav flex justify-between items-center sticky top-0 left-0 right-0 z-50">
            <Link passHref href="/"><div className="w-20 h-20 md:w-24 relative"> <Image layout="fill" src="/logo.svg" alt="" className="cursor-pointer" /></div></Link>

            <ul className="hidden md:flex justify-around w-4/12 text-lg">

                <li className="cursor-pointer"> <Link href="/about">
                    <a>about</a>
                </Link></li>
                <li className="cursor-pointer"> <Link href="/projects">
                    <a>projects</a>
                </Link></li>
                <li className="cursor-pointer"> <a target="_blank" rel="noreferrer" href="https://dev-vince.hashnode.dev" className="flex items-center gap-x-2"><span>blog</span> <ArrowTopRightOnSquareIcon className="w-4 h-4" /></a>

                </li>
                <li>

                    {renderThemeChanger()}
                </li>
                {/* <li className="cursor-pointer">contact</li> */}
            </ul>
            <button className="md:hidden" onClick={() => setshowMenu(!showMenu)}>
                {
                    !showMenu ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    )
                }

            </button>

            {
                showMenu && (
                    <div className="bg-primary md:hidden dark:bg-primary2 fixed top-24 left-0 w-screen h-screen z-40 flex jutify-center items-center">
                        <ul className="w-full text-center text-white text-5xl">
                            <li className="cursor-pointer my-16" onClick={() => { setshowMenu(false) }}> <Link href="/about">
                                <a>about</a>
                            </Link></li>
                            <li className="cursor-pointer my-16" onClick={() => { setshowMenu(false) }}> <Link href="/projects">
                                <a>projects</a>
                            </Link></li>
                            <li className="cursor-pointer my-16 flex justify-center" onClick={() => { setshowMenu(false) }}> <a target="_blank" rel="noreferrer" href="https://dev-vince.hashnode.dev" className="flex items-center gap-x-2"><span>blog</span> <ArrowTopRightOnSquareIcon className="w-4 h-4" /></a>


                            </li>
                            <li className="flex justify-center">

                                {renderThemeChanger()}
                            </li>
                            {/* <li className="cursor-pointer my-16" onClick={() => { setshowMenu(false) }}>contact</li> */}
                        </ul>
                    </div>
                )
            }
        </div>
    )
}
