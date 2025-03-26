import profile from "@/profile";
import React from "react";
import { Link } from "react-router";
import ThemeToggle from "./theme-toggle";
import { Button } from "./ui/button";

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
      className={`backdrop-blur bg-background bg-opacity-10 transition-colors duration-500 border-b border-b-border py-4 px-6 md:px-10 lg:z-50 ${
        isScrolled && "bg-nav-darkened"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <Link to="#" className="font-bold text-lg text-primary z-20">
            {profile.lastname} {profile.firstname}
          </Link>

          {/* tabs */}
          <div className="hidden space-x-1 md:flex ">
            {TABS.map((tab) => (
              <MenuItem key={tab.label} {...tab} />
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex space-x-2">
            <Link
              target="_blank"
              to="RESUME_VICTOR_MACHI.pdf"
              className="flex flex-row items-center text-sm py-[8px] px-[14px] rounded-md bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Download resume
            </Link>
            <ThemeToggle />
          </div>

          {/* mobile hamburger */}
          <div className="md:hidden flex items-center z-20 space-x-2">
            <ThemeToggle />
            <Button
              size="icon"
              onClick={() => setMobileMenuShown(!mobileMenuShown)}
            >
              <svg
                className="w-6 h-6 stroke-primary-foreground"
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
            </Button>
          </div>
        </div>

        {/* mobile menu */}
        {mobileMenuShown && (
          <div
            onClick={() => setMobileMenuShown(false)}
            className="flex flex-1 text-card-foreground absolute left-0 right-0 top-0 h-screen transition backdrop-blur-sm border-0"
            style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
          >
            <div className="flex flex-col pb-[10px] absolute right-6 rounded-md top-16 bg-card overflow-hidden">
              {TABS.map((tab) => (
                <Link
                  key={tab.label}
                  to={tab.href}
                  className="text-center border-b border-border text-base font-medium py-[12px] px-[20px] hover:bg-accent transition"
                >
                  {tab.label}
                </Link>
              ))}

              <Button
                asChild
                className="mx-[24px] mb-2 mt-6 hover:scale-105 transition-all"
              >
                <Link target="_blank" to="RESUME_VICTOR_MACHI.pdf">
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

interface MenuItemProps {
  label: string;
  href: string;
}

const MenuItem = ({ label, href }: MenuItemProps) => {
  return (
    <Button
      asChild
      variant="link"
      className="font-medium text-sm text-foreground opacity-60 hover:opacity-100 hover:underline decoration-primary transition"
    >
      <Link to={href}>{label}</Link>
    </Button>
  );
};

export default NavBar;
