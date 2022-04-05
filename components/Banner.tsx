import React from 'react'

export default function Banner() {
    return (
        <div className="h-screen">
            <div className="absolute top-0 left-0 right-0 bg- w-screen h-screen bg-contain banner z-0 pt-24 px-8" >
                <div className="z-30 flex items-center justify-around h-full ">
                    <div className="w-5/12 rounded-md  bg-gray1" style={{ height: '80%' }}></div>
                    <div className="w-5/12 -mt-44">
                        <h2 className="text-4xl font-extrabold tracking-wide">Edeh Vincent</h2>

                        <h2 className="text-primary text-5xl my-8 font-extrabold">Software Engineer;</h2>
                        <p className="text-lg tracking-wide leading-relaxed text-gray1">I’m a Software Engineer currently based in Nigeria with 4+ years of professional experience in ideating, designing, building and delivering end to end solutions for digital products.building and delivering end to end solutions for digital products.</p>
                    </div>

                </div>
            </div>


        </div>
    )
}
