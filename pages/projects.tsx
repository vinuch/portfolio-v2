import React, { useState } from 'react'
import DefaultLayout from '../layouts/DefaultLayout'
export default function Projects() {

  const [projects, setprojects] = useState([{
    "title": "Sportpunch Bet",
    "description": "This is a blockchain powered betting platform built with Nuxt and tailwindcss. In this project, I lead efforts on the frontend which involved UI implementation, handling mobile responsiveness and other frontend optimization efforts. I setup and managed the frontend deployment environment using AWS s3 and cloudfront, I also worked along side the backend developer, project manager and product owners to deliver on this project ",
    "link": "https://sportpunct.bet",
    "img": "sportpunch.png",
    "tools": ["Nuxt", "tailwindcss", "AWS S3"]
  }, {
    "title": "Simplify Retail POS",
    "description": "This is a stand alone web app that comes with many features that help businesses to manage day to day sales, inventory, Orders and much more. I was part of the team ",
    "link": "https://retailpos.yoursimplify.ng/login",
    "img": "retail.png",
    "tools": ["Angular", "SCSS"]
  }, {
    "title": "Satellite Kitchen restaurant",
    "description": "Satellite kitchen restarant is an eatery in lagos that I developed a landing page For to help them take their order management online, it uses strapi as a backend to store the menu and other meta information and VueJs on the frontend.",
    "link": "https://satellite-kitchen.netlify.app",
    "img": "satellite.png",
    "tools": ["Nuxt", "Strapi", "VueJs"]
  },
  {
    "title": "Paysimple Invoicing web app",
    "description": "This is an online invoicing solution i worked on  worked at a company I recently interned at, on this project i acted in the capacity of a fullstack developer using both Nuxt and Nodejs to bring this idea to actuallization. some notable features on here are user authentication, invoice CRUD, download invoice as pdf, share link to live invoice and a lot more. This was a team effort that I lead",
    "link": "https://invoice.yoursimplify.ng",
    "img": "invoice.png",
    "tools": ["Nuxt", "NodeJs"]
  },
  {
    "title": "Bleautech Website",
    "description": "Bleautech is a development agency based in owerri, Nigeria where I sometimes contract for, i recently helped develop their website and blog with ReactJS and tailwindCSS ",
    "link": "https://bleautech.org/",
    "img": "bleautech.png",
    "tools": ["ReactJS", "tailwindCSS"]
  },
  {
    "title": "Tega's Portfolio site ",
    "description": "This is a landing page i developed for Tega a product designer in my network, I use vueJS and GSAP3 on this project",
    "link": "https://tegaportfolio.netlify.app",
    "img": "chrisfolio.png",
    "tools": ["VueJs", "GSAP"]
  },
  {
    "title": "My Portfolio site ",
    "description": "This portfolio website/blog was built with Gridsome, an opportunity to understand and work with the vueJS static site generator, its graphql data layer and alot more ",
    "link": "https://devince.tech",
    "img": "portfolio.png",
    "tools": ["Gridsome", "netlifyCMS", "tailwindcss"]
  },
  {
    "title": "Sony Studios Movie listing app",
    "description": "This project was the capstone project i built for my Udacity Fullstack developer nanodegree where i used vueJS and python(Flask) to develop a CRUD movie listing app with Role based access control implemented courtsey of Auth0",
    "link": "https://casting-app.netlify.app",
    "img": "sonyStudio.png",
    "tools": ["VueJs", "Flask", "Auth0"]
  }, {
    "title": "Supreme Fire consult Website (WIP)",
    "description": "",
    "link": "https://supremefireconsult.com/",
    "img": "primefire.png",
    "tools": ["Nuxt"]
  },
  {
    "title": "Unsplash Clone",
    "description": "This is a basic clone of the unsplash stock image website that uses the unsplash developer api and VueJS",
    "link": "https://vince-unsplash-clone.netlify.app",
    "img": "unsplash.png",
    "tools": ["VueJs"]
  },
  {
    "title": "Github Clone",
    "description": "This was an interesting project I worked on for a job application that involved using the github graphql api, HTML and CSS to clone the github profiles page it is also responsive ",
    "link": "https://gh-repositoriesclone.netlify.app",
    "img": "github.png",
    "tools": ["HTML", "CSS", "Javascript"]
  }

  ])
  return (
    <DefaultLayout >
      <div className="min-h-screen">
        <div className="   bg- w-100 bg-contain bg-repeat banner h-100 z-0" style={{ height: '50vh' }}></div>
        <div className="absolute top-0 pt-32 h-screen overflow-y-scroll w-full md:px-10">
          <h2 className="text-center text-2xl font-extrabold"><span className="border-b-4 border-primary">Proj</span>ects  (Catalog)</h2>

          <div className="flex flex-wrap justify-around flex-wrap my-12 md:w-10/12 mx-auto">
            {
              projects.map((item, idx) => (
                <div key={idx} className="md:w-5/12 m-4 p-5 border border-gray1 rounded-xl">
                  <div className="bg-gray2 w-full rounded-md overflow-hidden">
                  <img src={`/${item.img}`} alt=""  className="object-cover object-center" />

                  </div>
                  <h3 className="font-bold text-xl md:text-2xl my-4">{item.title}</h3>
                  <p className="tracking-wider text-sm">{item.description}</p>
                  <div className="flex mt-3">
                    <span className="w-24 h-8 rounded-full bg-gray2 mr-3"></span>
                    <span className="w-24 h-8 rounded-full bg-gray2 mr-3"></span>
                    <span className="w-24 h-8 rounded-full bg-gray2 mr-3"></span>
                  </div>
                </div>
              ))
            }

            

          </div>

        </div>
      </div>



    </DefaultLayout>
  )
}
