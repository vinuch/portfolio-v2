import React from 'react'

export default function TechStack() {
    return (
        <div className="py-24">
            <h2 className="text-center text-2xl font-extrabold"><span className="border-b-4 border-primary">Tec</span>h Stack</h2>

            <ul className="flex flex-wrap justify-around md:justify-center w-full lg:w-7/12 md:mx-auto text-base mt-8">
                <li className="w-24 md:w-48 my-6 mx-2 inline-flex  items-center justify-center mx-3">
                    <img src="/react.png" alt="react logo" className='w-10 h-auto' />
                    <span className="ml-3">React</span>
                </li>
                <li className="w-24 md:w-48 my-6 mx-2 inline-flex items-center justify-center mx-3">
                    <img src="/vue.png" alt="vue logo" className='w-10 h-auto' />

                    <span className="ml-3">Vue</span>
                </li>
                <li className="w-24 md:w-48 my-6 mx-2 inline-flex items-center justify-center mx-3">
                    <img src="/typescript.png" alt="typescript logo" className='w-10 h-auto' />

                    <span className="ml-3">Typescript</span>
                </li>
                <li className="w-24 md:w-48 my-6 mx-2 inline-flex items-center justify-center mx-3">
                    <img src="/node.png" alt="node logo" className='w-20 h-auto' />

                    {/* <span className="ml-3">NodeJS</span> */}
                </li>
                <li className="w-24 md:w-48 my-6 mx-2 inline-flex items-center justify-center mx-3">
                    <img src="/threejs.png" alt="threejs logo" className='w-20 h-auto' />

                    {/* <span className="ml-3">three</span> */}
                </li>
                <li className="w-24 md:w-48 my-6 mx-2 inline-flex items-center justify-center mx-3">
                    <img src="/tailwind.png" alt="tailwind logo" className='w-10 h-auto' />

                    <span className="ml-3">TailwindCSS</span>
                </li>
                <li className="w-24 md:w-48 my-6 mx-2 inline-flex items-center justify-center mx-3">
                    <img src="/next.png" alt="next logo" className='w-10 h-auto' />

                    <span className="ml-3">NextJS</span>
                </li>
            </ul>
        </div>
    )
}
