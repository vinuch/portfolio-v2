import React from 'react'
import Image from 'next/image'

export default function TechStack() {
    return (
        <div className="py-24 px-4">
            <h2 className="text-center text-2xl font-extrabold"><span className="border-b-4 border-primary">Tec</span>h Stack</h2>

            <ul className="flex flex-wrap justify-around md:justify-center w-full lg:w-7/12 md:mx-auto text-base mt-8">
                <li className="w-24 md:w-48 my-6 mx-2 flex-col  items-center justify-center mx-3">
                    <div className="relative w-10 h-10 mx-auto">
                    <Image layout='fill' src="/react.png" alt="react logo" className='w-10 h-auto' />
                    </div>
                    <p className="ml-3 text-center">React</p>
                </li>
                <li className="w-24 md:w-48 my-6 mx-2 flex-col items-center justify-center mx-3">
                    <div className="relative w-10 h-10 mx-auto">
                    <Image layout='fill' src="/vue.png" alt="vue logo" />
                    </div>

                    <p className="ml-3 text-center">Vue</p>
                </li>
                <li className="w-24 md:w-48 my-6 mx-2 flex-col  items-center justify-center mx-3">
                    <div className="relative w-10 h-10 mx-auto">
                    <Image layout='fill' src="/typescript.png" alt="typescript logo" />
                    </div>

                    <p className="ml-3 text-center">Typescript</p>
                </li>
                <li className="w-24 md:w-48 my-6 mx-2 flex-col inline-flex items-center justify-center mx-3">
                    <div className="relative w-20 h-10 mx-auto">
                    <Image layout='fill' src="/node.png" alt="node logo" />
                    </div>

                    <p className="ml-3 text-center">NodeJS</p>
                </li>
                <li className="w-24 md:w-48 my-6 mx-2 inline-flex items-center justify-center mx-3">
                    <div className="relative w-20 h-10">
                    <Image layout='fill' src="/threejs.png" alt="threejs logo" />
                    </div>

                    {/* <p className="ml-3 text-center">three</p> */}
                </li>
                <li className="w-24 md:w-48 my-6 mx-2 flex-col items-center justify-center mx-3">
                    <div className="relative w-10 h-10 mx-auto">
                    <Image layout='fill' src="/tailwind.png" alt="tailwind logo" />
                    </div>

                    <p className="ml-3 text-center">TailwindCSS</p>
                </li>
                <li className="w-24 md:w-48 my-6 mx-2 flex-col items-center justify-center mx-3">
                    <div className="relative w-10 h-10 mx-auto">
                    <Image layout='fill' src="/next.png" alt="next logo" />
                    </div>

                    <p className="ml-3 text-center">NextJS</p>
                </li>
            </ul>
        </div>
    )
}
