import { Link } from "@remix-run/react";
import { IoLogoFigma, IoLogoGooglePlaystore } from "react-icons/io5";
import { projects } from "../../profile";
import SectionTitle from "./utils/SectionTitle";

interface Props {
  className?: string;
}

const Projects = (props: Props) => {
  const renderButton = (link: (typeof projects)[0]["links"][0]) => {
    const iconProps = {
      size: 20,
      className: "text-primary group-hover:text-primary-foreground",
    };

    return (
      <Link
        key={link.platform}
        to={link.url}
        target="__blank"
        className="group flex flex-row items-center space-x-2 ring-1 ring-border bg-accent dark:shadow-lg hover:bg-primary hover:text-primary-foreground transition py-[8px] px-[14px] rounded-md"
      >
        {link.platform == "playstore" ? (
          <IoLogoGooglePlaystore {...iconProps} />
        ) : (
          <IoLogoFigma {...iconProps} />
        )}

        <span>
          {link.platform == "playstore"
            ? "View app on Google Play"
            : "View figma design"}
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
                className="mb-10 ring-1 ring-border mx-auto bg-card rounded-lg shadow-md overflow-hidden max-w-[480px] md:mb-0 lg:max-w-none"
                style={index == projects.length - 1 ? { marginBottom: 0 } : {}}
              >
                <div className="md:flex-col">
                  {/* image */}
                  <div className="md:shrink-0">
                    <a target="__blank" href={project.banner.path}>
                      <img
                        className="object-cover aspect-video md:w-auto md:h-80"
                        src={project.banner.thumbnailPath}
                        alt={project.banner.alt}
                      />
                    </a>
                  </div>

                  {/* description */}
                  <div className="py-7 px-5 sm:flex sm:flex-col sm:justify-center">
                    <div className="flex flex-row items-center space-x-[18px] mb-[10px]">
                      {project.icon && (
                        <img
                          src={project.icon}
                          alt={`${project.name}'s icon`}
                          className="aspect-square w-12 h-112 rounded-lg"
                        />
                      )}
                      <h3 className="block leading-tight">
                        <div className="tracking-wide text-xs font-medium text-primary">
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
