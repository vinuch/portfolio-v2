import React from 'react'
import Link from 'next/link'
export default function Projects() {
    const projects = [{
        "title": "Sportpunch Bet",
        "description": "This is a blockchain powered betting platform built with Nuxt and tailwindcss. In this project, I lead efforts on the frontend which involved UI implementation, handling mobile responsiveness and other frontend optimization efforts. I setup and managed the frontend deployment environment using AWS s3 and cloudfront, I also worked along side the backend developer, project manager and product owners to deliver on this project ",
        "link": "https://sportpunct.bet",
        "img": "sportpunch.png",
        "tools": ["Nuxt", "tailwindcss", "AWS S3"]
      },
 
      {
        "title": "Bleautech Website",
        "description": "Bleautech is a development agency based in owerri, Nigeria where I sometimes contract for, i recently helped develop their website and blog with ReactJS and tailwindCSS ",
        "link": "https://bleautech.org/",
        "img": "bleautech.png",
        "tools": ["ReactJS", "tailwindCSS"]
      },
      
      {
        "title": "Sony Studios Movie listing app",
        "description": "This project was the capstone project i built for my Udacity Fullstack developer nanodegree where i used vueJS and python(Flask) to develop a CRUD movie listing app with Role based access control implemented courtsey of Auth0",
        "link": "https://casting-app.netlify.app",
        "img": "sonyStudio.png",
        "tools": ["VueJs", "Flask", "Auth0"]
      },
      
    
      ]
    return (

        <div className="aboslute h-full  top-0 bg- w-100 bg-contain bg-repeat banner h-100 z-0 " >
            <div className="py-24 md:px-12">
                <h2 className="text-center text-2xl font-extrabold"><span className="border-b-4 border-primary">Pro</span>jects</h2>
                <div className="flex flex-wrap md:flex-nowrap justify-between py-16">
                {
              projects.map((item, idx) => (
                <div key={idx} className="relative  md:w-4/12 md:m-4 my-4 p-5 border border-gray1 rounded-xl">
                  <div className="bg-gray2 w-full rounded-md overflow-hidden">
                  <img src={`/${item.img}`} alt=""  className="object-cover object-center" />

                  </div>
                  <h3 className="font-bold text-xl md:text-2xl my-4">{item.title}</h3>
                  <p className="tracking-wider text-sm mb-10">{item.description}</p>
                  <div className="flex mt-3 absolute bottom-3">
                    {
                      item.tools.map(item => (
                        <span className="px-2 text-sm md:text-base md:px-6 rounded-full bg-gray2 mr-3 py-1 text-center">{item}</span>

                      ))
                    }
                  
                  </div>
                </div>
              ))
            }
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
