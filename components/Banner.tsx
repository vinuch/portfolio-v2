import React, { useEffect } from 'react'
import { gsap } from "gsap";

export default function Banner() {
    useEffect(() => {

        // gsap.set(containerRef.current, { autoAlpha: 0, duration: 2 });
        gsap
            .timeline()
            .fromTo('.banner-photo', { width: 0}, {width: "100%"})
    })
    return (
        <div className="min-h-screen">
            <div className="absolute top-0 left-0 right-0 bg- w-screen h-screen bg-contain banner z-0 md:pt-16 pt-72 px-8" >
                <div className="z-30 flex  flex-wrap-reverse items-center justify-around md:h-full ">
                    <div className="md:w-5/12 md:h-75p h-1/6">
                        <div className="w-full h-full rounded-md banner-photo bg-gray1 overflow-hidden my-8">
                            <img src="/pic1.jpg" alt=""  className="w-full h-full object-cover object-center" />
                        </div>
                    </div>
                    <div className="md:w-5/12 -mt-44">
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide">Edeh Vincent</h2>

                        <h2 className="text-primary text-3xl md:text-5xl my-4 md:my-8 font-extrabold"> Software Engineer;</h2>
                        <p className="text-base md:text-lg tracking-wide leading-relaxed text-gray1">I&apos;m a Software Engineer currently based in Nigeria with 4+ years of professional experience in ideating, designing, building and delivering end to end solutions for digital products.building and delivering end to end solutions for digital products.</p>
                    </div>

                </div>
            </div>


        </div>
    )
}
