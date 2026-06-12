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
};

export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "writing", label: "Highlights" },
];

export const profile = {
  name: "Machi Victor",
  title: "Software Engineer & App Developer",
  summary:
    "I build **mobile-first** websites and apps, with a focus on **practical** systems people can actually use.",
  location: "Available for frontend, React Native, and full-stack roles",
  image: {
    src: "/headshot.png",
    alt: "Machi Victor headshot",
  },
};

export const about = [
  "I’m a **software engineer** from Moyale, Kenya focused on building thoughtful apps that solve real operational problems.",
  "While in university, I invented and registered a utility model for a dynamic timetable scheduling system, which later became **Tamari** — a platform for managing academic schedules and learning resources more efficiently.",
  "Currently, I’m building **Black Book**, a mobile-first POS platform helping Kenyan SMEs manage sales, inventory, debt, and payments directly from a smartphone without expensive hardware or complicated setup.",
  "Previously, I contributed to **AIam**, an AI-driven application focused on automation and personalized user experiences, working on cross-platform mobile features and scalable frontend architecture.",
  "I enjoy building at the intersection of **engineering**, product, and design, with experience across React, Next.js, React Native, TypeScript, Node.js, GraphQL, SQL, NoSQL, and Figma.",
];

export const experiences: Experience[] = [
  {
    company: "Black Book",
    role: "Founder & Product Engineer",
    href: "https://www.linkedin.com/in/machi-victor",
    period: "Jun 2026 - Present",
    bullets: [
      "Building a mobile-first point-of-sale platform for small and micro businesses in Kenya.",
      "Designing offline-first workflows for sales, inventory, customer debt, payments, and lightweight reporting.",
      "Optimizing the user experience for low-tech, mobile-only business owners who need speed and clarity over complexity.",
    ],
    technologies: [
      "Product Strategy",
      "React",
      "TypeScript",
      "Offline-first",
      "UX Design",
    ],
  },
  {
    company: "Tamari",
    role: "Founder & Lead Developer",
    href: "https://tamari.digital",
    period: "May 2025 - Present",
    bullets: [
      "Built an education technology platform for university scheduling, academic coordination, and learning resource sharing.",
      "Designed dynamic timetable generation and distribution workflows backed by a registered utility model concept.",
      "Created product flows for students, lecturers, and administrators while driving adoption strategy in higher education.",
    ],
    technologies: ["Next.js", "React", "Scheduling Systems", "UI/UX", "EdTech"],
  },
  {
    company: "Velocity Studio",
    role: "AI Software Engineer / React Native Developer",
    href: "https://velocitystudio.dev/projects/aiam",
    period: "Nov 2025 - Present",
    bullets: [
      "Contributing to AIam, an AI-driven application focused on intelligent automation and richer user interaction.",
      "Developing cross-platform mobile features in React Native and integrating AI-powered personalization workflows.",
      "Collaborating with an international product team on performance, responsiveness, and scalable app architecture.",
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
      "Supported frontend development work for county government digital services.",
      "Gained practical experience translating public-sector requirements into usable web interfaces.",
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
    title: "Black Book",
    label: "Currently building",
    description:
      "A mobile-first POS for Kenyan SMEs that replaces notebook-based record keeping with simple tools for sales, inventory, debt tracking, payments, and reports.",
    href: "https://www.linkedin.com/in/machi-victor",
    image: {
      src: "/window.svg",
      alt: "Abstract app window graphic",
    },
    technologies: [
      "React",
      "TypeScript",
      "Offline-first",
      "POS",
      "SME Digitization",
    ],
  },
  {
    title: "Tamari",
    label: "Patented concept",
    description:
      "An education platform inspired by my own university experience. Tamari helps students and lecturers view schedules, find available classrooms, and share learning material.",
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
      "System and Method Dynamic Timetable Scheduling For Higher Learning Education",
    publication: "Registered Utility Model",
    href: "/tamari-utility-model-certificate.pdf",
    date: "2024",
    description:
      "Designed a system for generating, managing, and distributing personalized study and examination timetables for higher education institutions. Done in collaboration with **Masinde Muliro University of Science and Technology**",
  },
  {
    title: "Building in Public",
    publication: "Product Notes",
    href: "https://x.com/machi_mullata",
    date: "Now",
    description:
      "Sharing the journey of building Black Book and Tamari while validating product decisions with real workflows and real users.",
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
