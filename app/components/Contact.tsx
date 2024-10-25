import { Link } from "@remix-run/react";
import profile from "../../profile";
import SectionTitle from "./utils/SectionTitle";

interface Props {
  className?: string;
}

const Contact = (props: Props) => {
  return (
    <div id="contact" className={`max-w-xl ${props.className}`}>
      <SectionTitle section="Contact" subheading="Let's connect" />
      <p className="text-[13px] leading-[22px] mt-4 mb-11  md:text-[16px] md:leading-[28px]">
        {profile.ambition}
      </p>
      <Link
        to="mailto:machivictordev@gmail.com"
        className="bg-gray-600 hover:bg-amber hover:text-black text-sm py-[8px] px-[14px] rounded-md transition-colors"
      >
        Get in touch
      </Link>
    </div>
  );
};

export default Contact;
