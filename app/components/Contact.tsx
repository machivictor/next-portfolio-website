import profile from "../../profile";
import { Link } from "@remix-run/react";
import { LiaFileDownloadSolid } from "react-icons/lia";
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
        className="bg-gray-600 hover:bg-amber hover:text-black text-[15px] py-[10px] px-[20px] rounded-md transition-colors md:text-md"
      >
        Get in touch
      </Link>
    </div>
  );
};

export default Contact;
