"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  about,
  experiences,
  navItems,
  profile,
  socials,
  writing,
  type Experience,
  type NavItem,
  type SocialLink,
  type Writing,
} from "@/src/data/portfolio";

type SectionId = NavItem["id"];

function RichText({ text }: { text: string }) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong className="font-semibold text-slate-200" key={`${part}-${index}`}>
          {part.slice(2, -2)}
        </strong>
      );
    }

    return part;
  });
}

function useActiveSection(sectionIds: SectionId[]) {
  const [activeSection, setActiveSection] = useState<SectionId>(sectionIds[0]);

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => Boolean(section));

      const activationLine = window.innerHeight * 0.35;
      const currentSection =
        sections.findLast(
          (section) => section.getBoundingClientRect().top <= activationLine,
        ) ?? sections[0];

      if (currentSection?.id) {
        setActiveSection(currentSection.id as SectionId);
      }
    };

    const requestUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [sectionIds]);

  return activeSection;
}

function usePointerGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return position;
}

export function Portfolio() {
  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const activeSection = useActiveSection(sectionIds);
  const glowPosition = usePointerGlow();

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#0f172a] text-slate-400 selection:bg-teal-300 selection:text-slate-900">
      <a
        href="#content"
        className="sr-only z-50 rounded bg-teal-300 px-4 py-3 font-semibold text-slate-900 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 hidden transition duration-300 lg:block"
        style={{
          background: `radial-gradient(600px at ${glowPosition.x}px ${glowPosition.y}px, rgba(29, 78, 216, 0.16), transparent 80%)`,
        }}
      />
      <div className="relative z-10 mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:flex lg:items-start lg:justify-between lg:gap-4 lg:px-12 lg:py-0">
        <Sidebar activeSection={activeSection} />
        <main id="content" className="pt-8 lg:w-[52%] lg:py-24">
          <Section id="about" title="About">
            <div className="space-y-4 text-base leading-7 text-slate-400">
              {about.map((paragraph) => (
                <p key={paragraph}>
                  <RichText text={paragraph} />
                </p>
              ))}
            </div>
          </Section>

          <Section id="experience" title="Experience">
            <CardList>
              {experiences.map((experience) => (
                <ExperienceCard
                  experience={experience}
                  key={`${experience.company}-${experience.role}`}
                />
              ))}
            </CardList>
          </Section>

          <Section id="writing" title="Highlights">
            <CardList>
              {writing.map((entry) => (
                <WritingCard entry={entry} key={entry.title} />
              ))}
            </CardList>
          </Section>
        </main>
      </div>
    </div>
  );
}

function Sidebar({ activeSection }: { activeSection: SectionId }) {
  return (
    <header className="flex flex-col gap-12 lg:sticky lg:left-0 lg:top-0 lg:h-screen lg:w-[48%] lg:shrink-0 lg:self-start lg:justify-between lg:py-24">
      <div className="flex flex-col gap-12">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            <Link href="/" aria-label={`${profile.name} home`}>
              {profile.name}
            </Link>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            {profile.title}
          </h2>
          <p className="mt-4 max-w-xs leading-normal">
            <RichText text={profile.summary} />
          </p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-teal-300/90">
            <RichText text={profile.location} />
          </p>
        </div>

        <nav className="hidden lg:block" aria-label="Section navigation">
          <ol className="w-max">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="group flex items-center py-3 text-xs font-bold uppercase tracking-widest"
                  aria-current={activeSection === item.id ? "true" : undefined}
                >
                  <span
                    className={`mr-4 h-px transition-all duration-300 group-hover:w-16 group-hover:bg-slate-200 ${
                      activeSection === item.id
                        ? "w-16 bg-slate-200"
                        : "w-8 bg-slate-600"
                    }`}
                  />
                  <span
                    className={`transition-colors group-hover:text-slate-200 ${
                      activeSection === item.id
                        ? "text-slate-200"
                        : "text-slate-500"
                    }`}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <SocialLinks />
    </header>
  );
}

function SocialLinks() {
  return (
    <ul className="flex items-center gap-4 text-slate-500">
      {socials.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            className="flex h-9 w-9 items-center justify-center rounded text-slate-500 transition hover:-translate-y-0.5 hover:text-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300"
            aria-label={social.label}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel={social.href.startsWith("http") ? "noreferrer" : undefined}
          >
            <SocialIcon icon={social.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
}

function SocialIcon({ icon }: { icon: SocialLink["icon"] }) {
  const iconClass = "h-5 w-5";

  return (
    <svg
      aria-hidden="true"
      className={iconClass}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {icon === "linkedin" && (
        <>
          <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4V9h4v2" />
          <path d="M2 9h4v11H2z" />
          <circle cx="4" cy="4" r="2" />
        </>
      )}
      {icon === "mail" && (
        <>
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a2 2 0 0 1-2.06 0L2 7" />
        </>
      )}
      {icon === "x" && (
        <>
          <path d="m4 4 11.5 16H20L8.5 4H4Z" />
          <path d="M4 20 20 4" />
        </>
      )}
      {icon === "portfolio" && (
        <>
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 0 20" />
          <path d="M12 2a15.3 15.3 0 0 0 0 20" />
        </>
      )}
    </svg>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: SectionId;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-16 pb-16 md:pb-20 lg:scroll-mt-24 lg:pb-28"
      aria-labelledby={`${id}-heading`}
    >
      <h2
        id={`${id}-heading`}
        className="sticky left-0 top-0 z-20 -mx-6 mb-4 bg-[#0f172a]/75 px-6 py-5 text-sm font-bold uppercase tracking-widest text-slate-200 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:static lg:m-0 lg:bg-transparent lg:p-0"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function CardList({ children }: { children: React.ReactNode }) {
  return <div className="group/list space-y-3">{children}</div>;
}

function ExternalArrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/card:-translate-y-1 group-hover/card:translate-x-1 group-focus-visible/card:-translate-y-1 group-focus-visible/card:translate-x-1"
      fill="currentColor"
    >
      <path d="M5.5 4.5A1.5 1.5 0 0 1 7 3h8a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-3 0V8.12l-7.44 7.44a1.5 1.5 0 0 1-2.12-2.12L11.38 6H7a1.5 1.5 0 0 1-1.5-1.5Z" />
    </svg>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
      {children}
    </li>
  );
}

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="rounded-md transition lg:group-hover/list:opacity-50 lg:group-focus-within/list:opacity-50 lg:hover:!opacity-100 lg:focus-within:!opacity-100">
      <a
        href={experience.href}
        className="group/card grid gap-2 rounded-md py-4 transition hover:bg-slate-800/50 hover:shadow-lg hover:shadow-slate-950/10 focus-visible:bg-slate-800/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 sm:grid-cols-[8rem_1fr] sm:gap-8 lg:-mx-6 lg:px-6"
        target="_blank"
        rel="noreferrer"
        aria-label={`${experience.role} at ${experience.company}`}
      >
        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
          {experience.period}
        </p>
        <div>
          <h3 className="font-medium leading-snug text-slate-200 transition-colors group-hover/card:text-teal-300 group-focus-visible/card:text-teal-300">
            {experience.role} · {experience.company}
            <ExternalArrow />
          </h3>
          <ul className="mt-3 space-y-2 text-sm leading-6">
            {experience.bullets.map((bullet) => (
              <li key={bullet}>
                <RichText text={bullet} />
              </li>
            ))}
          </ul>
          <ul
            className="mt-4 flex flex-wrap gap-2"
            aria-label="Technologies used"
          >
            {experience.technologies.map((technology) => (
              <Tag key={technology}>{technology}</Tag>
            ))}
          </ul>
        </div>
      </a>
    </article>
  );
}

function WritingCard({ entry }: { entry: Writing }) {
  return (
    <article className="rounded-md transition lg:group-hover/list:opacity-50 lg:group-focus-within/list:opacity-50 lg:hover:!opacity-100 lg:focus-within:!opacity-100">
      <a
        href={entry.href}
        className="group/card grid gap-2 rounded-md py-4 transition hover:bg-slate-800/50 hover:shadow-lg hover:shadow-slate-950/10 focus-visible:bg-slate-800/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 sm:grid-cols-[8rem_1fr] sm:gap-8 lg:-mx-6 lg:px-6"
        target="_blank"
        rel="noreferrer"
        aria-label={`${entry.title} article`}
      >
        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
          {entry.date}
        </p>
        <div>
          <p className="text-sm font-medium text-teal-300">
            {entry.publication}
          </p>
          <h3 className="mt-1 font-medium leading-snug text-slate-200 transition-colors group-hover/card:text-teal-300 group-focus-visible/card:text-teal-300">
            {entry.title}
            <ExternalArrow />
          </h3>
          <p className="mt-3 text-sm leading-6">
            <RichText text={entry.description} />
          </p>
        </div>
      </a>
    </article>
  );
}
