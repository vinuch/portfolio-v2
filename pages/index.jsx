import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import DefaultLayout from "../layouts/DefaultLayout";
import Banner from "../components/Banner"

export default function Home() {
  return (
    <DefaultLayout>
      <div className={`${styles.container} h-100 `}>
        
        <Banner />
      </div>
    </DefaultLayout>
  );
}
