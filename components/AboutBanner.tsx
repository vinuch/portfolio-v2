import React, { useEffect } from 'react'
import { gsap } from "gsap";

export default function AboutBanner() {
    useEffect(() => {

        // gsap.set(containerRef.current, { autoAlpha: 0, duration: 2 });
        gsap
            .timeline()
            .fromTo('.img-left', { rotate: 0, x: 405, y: -48 }, { x: 0, y: 0, rotate: -14 })
            .fromTo('.img-right', { rotate: 0, x: -405, y: -48 }, { x: 0, y: 0, rotate: 14 }, 0)
        // .fromTo('.bracket', { y: 1000 }, { y: 0 })
        // .fromTo('.bracket', { delay: 2, x: -150, duration: 2 }, { x: 0 })
        // // .to('.bracket', {x: 0, duration: 2,})
        // .fromTo('.vince', { x: 80, autoAlpha: 0, duration: 2 }, { x: 0, autoAlpha: 1 }, 1)
        // .to('.vince', { autoAlpha: 0, })
        // .to('.bracket', { x: -150,  duration: 1 })

        // .to('.bracket', { x: -850, y: -450, duration: 1, scale: 0.2 })
        // .to('.loader', { autoAlpha: 0 }, 3.5)
        // .to(containerRef.current, { autoAlpha: 1 })

    }, [])
    return (
        <div className="h-screen ">
            <div className="absolute top-0 left-0 right-0 bg- w-screen h-screen bg-contain banner z-0 pt-24 px-8" >
                <h2 className="text-center text-2xl font-extrabold"><span className="border-b-4 border-primary">Abou</span>t me</h2>

                <div className="z-30 flex items-center justify-center h-5/6 ">
                    <div className="absolute md:relative w-10/12 md:w-3/12 img-left h-64 md:h-30rem border-2 border-gray1 bg-gray2 rounded-xl overflow-hidden translate-x-6" style={{ transform: 'rotate(-14deg)' }}>
                        <img src="/pic4.jpg" alt="" className="w-full h-full object-cover object-center" />

                    </div>
                    <div className="absolute md:relative w-10/12 md:w-3/12 h-64 md:h-30rem border-2 border-gray1 bg-gray2 rounded-xl -translate-y-12 z-20 overflow-hidden" style={{}}>
                        <img src="/pic2.jpg" alt="" className="w-full h-full object-cover object-center" />

                    </div>
                    <div className="absolute md:relative w-10/12 md:w-3/12 img-right h-64 md:h-30rem border-2 border-gray1 bg-gray2 rounded-xl overflow-hidden" style={{ transform: 'rotate(14deg)' }}>
                        <img src="/pic3.jpg" alt="" className="w-full h-full object-cover object-center" />

                    </div>

                </div>
                <div className="flex justify-center -mt-20">
                    <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_24_46)">
                            <path d="M70.7585 22.0383C67.285 15.9594 63.6666 10.1701 60.4825 3.94658C59.7588 2.49924 57.4431 2.93344 57.0089 4.38078C55.2719 10.6043 53.1011 18.1305 53.3904 24.4987C53.3904 25.9461 54.9824 26.2355 55.8508 25.5119C55.9956 25.6566 56.285 25.6566 56.5747 25.6566C58.1665 25.5119 59.7588 25.2224 61.2062 25.0777C66.4163 38.2484 70.6136 61.1163 50.6404 62.5636C48.6144 62.7083 47.0221 62.2741 45.8645 61.4057C48.6144 59.09 50.9301 56.1956 52.0878 52.8667C53.6798 48.5247 50.4959 39.2618 44.5617 41.867C39.7857 44.038 38.7726 52.7217 39.6407 57.064C39.9302 58.3666 40.3644 59.5242 40.7986 60.5376C40.3642 60.8273 40.0747 60.9718 39.6407 61.2615C35.8777 63.4325 31.3912 64.4456 27.049 64.3009C23.8648 64.1561 21.9833 62.4193 20.8255 60.1036C24.7332 58.0776 27.9174 54.8932 28.7858 51.5646C30.5226 44.4726 21.4044 39.8412 17.6413 46.7884C15.9045 49.9725 15.6151 54.4592 16.6282 58.367C16.4835 58.5118 16.194 58.5118 16.0493 58.6565C3.60224 63.7222 -0.160812 47.9462 6.9311 40.1306C7.51003 39.407 6.78637 38.2491 5.91797 38.828C-2.62127 44.9068 -1.89761 57.9328 7.94423 62.1301C10.5494 63.288 14.3125 62.8538 17.7861 61.6959C19.3781 64.88 21.9833 67.3405 25.7464 67.7747C31.391 68.4984 37.9039 66.9061 43.1143 63.7219C46.1537 66.1824 50.4957 66.7616 54.9824 65.7482C73.9424 61.9851 70.4688 38.8278 64.969 25.0781C66.4163 24.9334 67.7192 24.9334 69.1662 24.9334C70.4693 24.9327 71.4822 23.1959 70.7585 22.0383ZM19.6681 56.774C19.5233 55.7611 19.3786 54.748 19.3786 53.7346C19.3786 52.1426 19.6681 50.5505 20.1023 49.1032C21.1154 45.6296 27.1942 46.7874 25.3127 51.4189C24.1548 53.5899 21.9838 55.4714 19.6681 56.774ZM42.6804 54.3138C42.6804 52.2875 43.549 45.0509 46.5882 44.9061C48.9039 44.7614 48.9039 51.1297 48.7591 52.1428C48.1805 54.893 46.154 57.2085 43.6935 58.9455C42.9698 57.4977 42.6804 55.9056 42.6804 54.3138ZM59.6141 10.3146C61.6404 14.0777 63.8114 17.696 65.9824 21.3143C62.943 21.7485 59.9036 22.3275 57.0092 23.0511C58.3115 19.1433 58.8907 14.6566 59.6141 10.3146Z" fill="#AD3838" />
                        </g>
                        <defs>
                            <clipPath id="clip0_24_46">
                                <rect width="71" height="71" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>


                <p className="text-center font-extrabold text-lg ">Yup thats me</p>


            </div>


        </div>
    )
}
