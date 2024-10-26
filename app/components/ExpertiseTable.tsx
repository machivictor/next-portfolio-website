import { skills } from "../../profile";
import SectionTitle from "./utils/SectionTitle";

interface Props {
  className?: string;
}

const ExpertiseTable = (props: Props) => {
  return (
    <div
      id="expertise"
      className={`x-6 mx-auto lg:max-w-7xl ${props.className}`}
    >
      <SectionTitle
        section="Expertise"
        subheading="Learn more about my skills"
        className="mb-10"
      />
      <div className="mx-auto rounded-lg overflow-hidden ring-1 ring-border max-w-[480px] md:mb-0 lg:max-w-none md:max-w-none md:flex">
        {skills.map((skill) => {
          return (
            <div
              key={skill.name}
              className="bg-card ring-1 ring-border py-5 px-4 pb-3 mx-auto md:w-1/3"
            >
              <div className="max-w-[460px]">
                <h3 className={`mb-2 text-[22px] text-pretty`}>{skill.name}</h3>
                <p className="mb-7">{skill.description}</p>
                <div className="flex flex-wrap">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`ring-1 ring-primary text-primary rounded-full py-[2px] px-[12px] mr-[12px] mb-[14px]`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpertiseTable;
