import React, { useEffect, useRef, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { gsap } from "gsap";




export default function DefaultLayout({ children }) {
    const [loaded, setLoaded] = useState(false);
    const containerRef = useRef();
    useEffect(() => {
        gsap.to('.contain', { autoAlpha: 1, duration: 1.5 })
        //     // gsap.set(containerRef.current, { autoAlpha: 1 });
        //     // if (!loaded) {
        //         setTimeout(() => {
        //             setLoaded(true)

        //         }, 0);
        //     // }else {
        //     //     setLoaded(true)
        //     // }
        //     const tl = gsap.timeline()
        //     tl.to('.loader', { autoAlpha: 1 })

        //     document.onreadystatechange = function() {
        //         console.log(document.readyState)
        //         if (document.readyState !== "complete") {
        //             console.log('loading')
        //             tl
        //             .to('.loader', { autoAlpha: 1 })
        //             .fromTo('.bracket', { y: 1000 }, { y: 0 })
        //             .fromTo('.bracket', { delay: 2, x: "-20vw", duration: 2, }, { x: 0, repeat: -1, yoyo: true, duration: 2 })
        //         } else {
        //             tl
        //             .to('.loader', { autoAlpha: 1 })
        //             .fromTo('.bracket', { y: 1000 }, { y: 0 })
        //             .fromTo('.bracket', { delay: 2, x: "-20vw", duration: 2, }, { x: 0, repeat: -1, yoyo: true, duration: 2 })
        //             console.log('loaded')
        //             tl.to('.bracket', {yoyo: false, repeat: 0})
        //         }
        //     };

        //     window.onload = () => {
        //         console.log(document.readyState)

        //         // gsap.set(containerRef.current, { autoAlpha: 0, duration: 2 });
        //         // tl
        //         //     .to('.loader', { autoAlpha: 1 })
        //         //     .fromTo('.bracket', { y: 1000 }, { y: 0 })
        //         //     .fromTo('.bracket', { delay: 2, x: "-20vw", duration: 2, }, { x: 0, repeat: -1, yoyo: true, duration: 2 })
        //             // .to('.bracket', {x: 0, duration: 2,})
        //             // .fromTo('.vince', { x: 80, autoAlpha: 0, duration: 2 }, { x: 0, autoAlpha: 1 }, 1)
        //             // .to('.vince', { autoAlpha: 0, })
        //             // .to('.bracket', { x: "-20vw", duration: 1 })

        //             // .to('.bracket', { x: "-50vw", y: "-45vh", duration: 1, scale: 0.2 })
        //             // .to('.loader', { autoAlpha: 0 }, 3.5)
        //             // .to(containerRef.current, { autoAlpha: 1 })
        //             // .fromTo('.img-left', { rotate: 0, x: 405, y: -48 }, { x: 0, y: 0, rotate: -14 }, 4)
        //             // .fromTo('.img-right', { rotate: 0, x: -405, y: -48 }, { x: 0, y: 0, rotate: 14 }, 4)
        //             // .fromTo('.banner-photo', { width: 0 }, { width: "100%" }, 4)

        //         // setloading(false)

        //     }
        //     // gsap.set(containerRef.current, { autoAlpha: 1 });


    }, [])
    return (
        <div className="relative ">


            <div className="invisible contain" ref={containerRef}>
                <div>
                    <Nav />
                </div>

                <div className="z-20">
                    {children}
                </div>
                <Footer />
            </div>



        </div>



    )
}
