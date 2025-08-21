import Navbar from "@/components/nav-bar";
import SectionTitle from "@/components/section-title";
import { Button } from "@/components/ui/button";
import profile, { projects, skills } from "@/profile";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IoLogoFigma, IoLogoGooglePlaystore } from "react-icons/io5";

export const metadata: Metadata = {
  title: "Machi Victor | Software Engineer & UI Enthusiast",
  description:
    "Machi Victor – A software engineer who crafts delightful user experiences. Explore my projects, expertise, and how we can work together.",
  keywords: [
    "Machi Victor",
    "Victor Machi Mullata",
    "software engineer portfolio",
    "UI/UX developer",
    "frontend developer Kenya",
    "React developer portfolio",
  ],
  openGraph: {
    title: "Machi Victor | Software Engineer",
    description:
      "A software engineer who crafts delightful user experiences. Check out my portfolio.",
    url: "https://machivictor.vercel.app",
    siteName: "Machi Victor Portfolio",
    images: [
      {
        url: "/headshot.png",
        width: 1200,
        height: 630,
        alt: "Machi Victor Portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Machi Victor | Software Engineer",
    description:
      "Software engineer crafting delightful user experiences. Explore my projects & skills.",
    images: ["/headshot.png"],
    creator: "@machi_victor",
  },
  icons: {
    icon: "/favicon.ico",
  },
  authors: [{ name: "Machi Victor", url: "https://machivictor.vercel.app" }],
};

export default function Home() {
  const renderButton = (link: (typeof projects)[0]["links"][0]) => {
    const iconProps = {
      size: 18,
      className: "text-primary group-hover:text-primary-foreground transition",
    };

    return (
      <Link
        key={link.platform}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 rounded-md border border-border bg-accent px-3 py-2 text-sm font-medium transition hover:bg-primary hover:text-primary-foreground"
      >
        {link.platform === "playstore" ? (
          <IoLogoGooglePlaystore {...iconProps} />
        ) : (
          <IoLogoFigma {...iconProps} />
        )}
        <span className="whitespace-nowrap">
          {link.platform === "playstore" ? "Google Play" : "Figma Design"}
        </span>
      </Link>
    );
  };

  return (
    <main className="font-sans text-foreground">
      {/* Accessibility skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/70 backdrop-blur-md">
        <Navbar />
      </header>

      <div
        id="main-content"
        className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-8 xl:max-w-[1360px]"
      >
        <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-32">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Turning complex problems into{" "}
              <span className="text-purple-600">simple apps</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-lg mx-auto md:mx-0">
              I’m a software engineer passionate about building modern,
              scalable, and user-friendly web and mobile apps.
            </p>
            <Button
              asChild
              size="lg"
              className="transition hover:scale-[1.02]"
              aria-label="Send me an email"
            >
              <Link href="mailto:machivictordev@gmail.com">Get in touch</Link>
            </Button>
          </div>

          {/* Hero Image */}
          <div className="flex-1 mt-10 md:mt-0 flex justify-center md:justify-end">
            <Image
              src={profile.headshot}
              alt="Hero illustration"
              width={400}
              height={400}
              className="rounded-full shadow-lg object-cover"
            />
          </div>
        </section>

        {/* WORK / PROJECTS */}
        <section id="work" className="py-20">
          <header className="mb-10">
            <SectionTitle
              section="Work"
              subheading="Discover some apps I have built"
            />
          </header>

          <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-lg"
              >
                {/* banner */}
                <Link
                  href={project.banner.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Image
                    src={project.banner.thumbnailPath}
                    alt={project.banner.alt}
                    width={600}
                    height={340}
                    className="aspect-video w-full object-cover"
                  />
                </Link>

                {/* content */}
                <div className="flex flex-1 flex-col p-6">
                  <header className="mb-3 flex items-center gap-3">
                    {project.icon && (
                      <Image
                        src={project.icon}
                        alt={`${project.name} icon`}
                        width={40}
                        height={40}
                        className="rounded-md object-cover"
                      />
                    )}
                    <h3 className="text-lg font-semibold leading-snug">
                      <span className="block text-xs font-medium uppercase tracking-wide text-primary mb-0.5">
                        {project.category}
                      </span>
                      {project.name}
                    </h3>
                  </header>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {project.links.map((link) => renderButton(link))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERTISE */}
        <section id="expertise" className="py-20">
          <header className="mb-10">
            <SectionTitle
              section="Expertise"
              subheading="Learn more about my skills"
            />
          </header>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <article
                key={skill.name}
                className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="mb-3 text-lg font-semibold">{skill.name}</h3>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                  {skill.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <li key={tag}>
                      <span className="inline-block rounded-full border border-primary px-3 py-0.5 text-xs text-primary">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20">
          <header className="mb-8">
            <SectionTitle section="Contact" subheading="Let's connect" />
          </header>

          <p className="mb-6 max-w-2xl text-base leading-7 text-muted-foreground">
            {profile.ambition}
          </p>

          <Button
            asChild
            size="lg"
            className="transition hover:scale-[1.02]"
            aria-label="Send me an email"
          >
            <Link href="mailto:machivictordev@gmail.com">Get in touch</Link>
          </Button>
        </section>

        {/* FOOTER */}
        <footer className="mt-20 border-t border-border py-8 text-center text-sm text-muted-foreground">
          <span>
            Designed and built by{" "}
            <Link
              href={profile.xUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline"
            >
              Machi Victor
            </Link>
          </span>
        </footer>
      </div>
    </main>
  );
}
