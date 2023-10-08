
import Image from "next/image";
import styles from "../styles/Home.module.css";
import DefaultLayout from "../layouts/DefaultLayout";
import AboutBanner from "../components/AboutBanner";


export default function About() {
  return (
    <DefaultLayout>
      <div className={`${styles.container} h-100 `}>
        <AboutBanner />
        <p className="md:w-7/12 text-xl mx-auto text-justify pb-24 leading-loose">
          Hi, I&apos;m Vincent Edeh, I am a Frontend Software Engineer with 3+ years of experience working with various technologies 
          and tools to design high-quality web experiences. I build and deliver end to end solutions for digital products in both 
          web2 and web3 space. I am currently looking for opportunities to contribute to interesting blockchain projects in Defi, 
          NFTs and decentralized applications(Dapps).
          
          <br /><br />

          I have worked across industries from banking/finance to health tech and e-commerce all the while contributing to building beautiful functional web applications for clients and employers alike. I am great at building pixel-perfect user interfaces I work well in teams and I am also a fast learner. <br /><br />
          In my free time, I am usually shooting hoops on a basketball court or pushing weights at the gym.
          <br /><br />


        </p>

        <h2 className="text-center text-2xl font-extrabold"><span className="border-b-4 border-primary">Exper</span>ience</h2>

        <ul className="md:w-9/12 mx-auto my-24">
          <li className="relative">
            {/* <img src="/tie.png" alt="" className="h-48 md:h-36 absolute left-0 top-0" /> */}
            <div className="h- mt-8 y- ml-8 border-2 border-gray2 py-3 px-4 rounded-md">
              <h2 className="text-lg font-extrabold mb-2">Sterling Bank </h2>
              <h3 className="text-base font-extrabold mb-2">Frontend Engineer</h3>

              <span className="text-sm">Sept 2021 - Present</span>


            </div>
          </li>
          <li className="relative">
            {/* <img src="/tie.png" alt="" className="h-48 md:h-36 absolute left-0 top-0" /> */}
            <div className="h- mt-8 y- ml-8 border-2 border-gray2 py-3 px-4 rounded-md">
              <h2 className="text-lg font-extrabold mb-2">Emergency Response Africa (ERA)</h2>
              <h3 className="text-base font-extrabold mb-2">Frontend Engineer</h3>
              <span className="text-sm">November 2021 - Present</span>
            </div>
          </li>
          <li className="relative">
            {/* <img src="/tie.png" alt="" className="h-48 md:h-36 absolute left-0 top-0" /> */}
            <div className="h- mt-8 y- ml-8 border-2 border-gray2 py-3 px-4 rounded-md">
              <h2 className="text-lg font-extrabold mb-2">Leyyow</h2>
              <h3 className="text-base font-extrabold mb-2">Frontend Developer</h3>
              <span className="text-sm">February 2021 - Present</span>
            </div>
          </li>
          <li className="relative">
            {/* <img src="/tie.png" alt="" className="h-48 md:h-36 absolute left-0 top-0" /> */}
            <div className="h- mt-8 y- ml-8 border-2 border-gray2 py-3 px-4 rounded-md">
              <h2 className="text-lg font-extrabold mb-2">Mercator</h2>
              <h3 className="text-base font-extrabold mb-2">Fullstack Developer</h3>

              <span className="text-sm">August 2020 - July 2021</span>
            </div>
          </li>
          <li className="relative">
            {/* <img src="/tie.png" alt="" className="h-48 md:h-36 absolute left-0 top-0" /> */}
            <div className="h- mt-8 y- ml-8 border-2 border-gray2 py-3 px-4 rounded-md">
              <h2 className="text-lg font-extrabold mb-2">Oluaka Institute</h2>
              <h3 className="text-base font-extrabold mb-2">Intern</h3>
              
              <span className="text-sm">June 2019 - December 2019</span>
            </div>
          </li>


        </ul>
      </div>
    </DefaultLayout>
  );
}
