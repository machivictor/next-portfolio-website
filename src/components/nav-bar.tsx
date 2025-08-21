"use client";

import profile from "@/profile";
import React from "react";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { Button } from "./ui/button";

const TABS = [
  { label: "My Work", href: "#work" },
  { label: "Expertise & Skills", href: "#expertise" },
  { label: "Contact Me", href: "#contact" },
];

const NavBar = () => {
  const [mobileMenuShown, setMobileMenuShown] = React.useState(false);
  const [isScrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 0);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = mobileMenuShown ? "hidden" : "visible";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [mobileMenuShown]);

  return (
    <header>
      <nav
        className={`backdrop-blur bg-background bg-opacity-10 transition-colors duration-500 border-b border-b-border py-4 px-6 md:px-10 lg:z-50 ${
          isScrolled && "bg-nav-darkened"
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo / brand */}
          <Link
            href="/"
            className="font-bold text-lg text-primary z-20"
            aria-label={`${profile.firstname} ${profile.lastname} homepage`}
          >
            <span className="sr-only">
              {profile.firstname} {profile.lastname} portfolio
            </span>
            {profile.lastname} {profile.firstname}
          </Link>

          {/* Desktop tabs */}
          <div className="hidden space-x-1 md:flex">
            {TABS.map((tab) => (
              <MenuItem key={tab.label} {...tab} />
            ))}
          </div>

          {/* Desktop theme toggle */}
          <div className="hidden md:flex">
            <ThemeToggle />
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center z-20 space-x-2">
            <ThemeToggle />
            <Button
              size="icon"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuShown}
              aria-controls="mobile-menu"
              onClick={() => setMobileMenuShown(!mobileMenuShown)}
            >
              <svg
                className="w-6 h-6 stroke-primary-foreground"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {!mobileMenuShown ? (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                ) : (
                  <path d="M6 18L18 6M6 6l12 12" />
                )}
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          role="menu"
          className={`absolute left-0 right-0 top-0 h-screen transition backdrop-blur-sm border-0 ${
            mobileMenuShown ? "flex" : "hidden"
          }`}
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        >
          <div className="flex flex-col pb-[10px] absolute right-6 rounded-md top-16 bg-card overflow-hidden">
            {TABS.map((tab) => (
              <Link
                key={tab.label}
                href={tab.href}
                className="text-center border-b border-border text-base font-medium py-[12px] px-[20px] hover:bg-accent transition"
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
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
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default NavBar;
