import React from 'react'

export default function GetInTouch() {
    return (
        <div className="aboslute h-full  top-0 bg- w-100 bg-contain bg-repeat banner h-100 z-0 " >

            <div className="py-24 px-12">
                <h2 className="text-center text-2xl font-extrabold"><span className="border-b-4 border-primary">Get</span> in  touch</h2>
                <p className="text-center my-8 w-6/12 mx-auto text-lg">You have an awesome idea you want me to jump on? Feel free to contact me. However, if you have other request or question, I'm still up for it.</p>
                <div className="flex justify-around items-center w-3/12 mx-auto my-12">
                    <div className="rounded-full bg-gray1 w-10 h-10"></div>
                    <div className="rounded-full bg-gray1 w-10 h-10"></div>
                    <div className="rounded-full bg-gray1 w-10 h-10"></div>
                    <div className="rounded-full bg-gray1 w-10 h-10"></div>
                </div>

                <div className="flex items-center justify-center my-20">
                    <hr className="w-48 border-t-2 border-gray1" />
                    <span className="mx-8 uppercase font-extrabold">Or</span>
                    <hr className="w-48 border-t-2 border-gray1" />
                </div>

                <div className="flex justify-center">
                    <button className="flex items-center justify-center rounded-md bg-primary text-white px-8 py-3">
                        <span className="mr-4 font-bold">Send an e-mail</span>
                        <svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.7071 8.70711C30.0976 8.31658 30.0976 7.68342 29.7071 7.29289L23.3431 0.928932C22.9526 0.538408 22.3195 0.538408 21.9289 0.928932C21.5384 1.31946 21.5384 1.95262 21.9289 2.34315L27.5858 8L21.9289 13.6569C21.5384 14.0474 21.5384 14.6805 21.9289 15.0711C22.3195 15.4616 22.9526 15.4616 23.3431 15.0711L29.7071 8.70711ZM-4.76371e-10 9L29 9L29 7L4.76371e-10 7L-4.76371e-10 9Z" fill="white" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
