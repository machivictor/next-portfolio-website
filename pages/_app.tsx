import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../src/styles/globals.css";
import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
