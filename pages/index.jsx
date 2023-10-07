import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { Suspense } from "react";
// import DefaultLayout from "../layouts/DefaultLayout";
import Banner from "../components/Banner";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import GetInTouch from "../components/GetInTouch";
import Loader from "../components/Loader";
const DefaultLayout = React.lazy(() => import("../layouts/DefaultLayout")); // Lazy-loaded

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <DefaultLayout>
        <div className={`${styles.container} h-100 dark:bg-dark1 `}>
          <Banner />
          <TechStack />

          <Projects />
          <GetInTouch />
        </div>
      </DefaultLayout>
    </Suspense>
  );
}
