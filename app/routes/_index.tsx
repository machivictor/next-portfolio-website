import { MetaFunction } from "@remix-run/react";
import Contact from "~/components/Contact";
import ExpertiseTable from "~/components/ExpertiseTable";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import Work from "~/components/Projects";

export const meta: MetaFunction = () => {
  return [
    { title: "Machi Victor" },
    {
      name: "description",
      content: "Machi Victor's personal portfolio website.",
    },
  ];
};

export default function Index() {
  return (
    <div className="pb-10 mx-auto px-6 md:px-10 xl:px-0 xl:max-w-[1380px]">
      <Hero />
      <Work className="pt-28" />
      <ExpertiseTable className="pt-28" />
      <Contact className="pt-28" />
      <Footer />
    </div>
  );
}
