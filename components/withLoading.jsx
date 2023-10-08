import React, { useState, useEffect } from "react";
// import Loading from './Loading';
import Loading from "../components/Loader";
import { ThemeProvider } from "next-themes";

const withLoading = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate a loading delay for demonstration purposes (2 seconds)
      if (loading) {
        const loadingTimeout = setTimeout(() => {
          setLoading(false);
        }, 2500);

        return () => {
          clearTimeout(loadingTimeout);
        };
      }
    }, [loading]);

    return    <ThemeProvider enableSyste={true} attribute="class"> <div>{ <WrappedComponent {...props} />}</div> </ThemeProvider>;
  };
};

export default withLoading;
