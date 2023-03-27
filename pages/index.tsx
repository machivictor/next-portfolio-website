import React from "react";
import Head from "next/head";
import { MainPage } from "@components/screens";

export default function Home() {
  return (
    <>
      <Head>
        <title>Machi Victor</title>
        <meta name="description" content="My portfolio website" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainPage />
      </main>
    </>
  );
}
