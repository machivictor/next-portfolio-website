import headshot from "/images/headshot.png?url";
import samaritanBannerThumbnail from "/images/samaritan-banner-thumbnail.png?url";
import samaritanBanner from "/images/samaritan-banner.png?url";
import tamariBannerThumbnail from "/images/tamari-banner-thumbnail.png?url";
import tamariBanner from "/images/tamari-banner.png?url";
import tamariIcon from "/images/tamari-icon.png?url";

export default {
  firstname: "Victor",
  lastname: "Machi",
  headshot: headshot,
  role: "software engineer",
  valueProp: "Crafts deligtful user experiences",
  ambition: `I am currently looking to join a cross-functional team that values improving people's lives through software engineering. Or need help with your project? Let's connect.`,
};

export const socials = [
  { name: "linkedin", url: "https://www.linkedin.com/in/victor-machi/" },
  { name: "github", url: "https://github.com/machivictor/" },
  { name: "gmail", url: "mailto:machivictordev@gmail.com" },
];

export const projects = [
  {
    name: "Tamari",
    description: `Inspired by my own experience as a university student, it enables students and lecturers to easily view and manage their schedules, find available classrooms, and share learning material. This project is currently under testing in MMUST.`,
    icon: tamariIcon,
    category: "Patented",
    banner: {
      path: tamariBanner,
      thumbnailPath: tamariBannerThumbnail,
      alt: "Tamari banner.",
    },
    links: [
      {
        platform: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.machivictor.tamari",
      },
    ],
  },
  {
    name: "Samaritan",
    description: `Sponsors can use the app to find needy children in orphanages and start sponsoring them. There is a public forum for discussions. I also integrated payment services allowing sponsors to make donations directly via the app.`,
    category: "Demo project",
    banner: {
      path: samaritanBanner,
      thumbnailPath: samaritanBannerThumbnail,
      alt: "Samaritan app banner.",
    },
    links: [
      {
        platform: "figma",
        url: "https://www.figma.com/file/ai5HCMROMezoTi7kWrgxkC/Children-Home-App---UI-Design?node-id=301%3A3&t=qnPyp3ivUXzlrDvB-1",
      },
    ],
  },
];

export const skills = [
  {
    name: "Design",
    description: "I have a keen eye for design and great attention to detail.",
    tags: ["Figma", "Photoshop"],
    color: "sky",
  },
  {
    name: "Front-end",
    description:
      "I am particularly passionate about building performant cross-platform apps and responsive websites.",
    tags: ["TypeScript", "React.js", "Next.js", "React Native", "HTML", "CSS"],
    color: "amber",
  },
  {
    name: "Back-end",
    description:
      "I can build robust APIs, integrate third party services and  manage servers on the cloud.",
    tags: ["REST", "GraphQL", "Node.js", "SQL", "NoSQL"],
    color: "indigo",
  },
];
