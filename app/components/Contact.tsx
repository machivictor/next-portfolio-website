import { Link } from "@remix-run/react";
import profile from "../../profile";
import { Button } from "./ui/button";
import SectionTitle from "./utils/SectionTitle";

interface Props {
  className?: string;
}

const Contact = (props: Props) => {
  return (
    <div id="contact" className={`max-w-xl ${props.className}`}>
      <SectionTitle section="Contact" subheading="Let's connect" />
      <p className="text-[13px] leading-[22px] mt-4 mb-10  md:text-[15px] md:leading-[28px]">
        {profile.ambition}
      </p>

      <Button asChild className="hover:scale-105 transition-all">
        <Link to="mailto:machivictordev@gmail.com">Get in touch</Link>
      </Button>
    </div>
  );
};

export default Contact;
