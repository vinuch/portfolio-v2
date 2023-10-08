/* eslint-disable react/display-name */
import { Router } from "next/router";
import "../styles/globals.css";
import Loading from "../components/Loader";
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import withLoading from "../components/withLoading";

function MyApp({ Component, pageProps }) {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    document.onreadystatechange = function (e) {
      if (document.readyState === "complete") {
        setTimeout(() => {
          setloading(false);
        }, 2200);
        //dom is ready, window.onload fires later
      }
    };
  }, []);

  return (
    // <>
    //   {loading ? (
    //     <Loading />
    //   ) : (
        // <ThemeProvider enableSyste={true} attribute="class">
          <Component {...pageProps} />
        // </ThemeProvider>
    //   )}
    // </>
  );
}

export default withLoading(MyApp)