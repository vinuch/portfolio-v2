import React, { useEffect, useRef, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { gsap } from "gsap";




export default function DefaultLayout({ children }) {
    const [loading, setloading] = useState(false);
    const containerRef = useRef();
    useEffect(() => {
        window.onload = () => {
// setloading(true)
            gsap.set(containerRef.current, { autoAlpha: 0, duration: 2 });
            gsap
                .timeline()
                .to('.loader', { autoAlpha: 1 })
                .fromTo('.bracket', { y: 1000 }, { y: 0 })
                .fromTo('.bracket', { delay: 2, x: -150, duration: 2 }, { x: 0 })
                // .to('.bracket', {x: 0, duration: 2,})
                .fromTo('.vince', { x: 80, autoAlpha: 0, duration: 2 }, { x: 0, autoAlpha: 1 }, 1)
                .to('.vince', { autoAlpha: 0, })
                .to('.bracket', { x: -150, duration: 1 })

                .to('.bracket', { x: -850, y: -450, duration: 1, scale: 0.2 })
                .to('.loader', { autoAlpha: 0 }, 3.5)
                .to(containerRef.current, { autoAlpha: 1 })
                .fromTo('.img-left', { rotate: 0, x: 405, y: -48 }, {x: 0, y: 0, rotate: -14}, 4)
                .fromTo('.img-right', { rotate: 0, x: -405, y: -48 }, {x: 0, y: 0, rotate: 14}, 4)
                .fromTo('.banner-photo', { width: 0}, {width: "100%"}, 4)

// setloading(false)

        }

    }, [])
    return (
        <div className="relative ">
            <div style={{ position: 'fixed', visibility: 'hidden' }} className="invisible z-50 top-0 left-0 flex w-screen h-screen bg-primary loader banner flex justify-center items-center">
                <svg className="vince mr-4" style={{ visibility: 'hidden' }} width="235" height="70" viewBox="0 0 235 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.2177 54.2267L36.3529 20.7947H51.5977L35.0127 67.6667H17.3389L0.753906 20.7947H16.0824L26.2177 54.2267ZM64.8303 15.9227C62.3174 15.9227 60.2513 15.1947 58.6318 13.7387C57.0683 12.2267 56.2865 10.3787 56.2865 8.19467C56.2865 5.95467 57.0683 4.10667 58.6318 2.65067C60.2513 1.13866 62.3174 0.382662 64.8303 0.382662C67.2873 0.382662 69.2976 1.13866 70.8612 2.65067C72.4806 4.10667 73.2903 5.95467 73.2903 8.19467C73.2903 10.3787 72.4806 12.2267 70.8612 13.7387C69.2976 15.1947 67.2873 15.9227 64.8303 15.9227ZM71.9501 20.7947V67.6667H57.6267V20.7947H71.9501ZM110.809 20.2907C116.282 20.2907 120.637 22.0827 123.876 25.6667C127.171 29.1947 128.818 34.0667 128.818 40.2827V67.6667H114.578V42.2147C114.578 39.0787 113.769 36.6427 112.149 34.9067C110.53 33.1707 108.352 32.3027 105.616 32.3027C102.88 32.3027 100.702 33.1707 99.0823 34.9067C97.4629 36.6427 96.6532 39.0787 96.6532 42.2147V67.6667H82.3298V20.7947H96.6532V27.0107C98.1051 24.9387 100.06 23.3147 102.517 22.1387C104.974 20.9067 107.738 20.2907 110.809 20.2907ZM135.924 44.2307C135.924 39.3587 136.901 35.1027 138.855 31.4627C140.866 27.8227 143.63 25.0227 147.148 23.0627C150.722 21.1027 154.798 20.1227 159.377 20.1227C165.24 20.1227 170.127 21.6627 174.035 24.7427C178 27.8227 180.597 32.1627 181.825 37.7627H166.581C165.296 34.1787 162.811 32.3867 159.126 32.3867C156.501 32.3867 154.407 33.4227 152.844 35.4947C151.28 37.5107 150.498 40.4227 150.498 44.2307C150.498 48.0387 151.28 50.9787 152.844 53.0507C154.407 55.0667 156.501 56.0747 159.126 56.0747C162.811 56.0747 165.296 54.2827 166.581 50.6987H181.825C180.597 56.1867 178 60.4987 174.035 63.6347C170.071 66.7707 165.185 68.3387 159.377 68.3387C154.798 68.3387 150.722 67.3587 147.148 65.3987C143.63 63.4387 140.866 60.6387 138.855 56.9987C136.901 53.3587 135.924 49.1027 135.924 44.2307ZM233.546 43.4747C233.546 44.8187 233.462 46.2187 233.295 47.6747H200.879C201.102 50.5867 202.023 52.8267 203.643 54.3947C205.318 55.9067 207.356 56.6627 209.757 56.6627C213.331 56.6627 215.816 55.1507 217.212 52.1267H232.457C231.675 55.2067 230.251 57.9787 228.185 60.4427C226.175 62.9067 223.634 64.8387 220.563 66.2387C217.491 67.6387 214.057 68.3387 210.26 68.3387C205.681 68.3387 201.604 67.3587 198.031 65.3987C194.457 63.4387 191.665 60.6387 189.654 56.9987C187.644 53.3587 186.639 49.1027 186.639 44.2307C186.639 39.3587 187.616 35.1027 189.571 31.4627C191.581 27.8227 194.373 25.0227 197.947 23.0627C201.521 21.1027 205.625 20.1227 210.26 20.1227C214.783 20.1227 218.804 21.0747 222.322 22.9787C225.84 24.8827 228.576 27.5987 230.53 31.1267C232.541 34.6547 233.546 38.7707 233.546 43.4747ZM218.887 39.6947C218.887 37.2307 218.05 35.2707 216.375 33.8147C214.699 32.3587 212.605 31.6307 210.092 31.6307C207.691 31.6307 205.653 32.3307 203.978 33.7307C202.358 35.1307 201.353 37.1187 200.962 39.6947H218.887Z" fill="black" />
                </svg>

                <svg className="bracket" width="114" height="157" viewBox="0 0 114 157" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.3538 9.16329C24.4965 -0.836662 45.5 2 45.5 2V17.5C45.5 17.5 27.5 19.5 22 27.5C16.5 35.5 7.07909 23.5482 17.3538 9.16329Z" fill="#AD3838" />
                    <path d="M97 9.5C89.6875 -0.696343 68.9999 2 68.9999 2V17.5C68.9999 17.5 86.9159 19.2227 92.5466 27.3798C98.1774 35.5369 107.519 24.1674 97 9.5Z" fill="#AD3838" />
                    <path d="M17.6966 148.317C25.0091 158.513 45.5 156 45.5 156V139.5C45.5 139.5 28.084 137.777 22.4533 129.62C16.8225 121.463 7.17766 133.65 17.6966 148.317Z" fill="#AD3838" />
                    <path d="M97.3034 148.317C89.9909 158.513 68.5 155.5 68.5 155.5V139.5C68.5 139.5 86.916 137.777 92.5467 129.62C98.1775 121.463 107.822 133.65 97.3034 148.317Z" fill="#AD3838" />
                    <path d="M34.624 97.8285C34.624 100.564 34.2103 106.422 33.3715 115.453C32.6282 122.508 32.2491 127.166 32.2491 129.368C32.2491 132.201 32.9309 134.502 34.4858 136.064C36.063 137.743 38.5341 138.462 41.6312 138.462H46.0796V156H37.021C29.1089 156 22.8985 153.825 18.2804 149.566L18.2726 149.559C13.686 145.418 11.3379 139.528 11.3379 131.74C11.3379 128.531 11.5675 124.942 12.0298 120.971L12.03 120.968C12.4961 116.871 12.7747 114.46 12.8669 113.722C13.797 106.29 14.2717 101.25 14.2717 98.6658C14.2717 95.2545 13.1047 92.4558 10.7235 90.3828C8.49842 88.3585 5.20476 87.2689 1 86.9738V69.888C5.19212 69.6058 8.47339 68.6144 10.695 66.7811L10.7048 66.773L10.7143 66.7647C13.1151 64.6793 14.2717 61.7761 14.2717 58.1947C14.2717 55.61 13.797 50.5708 12.8669 43.1381C12.7745 42.3993 12.4958 40.0328 12.0299 36.0307C11.5675 31.9658 11.3379 28.3299 11.3379 25.12C11.3379 17.4297 13.6835 11.5844 18.2726 7.4409L18.2726 7.44094L18.2803 7.43383C22.8985 3.17539 29.1089 1 37.021 1H46.0796V18.5378H41.6312C38.5425 18.5378 36.077 19.2068 34.4982 20.7841C32.9345 22.3461 32.2491 24.6518 32.2491 27.4924C32.2491 29.6005 32.6282 34.306 33.3714 41.5451C34.2103 50.5775 34.624 56.4359 34.624 59.1716C34.624 64.1212 33.4103 68.1301 31.0523 71.2707L31.0469 71.2779L31.0417 71.2852C28.8046 74.3794 25.3336 76.4121 20.494 77.3074L19.6759 77.4587V78.2907V78.5698V79.3868L20.4765 79.5497C25.322 80.5357 28.8005 82.6149 31.0417 85.7148L31.0509 85.7276L31.0606 85.7401C33.4075 88.7793 34.624 92.7798 34.624 97.8285ZM93.506 77.3074C88.6698 76.4127 85.1456 74.3803 82.8133 71.2778C80.5453 68.1371 79.376 64.1251 79.376 59.1716C79.376 56.4359 79.7897 50.5775 80.6286 41.5451C81.3718 34.306 81.7509 29.6005 81.7509 27.4924C81.7509 24.6518 81.0655 22.3461 79.5018 20.7841C77.9229 19.2068 75.4575 18.5378 72.3688 18.5378H67.9204V1H76.979C84.8911 1 91.1015 3.17539 95.7196 7.43387L95.7274 7.4409C100.317 11.5844 102.662 17.4297 102.662 25.12C102.662 28.3302 102.432 31.9664 101.97 36.0319C101.504 40.0333 101.226 42.3993 101.133 43.1381C100.203 50.5708 99.7283 55.61 99.7283 58.1947C99.7283 61.7761 100.885 64.6793 103.286 66.7647L103.295 66.773L103.305 66.7811C105.527 68.6144 108.808 69.6058 113 69.888V86.9738C108.795 87.2689 105.502 88.3585 103.276 90.3828C100.895 92.4558 99.7283 95.2545 99.7283 98.6658C99.7283 101.25 100.203 106.29 101.133 113.722C101.225 114.46 101.504 116.871 101.97 120.968L101.97 120.971C102.432 124.942 102.662 128.531 102.662 131.74C102.662 139.528 100.314 145.418 95.7274 149.559L95.7197 149.566C91.1015 153.825 84.8911 156 76.979 156H67.9204V138.462H72.3688C75.466 138.462 77.937 137.743 79.5142 136.064C81.0691 134.502 81.7509 132.201 81.7509 129.368C81.7509 127.166 81.3718 122.508 80.6285 115.453C79.7897 106.422 79.376 100.564 79.376 97.8285C79.376 92.7731 80.5493 88.7677 82.8092 85.7276C85.1457 82.6165 88.6785 80.5356 93.5235 79.5497L94.3241 79.3868V78.5698V78.2907V77.4587L93.506 77.3074Z" stroke="#AD3838" stroke-width="2" />
                </svg>

            </div>
        
                    <div style={{visibility: 'hidden'}} className="invisible contain" ref={containerRef}>

                        <Nav />
                        <div className="z-20">
                            {children}
                        </div>
                        <Footer />
                    </div>
           


        </div>



    )
}
