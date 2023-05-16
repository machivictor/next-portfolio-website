import React from "react";
import Head from "next/head";
import { MainPage } from "@components/screens";

export default function Home() {
  return (
    <>
      <Head>
        <title>Machi Victor</title>
        <meta
          name="description"
          content="Hi, my name is Machi Victor. I am a software engineer. With a passion for crafting seamless user experiences and a commitment to staying at the forefront of technology trends, I'm excited to showcase my skills and potential."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainPage />
      </main>
    </>
  );
}
