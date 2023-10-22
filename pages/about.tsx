
import Image from "next/image";
import styles from "../styles/Home.module.css";
import DefaultLayout from "../layouts/DefaultLayout";
import AboutBanner from "../components/AboutBanner";
import { ChevronDown } from 'lucide-react';
import { useState } from "react";
import JobSummary from "../components/jobSummary";

const jobs = [
  {
    company: "Atlan",
    role: "Senior Software Engineer(Frontend)",
    period: "June 2022 - March 2023",
    summary: "As a Senior Software Engineer at Atlan, I played a pivotal role in developing new features and leading the creation of the Reporting Center module, which included multiple dashboards for in-app reporting. I also spearheaded the migration to TypeScript, reducing production bugs by 20% and optimized DSL queries for faster data retrieval, significantly enhancing application performance."
  },
  {
    company: "Sterling Bank ",
    role: "Frontend Engineer (Contract)",
    period: "Sept 2021 - September 2022",
    summary: "During my tenure as a Frontend Engineer at Sterling Bank, I successfully implemented designs for the bank's customer investment web application, improving its visual appeal and user-friendliness. I also contributed to the application's robustness by writing unit tests, resulting in a 70% test coverage and fewer unexpected bugs."
  },
  {
    company: "Emergency Response Africa (ERA)",
    role: "Frontend Engineer",
    period: "November 2021 - August 2022",
    summary: "As a Frontend Developer at Emergency Response Africa, I created the user interface for an ambulance dashboard application and an internal Admin dashboard. I established a continuous integration pipeline, integrated tests, and error logging, leading to improved application uptime. My optimizations reduced load times by 30%, enhancing user experience and conversion rates."
  },
  {
    company: "Leyyow",
    role: "Frontend Developer",
    period: "February 2021 - December 2021",
    summary: " At Leyyow, I built the Frontend for a web-based e-commerce storefront using Vue, which led to a 25% increase in completed transactions due to a streamlined checkout process."
  },
  {
    company: "Mercator",
    role: "Fullstack Developer",
    period: "August 2019 - January 2021",
    summary: "My role as a Full Stack Developer at Mercator Technologies involved porting .NET APIs to Node.js, resulting in faster response times and a more developer-friendly experience. I also collaborated with the design and frontend teams, creating beautiful user interfaces and participated in client management processes, such as onboarding and scheduling, to enhance client relationships and communication."
  },
  {
    company: "Oluaka Institute",
    role: "Intern",
    period: "June 2019 - December 2019",
    summary: ""
  },
]
export default function About() {
  return (
    <DefaultLayout>
      <div className={`${styles.container} h-100 `}>
        <AboutBanner />
        <p className=" text-xl w-10/12 mx-auto text- pb-24 leading-loose">
          Hi, I&apos;m Vincent Edeh, a Frontend Software Engineer with a passion for crafting top-tier web experiences. With over 3 years of professional expertise,
          I&apos;ve journeyed through the dynamic world of technology, leveraging a rich stack of tools and languages, including JavaScript, Go, React, Vue, Node.js,
          and more. My forte is weaving pixel-perfect user interfaces and turning innovative ideas into robust, end-to-end digital solutions. <br /><br />

          I&apos;m more than just a coder; I&apos;m a creative problem solver who thrives on building beautiful, functional web applications. My career has led me across diverse
          industries, from finance and health tech to e-commerce. I&apos;ve contributed to impactful projects that enrich the user experience and drive results for clients and employers. <br /><br />

          What sets me apart? My commitment to collaboration and constant learning. I&apos;m a team player who enjoys the challenge of working side by side with fellow engineers
          and designers. I&apos;m also a fast learner, adapting swiftly to new technologies and trends in the ever-evolving tech landscape. <br /><br />

          Beyond coding, you&apos;ll find me on the basketball court, perfecting my jump shot, or at the gym, pushing my limits. I embrace the same dedication and determination
          in my work as I do in my hobbies. <br /><br />

          Currently, I&apos;m on the lookout for exciting opportunities to challenge and elevate my skills as a fullstack engineer. Let&apos;s connect and explore the possibilities together.

          <br /><br />


        </p>

        <h2 className="text-center text-2xl font-extrabold"><span className="border-b-4 border-primary">Exper</span>ience</h2>

        <ul className="md:w-9/12 mx-auto my-24 px-4">
          {jobs.map(item => (
            <JobSummary key={`${item.company}-${item.period}`} item={item} />
          ))}
    
   

        </ul>
      </div>
    </DefaultLayout>
  );
}
