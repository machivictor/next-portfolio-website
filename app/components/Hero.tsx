import { Link } from "@remix-run/react";
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";
import { SiUpwork } from "react-icons/si";
import profile, { socials } from "../../profile";

const imageDimensionClass = "aspect-square w-[240px] md:w-[250px] xl:w-[300px]";

const Hero = () => {
  return (
    <div className="mx-auto mt-[-20px] max-w-xl md:max-w-none min-h-screen flex justify-center items-center">
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
          <h1 className="mx-auto text-center text-sm font-medium pt-8 max-w-[380px] md:text-left md:max-w-md md:mx-0 md:pl-7 lg:w-6xl xl:pl-9">
            <div className="mb-3 text-base font-medium md:text-lg">
              A {profile.role} who
            </div>
            <div className="text-typocolor-900 font-heading mb-8 text-[34px] leading-[38px] md:text-[44px] md:leading-[48px]">
              Crafts{" "}
              <span className="text-amber underline underline-offset-2 decoration-amber decoration-2 md:pl-2">
                delightful{" "}
              </span>
              user experiences.
            </div>
          </h1>

          {/* socials */}
          <div className="flex flex-row justify-center md:justify-start">
            {socials.map((social) => {
              const iconProps = { size: 20, color: "black" };

              return (
                <Link key={social.name} to={social.url}>
                  <div className="w-[36px] h-[36px] rounded-full mx-2 bg-amber flex justify-center items-center hover:scale-110 transition">
                    {social.name == "linkedin" && (
                      <IoLogoLinkedin {...iconProps} />
                    )}
                    {social.name == "gmail" && <IoMail {...iconProps} />}
                    {social.name == "github" && <IoLogoGithub {...iconProps} />}
                    {social.name == "upwork" && <SiUpwork {...iconProps} />}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
