import { Router } from "next/router";
import "../styles/globals.css";
import Loading from '../components/Loader'
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    document.onreadystatechange = function(e)
    {
        if (document.readyState === 'complete')
        {
          setTimeout(() => {
          setloading(false)
            
          }, 2200);
            //dom is ready, window.onload fires later
        }
    };
  }, [])
  
  
  return <>{loading ? <Loading /> : <Component {...pageProps} />}</>;
}

export default MyApp;
