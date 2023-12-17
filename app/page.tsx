import React from "react";
import Hero from "./components/Hero";
import ExpertiseTable from "./components/ExpertiseTable";
import Work from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="pb-10 mx-auto px-6 md:px-10 xl:px-0 xl:max-w-[1380px]">
      <Hero />
      <Work className="pt-28" />
      <ExpertiseTable className="pt-28" />
      <Contact className="pt-28" />
    </div>
  );
}
