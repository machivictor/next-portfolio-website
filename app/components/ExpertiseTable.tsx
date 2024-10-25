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
      <div className="mx-auto rounded-lg overflow-hidden ring-2 ring-gray-600 max-w-[480px] md:mb-0 lg:max-w-none md:max-w-none md:flex">
        {skills.map((skill, index) => {
          const colors = ["#00B5B2", "#F3A12C", "#c98eff"];

          return (
            <div
              key={skill.name}
              className="bg-gray-800 ring-2 ring-gray-600 py-5 px-4 pb-3 mx-auto md:w-1/3"
            >
              <div className="max-w-[460px]">
                <h3
                  className={`mb-2 text-[22px]`}
                  style={{ color: colors[index] }}
                >
                  {skill.name}
                </h3>
                <p className="mb-7">{skill.description}</p>
                <div className="flex flex-wrap">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`border-[1.9px] rounded-full py-1 px-[12px] mr-[12px] mb-[14px] text-[13px] font-semibold`}
                      style={{
                        borderColor: colors[index],
                        color: colors[index],
                      }}
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
