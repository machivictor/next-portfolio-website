import { Link } from "@remix-run/react";
import React from "react";
import profile from "../../profile";

const TABS = [
  { label: "Work", href: "#work" },
  { label: "Expertise", href: "#expertise" },
  { label: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [mobileMenuShown, setMobileMenuShown] = React.useState(false);
  const [isScrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) setScrolled(true);
    else setScrolled(false);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    // Add or remove the 'no-scroll' class based on the mobileMenuShown state
    if (mobileMenuShown) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [mobileMenuShown]);

  return (
    <div
      className={`backdrop-blur bg-gray-900 bg-opacity-10 transition-colors duration-500 border-b border-b-gray-600 py-4 px-6 md:px-10 lg:z-50 ${
        isScrolled && "nav-darkened"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <Link to="#" className="font-bold text-xl text-amber z-20">
            {profile.lastname} {profile.firstname}
          </Link>

          {/* tabs */}
          <div className="hidden sm:flex space-x-6">
            {TABS.map((tab) => (
              <MenuItem key={tab.label} {...tab} />
            ))}
          </div>

          {/* CTA */}
          <div className="hidden sm:flex">
            <Link
              target="_blank"
              to="RESUME_VICTOR_MACHI.pdf"
              className="flex flex-row items-center text-sm py-[8px] px-[14px] rounded-md bg-gray-600 hover:bg-amber hover:text-black transition-colors"
            >
              Download resume
            </Link>
          </div>

          {/* mobile hamburger */}
          <div className="sm:hidden flex items-center z-20">
            <button
              className="outline-none bg-amber p-[4px] rounded-md"
              onClick={() => setMobileMenuShown(!mobileMenuShown)}
            >
              <svg
                className="w-6 h-6 text-amber"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                stroke="#000"
              >
                {!mobileMenuShown ? (
                  <path d="M4 6h16H4 12h16M4 12h16M4 18h16" />
                ) : (
                  <path d="M6 18L18 6M6 6l12 12" />
                )}
              </svg>
            </button>
          </div>

          {/* mobile menu */}
          {mobileMenuShown && (
            <div
              onClick={() => setMobileMenuShown(false)}
              className="flex flex-1 absolute left-0 right-0 top-0 h-screen transition backdrop-blur-sm"
              style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
            >
              <div className="flex flex-col pb-[10px] absolute right-6 rounded-md top-16 bg-gray-900 overflow-hidden">
                {TABS.map((tab) => (
                  <Link
                    key={tab.label}
                    to={tab.href}
                    className="border-b border-gray-700 text-base font-medium py-[12px] px-[20px] hover:bg-gray-600 transition"
                  >
                    {tab.label}
                  </Link>
                ))}
                <Link
                  target="_blank"
                  to="RESUME_VICTOR_MACHI.pdf"
                  className="flex flex-row items-center mx-[24px] text-center mb-2 mt-6 bg-gray-600 hover:bg-amber hover:text-black transition-colors text-base py-[6px] px-[10px] rounded-md active:scale-105 "
                >
                  Download resume
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({ label, href }: any) => {
  return (
    <Link
      to={href}
      className="font-medium text-sm hover:text-white hover:underline transition-colors"
    >
      {label}
    </Link>
  );
};

export default NavBar;
