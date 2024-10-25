import { projects } from "../../profile";

import { Link } from "@remix-run/react";
import SectionTitle from "./utils/SectionTitle";
import { IoLogoFigma, IoLogoGooglePlaystore } from "react-icons/io5";

interface Props {
  className?: string;
}

const Projects = (props: Props) => {
  const renderButton = (link: (typeof projects)[0]["links"][0]) => {
    const iconProps = { size: 20 };

    return (
      <Link to={link.url} target="__blank">
        <span className="flex flex-row items-center space-x-2 bg-gray-600 hover:bg-amber hover:text-black transition p-2 px-3 rounded-md">
          {link.platform == "playstore" ? (
            <IoLogoGooglePlaystore {...iconProps} />
          ) : (
            <IoLogoFigma {...iconProps} />
          )}

          <p className="">
            {link.platform == "playstore"
              ? "View app on Google Play"
              : "View figma design"}
          </p>
        </span>
      </Link>
    );
  };

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
            <div key={project.name}>
              <div
                className="mb-10 ring-2 ring-gray-700 mx-auto bg-gray-800 rounded-lg shadow-md overflow-hidden max-w-[480px] md:mb-0 lg:max-w-none"
                style={index == projects.length - 1 ? { marginBottom: 0 } : {}}
              >
                <div className="md:flex-col">
                  {/* image */}
                  <div className="md:shrink-0">
                    <img
                      className="h-60 w-full object-cover sm:aspect-video md:h-80 md:w-full"
                      src={project.banner.path}
                      alt={project.banner.alt}
                    />
                  </div>

                  {/* description */}
                  <div className="py-7 px-5 sm:flex sm:flex-col sm:justify-center">
                    <div className="flex flex-row items-center space-x-4 mb-[10px]">
                      {project.icon && (
                        <img
                          src={project.icon}
                          alt={`${project.name}'s icon`}
                          className="aspect-square w-12 h-12 rounded-lg"
                        />
                      )}
                      <h3 className="block leading-tight">
                        <div className="tracking-wide text-[13px] leading-[18px] text-sky font-medium md:text-[15px] md:leading-[20px]">
                          {project.category}
                        </div>
                        {project.name}
                      </h3>
                    </div>
                    <p>{project.description}</p>

                    <div className="flex flex-row mt-6">
                      {project.links.map((link) => renderButton(link))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
