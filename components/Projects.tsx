import React from 'react'
import Link from 'next/link'
export default function Projects() {
    return (

        <div className="aboslute h-full  top-0 bg- w-100 bg-contain bg-repeat banner h-100 z-0 " >
            <div className="py-24 md:px-12">
                <h2 className="text-center text-2xl font-extrabold"><span className="border-b-4 border-primary">Pro</span>jects</h2>
                <div className="flex flex-wrap justify-between py-16">
                    <div className="border border-black rounded-lg h-56 mb-4 md:h-96 md:w-30p w-full"></div>
                    <div className="border border-black rounded-lg h-56 mb-4 md:h-96 md:w-30p w-full"></div>
                    <div className="border border-black rounded-lg h-56 mb-4 md:h-96 md:w-30p w-full"></div>
                </div>
                <div className="flex justify-center">
                    <Link href="/projects">
                        <a>
                            <button className="flex items-center justify-center rounded-md bg-primary text-white px-8 py-3">
                                <span className="mr-4 font-bold">See more projects</span>
                                <svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.7071 8.70711C30.0976 8.31658 30.0976 7.68342 29.7071 7.29289L23.3431 0.928932C22.9526 0.538408 22.3195 0.538408 21.9289 0.928932C21.5384 1.31946 21.5384 1.95262 21.9289 2.34315L27.5858 8L21.9289 13.6569C21.5384 14.0474 21.5384 14.6805 21.9289 15.0711C22.3195 15.4616 22.9526 15.4616 23.3431 15.0711L29.7071 8.70711ZM-4.76371e-10 9L29 9L29 7L4.76371e-10 7L-4.76371e-10 9Z" fill="white" />
                                </svg>
                            </button>
                        </a>
                    </Link>

                </div>
            </div>
        </div>

    )
}
