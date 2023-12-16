import Image from "next/image";
import React from "react";
import SectionTitle from "./utils/SectionTitle";
import { projects } from "@/profile";
import Link from "next/link";

interface Props {
  className?: string;
}

const Projects: any = (props: Props) => {
  return (
    <div id="work" className={`x-6 mx-auto lg:max-w-7xl ${props.className}`}>
      <SectionTitle
        section="Work"
        subheading="Discover some apps I have built"
        className="mb-10"
      />
      <div className="md:flex md:space-x-4 lg:max-w-[976px] lg:justify-center">
        {projects.map((project, index) => {
          return (
            <Link key={project.name} href={project.link}>
              <div
                className="mb-10 ring-2 ring-gray-700 mx-auto bg-gray-800 rounded-lg shadow-md overflow-hidden hover:bg-gray-700 transition max-w-[480px] md:mb-0 lg:max-w-none"
                style={index == projects.length - 1 ? { marginBottom: 0 } : {}}
              >
                <div className="md:flex-col">
                  {/* image */}
                  <div className="md:shrink-0">
                    <Image
                      className="h-60 w-full object-cover sm:aspect-video md:h-80 md:w-full"
                      src={project.banner.path}
                      alt={project.banner.alt}
                    />
                  </div>

                  {/* description */}
                  <div className="py-7 px-5 sm:flex sm:flex-col sm:justify-center">
                    <h3 className="block mb-[10px] leading-tight">
                      <div className="tracking-wide text-[13px] leading-[18px] text-sky font-medium md:text-[15px] md:leading-[20px]">
                        {project.category}
                      </div>
                      {project.name}
                    </h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
