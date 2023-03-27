import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../src/styles/globals.css";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
