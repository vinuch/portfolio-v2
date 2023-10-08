import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Projects() {
  const projects = [{
    "title": "This or that polling",
    "description": "This-or-That is a decentralized polling project where anyone can create polls and have other people vote in favour of one option or the other. The frontend is built with nextJS and typescript, smartcontract in assemblyscript on the NEAR protocol",
    "link": "https://this-or-that-dapp.vercel.app/",
    "img": "thisorthat.png",
    "tools": ["NextJs", "tailwindcss", "AssemblyScript", "NEAR Protocol"]
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

    <div className="aboslute h-full top-0 bg- w-100 bg-repeat banner h-100 z-0 p-4" >
      <div className="py-24 md:px-12">
        <h2 className="text-center text-2xl font-extrabold"><span className="border-b-4 border-primary">Pro</span>jects</h2>
        <div className="flex flex-wrap lg:flex-nowrap justify-between py-16">
          {
            projects.map((item, idx) => (
              <div key={idx} className="relative  lg:w-4/12 md:m-4 my-4 p-5 border border-gray1 rounded-xl">
                <div className="bg-gray2 w-full h-64 relative rounded-md overflow-hidden ">
                  <Image layout='fill' src={`/${item.img}`} alt="" className="object-cover object-center" />

                </div>
                <a href={item.link} target="_blank" rel="noreferrer" className="hover:underline">
                  <div className="font-bold text-xl md:text-2xl my-4 flex items-center"><span className="mr-3">{item.title}</span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg></div>

                </a>
                <p className="tracking-wider text-sm mb-">{item.description}</p>
                <div>
                  <div className="flex flex-wrap mt-3  ">
                    {
                      item.tools.map((item, idx) => (
                        // <span key={idx} className="px-8 py-2 text-xs md:text-base md:px-6 rounded-full bg-gray2 mr-3 py-1 text-center">{item}</span>
                        <div key={idx} className="min-w-20 w-auto px-4 mb-3 h-8 rounded-full bg-gray2 dark:bg-primary2 text-xs mr-3 py-1 flex items-center justify-center text-center"><span>{item}</span></div>

                      ))
                    }

                  </div>
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
