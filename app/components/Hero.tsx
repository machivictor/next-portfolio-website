import { Link } from "@remix-run/react";
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";
import { SiUpwork } from "react-icons/si";
import profile, { socials } from "../../profile";
import { Button } from "./ui/button";

const imageDimensionClass = "aspect-square w-[240px] md:w-[250px] xl:w-[300px]";

const Hero = () => {
  return (
    <div className="mx-auto mt-[-36px] max-w-xl md:max-w-none min-h-screen flex justify-center items-center">
      <div className="md:flex md:justify-center md:items-center md:flex-1">
        {/* image */}
        <div
          className={`mx-auto md:mx-0 rounded-full overflow-hidden md:shrink-0 ${imageDimensionClass}`}
        >
          <img
            src={profile.headshot}
            className={`object-cover ${imageDimensionClass}`}
            alt={`${profile.firstname} ${profile.lastname}'s picture.`}
          />
        </div>

        <div>
          {/* heading */}
          <h1 className="mx-auto text-center text-sm font-medium max-w-[380px] md:text-left md:max-w-md md:mx-0 md:pl-7 lg:w-6xl xl:pl-9">
            <p className="mb-3 mt-8 md:mt-0 text-base font-medium md:text-base">
              A {profile.role} who
            </p>
            <div className="font-heading mb-8 text-[34px] leading-[40px] md:text-[44px] md:leading-[52px]">
              Crafts{" "}
              <span className="text-primary underline underline-offset-2 decoration-primary decoration-2">
                delightful{" "}
              </span>
              user experiences.
            </div>
          </h1>

          {/* socials */}
          <div className="flex flex-row justify-center mt-9 space-x-4 md:justify-start md:pl-7 xl:pl-9">
            {socials.map((social) => {
              const iconClasses =
                "text-primary group-hover:text-primary-foreground";

              return (
                <Button
                  key={social.name}
                  asChild
                  variant={"outline"}
                  size="icon"
                  className="group scale-110 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Link to={social.url}>
                    <>
                      {social.name == "linkedin" && (
                        <IoLogoLinkedin className={iconClasses} />
                      )}
                      {social.name == "gmail" && (
                        <IoMail className={iconClasses} />
                      )}
                      {social.name == "github" && (
                        <IoLogoGithub className={iconClasses} />
                      )}
                      {social.name == "upwork" && (
                        <SiUpwork className={iconClasses} />
                      )}
                    </>
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
