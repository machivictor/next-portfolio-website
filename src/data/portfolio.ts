export type NavItem = {
  id: "about" | "experience" | "writing";
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "linkedin" | "mail" | "portfolio" | "x";
};

export type Experience = {
  company: string;
  role: string;
  href: string;
  period: string;
  bullets: string[];
  technologies: string[];
};

export type Project = {
  title: string;
  label: string;
  description: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
  technologies: string[];
};

export type Writing = {
  title: string;
  publication: string;
  href: string;
  date: string;
  description: string;
  links?: {
    label: string;
    href: string;
  }[];
};

export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "writing", label: "Highlights" },
];

export const profile = {
  name: "Machi Victor",
  title: "Software Engineer & Inventor | Creator of Tamari",
  summary:
    "I build practical software systems for real operational problems, led by **Tamari**.",
  location: "Marsabit County, Kenya",
  image: {
    src: "/headshot.png",
    alt: "Machi Victor headshot",
  },
};

export const about = [
  "I’m a software engineer and inventor from Kenya, driven by a simple question: **why do we accept inefficient systems as normal?**",
  "While studying at university, I became fascinated by the operational problems behind timetable management and developed **Tamari**, a platform for dynamic academic scheduling in higher learning institutions.",
  "That work led to a registered patent titled **System and Method of Dynamic Timetable Scheduling for Higher Learning Institutions**, created in collaboration with Masinde Muliro University of Science and Technology.",
  "I have also contributed to **AIam**, an AI-powered mobile application, building cross-platform React Native experiences with an international product team.",
  "My work sits at the intersection of software engineering, systems thinking, product research, and design, with experience across React, Next.js, React Native, TypeScript, Node.js, SQL, NoSQL, and Figma.",
];

export const experiences: Experience[] = [
  {
    company: "Tamari",
    role: "Creator & Lead Developer",
    href: "https://tamari.digital",
    period: "2023 - Present",
    bullets: [
      "Conceived and independently developed Tamari, a digital platform for timetable management and academic scheduling in higher learning institutions.",
      "Collaborated with **MMUST** on the development and registration of a patent for dynamic timetable scheduling.",
      "Designed core scheduling workflows, personalized timetable delivery, platform infrastructure, and supporting UI/UX.",
      "Conducted pilot validation with approximately 60 university students over one academic semester.",
    ],
    technologies: ["EdTech", "Scheduling Systems", "React", "Next.js", "UI/UX"],
  },
  {
    company: "Velocity Studio",
    role: "Frontend Developer",
    href: "https://velocitystudio.dev/projects/aiam",
    period: "Nov 2025 - Feb 2026",
    bullets: [
      "Served as the sole frontend developer on the AIam mobile application, collaborating with product, design, and backend teams.",
      "Built cross-platform mobile experiences with React Native for consistent Android and iOS performance.",
      "Integrated AI-powered capabilities into the user experience for intelligent automation and personalized interactions.",
    ],
    technologies: [
      "React Native",
      "AI",
      "Mobile Development",
      "Performance",
      "Architecture",
    ],
  },
  {
    company: "County Government of Laikipia",
    role: "Junior Front End Developer",
    href: "https://www.linkedin.com/in/machi-victor",
    period: "May 2021 - Aug 2021",
    bullets: [
      "Collaborated on a React Native mobile application intended to streamline parking fee collection for Laikipia County residents.",
      "Participated in requirements discussions, feature implementation, testing, and iterative improvements.",
      "Provided technical support across county departments, including Windows troubleshooting, software configuration, basic networking, and workstation maintenance.",
    ],
    technologies: [
      "Frontend Development",
      "HTML",
      "CSS",
      "JavaScript",
      "Public Sector",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Tamari",
    label: "Core product",
    description:
      "A dynamic academic scheduling platform inspired by my university experience. Tamari helps institutions create, manage, and distribute timetables while reducing conflicts and communication delays.",
    href: "https://tamari.digital",
    image: {
      src: "/tamari-banner-thumbnail.png",
      alt: "Tamari scheduling platform preview",
    },
    technologies: [
      "Next.js",
      "EdTech",
      "Scheduling",
      "React",
      "Product Design",
    ],
  },
  {
    title: "Samaritan",
    label: "Demo project",
    description:
      "A sponsorship app concept for orphanages, designed to help sponsors discover children in need, participate in public discussions, and donate directly through the app.",
    href: "https://www.figma.com/file/ai5HCMROMezoTi7kWrgxkC/Children-Home-App---UI-Design?node-id=301%3A3&t=qnPyp3ivUXzlrDvB-1",
    image: {
      src: "/samaritan-banner-thumbnail.png",
      alt: "Samaritan mobile app design preview",
    },
    technologies: [
      "Figma",
      "Mobile UX",
      "Payments",
      "Community",
      "Product Design",
    ],
  },
  {
    title: "AIam",
    label: "Client product",
    description:
      "An AI-driven app built with Velocity Studio, focused on intelligent automation, personalization, and enhanced user interaction across mobile experiences.",
    href: "https://velocitystudio.dev/projects/aiam",
    image: {
      src: "/globe.svg",
      alt: "Abstract AI product graphic",
    },
    technologies: [
      "React Native",
      "AI",
      "Automation",
      "Mobile",
      "Team Collaboration",
    ],
  },
];

export const writing: Writing[] = [
  {
    title:
      "Masinde Muliro University of Science and Technology - BSc Information Technology",
    publication: "Education",
    href: "https://www.mmust.ac.ke",
    date: "2018 - 2024",
    description:
      "Built the technical foundation for my work across software engineering, product development, education technology, and business automation.",
  },
  {
    title:
      "System and Method of Dynamic Timetable Scheduling for Higher Learning Institutions",
    publication: "Registered Patent",
    href: "/tamari-patent-certificate.pdf",
    date: "2024",
    description:
      "Granted protection for Tamari, an academic scheduling system that improves how universities create, manage, and distribute timetables. The patent recognizes a dynamic scheduling framework for conflict detection, real-time updates, personalized schedules, and centralized academic information distribution.",
    links: [
      { label: "MMUST", href: "https://www.mmust.ac.ke" },
      { label: "MMUST SPIIC", href: "https://sciencepark.mmust.ac.ke/" },
      { label: "Foipal", href: "https://foipal.com/" },
      { label: "Patent certificate", href: "/tamari-patent-certificate.pdf" },
    ],
  },
];

export const socials: SocialLink[] = [
  { label: "Email", href: "mailto:machivictordev@gmail.com", icon: "mail" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/machi-victor",
    icon: "linkedin",
  },
  { label: "X", href: "https://x.com/machi_mullata", icon: "x" },
];
