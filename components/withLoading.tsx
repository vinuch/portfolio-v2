import React, { useState, useEffect } from "react";
// import Loading from './Loading';
import { ThemeProvider } from "next-themes";

import Loading from "./Loader";

const withLoading = (WrappedComponent) => {
  const WrappedWithLoading = (props) => {
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

    return    <ThemeProvider enableSystem={true} attribute="class"> <div>{loading ? <Loading /> : <WrappedComponent {...props} />}</div> </ThemeProvider>;
  };

  WrappedWithLoading.displayName = 'Component'
  return WrappedWithLoading;
};


export default withLoading;
