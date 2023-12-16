import React from "react";
import Hero from "./components/Hero";
import ExpertiseTable from "./components/ExpertiseTable";
import Work from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="pb-10 mx-auto px-6 md:px-10 lg:px-20 lg:max-w-7xl">
      <Hero />
      <Work className="pt-28" />
      <ExpertiseTable className="pt-28" />
      <Contact className="pt-28" />
    </div>
  );
}
