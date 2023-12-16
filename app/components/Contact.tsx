import React from "react";
import SectionTitle from "./utils/SectionTitle";
import Link from "next/link";
import profile from "@/profile";
import { LiaFileDownloadSolid } from "react-icons/lia";

interface Props {
  className?: string;
}

const Contact = (props: Props) => {
  return (
    <div id="contact" className={`max-w-md ${props.className}`}>
      <SectionTitle section="Contact" subheading="Let's connect" />
      <p className="text-[13px] leading-[22px] mt-4 mb-11">
        {profile.ambition}
      </p>
      <Link
        href="mailto:machivictordev@gmail.com"
        className="bg-amber font-bold text-black text-[15px] py-[10px] px-[20px] rounded-sm hover:bg-white transition-colors"
      >
        machivictordev@gmail.com
      </Link>
      <div className="pt-6">
        <Link
          download="RESUME_VICTOR_MACHI.pdf"
          href="RESUME_VICTOR_MACHI.pdf"
          className="flex flex-row items-center text-base text-sky font-semibold hover:text-white transition"
        >
          <LiaFileDownloadSolid
            size={16}
            color="#fff"
            className="mr-[6px] text-indigo"
          />
          Resume.pdf
        </Link>
      </div>
    </div>
  );
};

export default Contact;
