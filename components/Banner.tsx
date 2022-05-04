import React, { useEffect } from 'react'
import { gsap } from "gsap";
import Link from 'next/link';

export default function Banner() {
    useEffect(() => {

        // gsap.set(containerRef.current, { autoAlpha: 0, duration: 2 });
        gsap
            .timeline()
            .fromTo('.banner-photo', { width: 0 }, { width: "100%" })
    })
    return (
        <div className="min-h-screen">
            <div className=" top-0 left-0 right-0 bg- min-w-screen min-h-screen bg-repeat banner z-0 md:pt-16 pt-28 md:px-8" >
                <div className="z-30 flex  flex-wrap-reverse items-center  lg:justify-around md:h-full ">
                    <div className="lg:w-5/12 w-full h-50vh lg:h-70vh">
                        <div className="w-full h-full rounded-md banner-photo bg-gray1 overflow-hidden my-8">
                            <img src="/pic6.jpg" alt="" className="w-full h-full object-cover object-center" />
                        </div>
                    </div>
                    <div className="lg:w-5/12 ">
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide">Edeh Vincent</h2>

                        <h2 className="text-primary text-4rem md:text-5rem my-4 md:my-8 font-extrabold text-transparent banner-title tracking-wide" > Software Engineer;</h2>
                        <p className="text-base md:text-lg tracking-wide leading-relaxed text-gray1">I&apos;m a Software Engineer currently based in Nigeria with 3+ years of professional experience in designing high quality web experiences, building and delivering end to end solutions for digital products</p>
                        <button className="cursor-pointer bg-primary flex items-center justify-center text-white px-8 py-3 w-full md:w-4/12 rounded-md mt-10 font-bold text-xl bg-opacity-80"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>

                            <a href="/resume.pdf" target="_blank" rel="noreferrer">
                                <span className="mx-4">Resume</span>

                            </a>

                        </button>
                    </div>

                </div>
            </div>


        </div>
    )
}
