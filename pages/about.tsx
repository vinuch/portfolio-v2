
import Image from "next/image";
import styles from "../styles/Home.module.css";
import DefaultLayout from "../layouts/DefaultLayout";
import AboutBanner from "../components/AboutBanner";


export default function About() {
  return (
    <DefaultLayout>
      <div className={`${styles.container} h-100 `}>
        <AboutBanner />
        <p className="md:w-7/12 text-lg mx-auto text-justify pb-24">
          Hi, I&apos;m Ifedili Onyegbu, Software Engineer currently based in Nigeria and I love what I do. In all my years as a Developer and Designer I&apos;ve craved to reconnect with craftsmanship, to make well designed and efficent systems. <br /><br />

          I started my career as a freelance designer where I built my fundamentals in the design space. Then I went on to do Frontend development with Angular and then Mobile development with Ionic framework. Right now I&apos;m building Web2/3 applications with NodeJS and Solidity as a Backend and Smart Contract Engineer. <br /> <br />

          I&apos;m currently exploring the Web3 space hoping to make a full switch. And on the side I&apos;m also playing around with Golang <br /><br />

          I&apos;m thrilled by design and logic; and I solve problems for fun. When I&apos;m not working I&apos;m either playing badminton 🏸, whipping my friends on FIFA 🎮, sharing memes 🤡, doing some art work 🎨 or working out at the gym 🏋🏽‍♂️. <br /> <br />

          Because I&apos;m a huge Angular fan ❤️ this site was built with Angular and without any CSS/animation libraries.


        </p>

        <h2 className="text-center text-2xl font-extrabold"><span className="border-b-4 border-primary">Exper</span>ience</h2>

        <ul className="md:w-9/12 mx-auto my-24">
          <li className="relative">
            <img src="/tie.png" alt="" className="h-48 md:h-36 absolute left-0 top-0" />
            <div className="h- mt-8 y- ml-8 border border-gray2 py-3 px-4 rounded-md">
              <h2 className="text-base font-extrabold mb-4">Sterling Bank </h2>
              <span>Sept 2021 - Present</span>
       
           
            </div>
          </li>
          <li className="relative">
            <img src="/tie.png" alt="" className="h-48 md:h-36 absolute left-0 top-0" />
            <div className="h- mt-8 y- ml-8 border border-gray2 py-3 px-4 rounded-md">
              <h2 className="text-base font-extrabold mb-4">Emergency Response Africa (ERA)</h2>
              <span>November 2021 - Present</span>
            </div>
          </li>
          <li className="relative">
            <img src="/tie.png" alt="" className="h-48 md:h-36 absolute left-0 top-0" />
            <div className="h- mt-8 y- ml-8 border border-gray2 py-3 px-4 rounded-md">
              <h2 className="text-base font-extrabold mb-4">Leyyow</h2>
              <span>February 2021 - Present</span>
            </div>
          </li>
        

        </ul>
      </div>
    </DefaultLayout>
  );
}
