import { StyleSheet, View, ViewProps } from "react-native-web";
import React from "react";
import { DesktopProject, MobileProject } from "@components/app/Projects";
import { useMediaValues } from "@hooks/index";
import { SectionTitle } from "@components/app";
import { ProjectType } from "../../../../types";
import SectionReveal from "@components/_base/SectionReveal";

interface ProjectsProps extends ViewProps {}

interface ProjectProps extends ViewProps {
  item: ProjectType;
}

export default function Projects({
  onLayout,
  style,
  id,
  ...otherProps
}: ProjectsProps) {
  const titleMarginBottom = useMediaValues([{ break: 300, value: 80 }], 80);
  const projectMarginBottom = useMediaValues(
    [
      { break: 300, value: 100 },
      { break: 768, value: 125 },
    ],
    200
  );

  return (
    <SectionReveal id={id} delay={0.7}>
      <View
        onLayout={onLayout}
        style={[styles.container, style]}
        {...otherProps}
      >
        <SectionTitle
          heading="PROJECTS"
          subheading="Discover some apps I have built"
          style={[styles.sectionTitle, { marginBottom: titleMarginBottom }]}
        />
        <View style={styles.projectsContainer}>
          {PROJECTS.map((project, index) => {
            return (
              <Project
                key={project.title}
                item={project}
                style={
                  index !== PROJECTS.length - 1 && {
                    marginBottom: projectMarginBottom,
                  }
                }
              />
            );
          })}
        </View>
      </View>
    </SectionReveal>
  );
}

function Project(props: ProjectProps) {
  const isLargeScreen = useMediaValues(
    [{ break: 990, value: "false" }],
    "true"
  );

  return isLargeScreen === "true" ? (
    <DesktopProject {...props} />
  ) : (
    <MobileProject {...props} />
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 80,
  },
  sectionTitle: {
    marginBottom: 140,
  },
  projectsContainer: {
    width: "100%",
  },
});

const PROJECTS: ProjectType[] = [
  {
    title: "Smart Lessons",
    tagline: "Simplifying university timetables",
    description:
      "Inspired by my own experience as a university student, it features a user-friendly interface that allows students and lecturers to easily view and manage their schedules, find available classrooms, and communicate with each other.",
    links: [
      {
        type: "play-store",
        link: "https://play.google.com/store/apps/details?id=com.machivictor.DiT",
      },
    ],
    images: {
      banner: require("@assets/smart-lessons-banner.png"),
    },
    snapPoint: 1420,
    mobileSnapPoint: 2040,
    bgColor: "#BECCE8",
  },
  {
    title: "Kayo Children Home",
    tagline: "Connecting needy children with sponsors",
    description:
      "Sponsors can browse needy children in the orphanage and start sponsoring them. There is a public forum for discussions. I also integrated payment services allowing users to make donations directly via the app.",
    links: [
      {
        type: "figma",
        link: "https://www.figma.com/file/ai5HCMROMezoTi7kWrgxkC/Children-Home-App---UI-Design?node-id=301%3A3&t=qnPyp3ivUXzlrDvB-1",
      },
    ],
    images: {
      banner: require("@assets/children-home-banner.png"),
    },
    snapPoint: 2240,
    mobileSnapPoint: 2740,
    bgColor: "#c3b5c8",
  },
];
