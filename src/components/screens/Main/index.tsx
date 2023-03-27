import { ScrollView, StyleSheet, View } from "react-native-web";
import React from "react";
import { NavBar } from "@components/app/navigation";
import { Tabs } from "../../../types";

import {
  HeroSection,
  ExpertiseSection,
  ProjectsSection,
  ContactCTA,
  ContactSection,
} from "./sections";
import { useColors, useScrollTo, useMediaValues } from "@hooks/index";

interface MainPageProps {}

// Loading screen should contain name in it

const menuItems: { id: number; title: Tabs }[] = [
  { id: 1, title: "Home" },
  { id: 2, title: "Expertise" },
  { id: 3, title: "Projects" },
  { id: 4, title: "Contact" },
];

export default function MainPage({}: MainPageProps) {
  const scrollTo = useScrollTo();
  const sectionMarginBottom = useMediaValues(
    [
      { break: 480, value: 180 },
      { break: 768, value: 200 },
    ],
    250
  );
  const paddingHorizontal = useMediaValues(
    [
      { break: 380, value: 24 },
      { break: 420, value: 36 },
    ],
    48
  );

  const backgroundColor = useColors("screenBackground");

  const handleScrollTo = (tab: Tabs) => {
    scrollTo(tab, -80);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <NavBar
        menuItems={menuItems}
        onScrollTo={handleScrollTo}
        style={{ paddingHorizontal }}
      />
      <View
        style={[
          {
            paddingHorizontal,
            alignSelf: "center",
            maxWidth: 1280,
            width: "100%",
          },
        ]}
      >
        <HeroSection
          id="Home"
          style={[styles.heroSection, { marginBottom: sectionMarginBottom }]}
        />
        <ExpertiseSection
          id="Expertise"
          style={[
            styles.expertiseSection,
            { marginBottom: sectionMarginBottom },
          ]}
        />
        <ProjectsSection
          id="Projects"
          style={[
            styles.projectsSection,
            { marginBottom: sectionMarginBottom },
          ]}
        />
        <ContactCTA
          style={{
            ...styles.contactCTA,
            padding: paddingHorizontal,
            marginBottom: sectionMarginBottom,
          }}
        />
        <div id="Contact">
          <ContactSection style={{ ...styles.contactSection }} />
        </div>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heroSection: {
    marginTop: 60,
    maxWidth: 1280,
  },
  expertiseSection: {
    maxWidth: 1280,
  },
  projectsSection: {
    maxWidth: 1280,
  },
  contactCTA: {
    maxWidth: 1280,
  },
  contactSection: {
    paddingBottom: 80,
    maxWidth: 1280,
  },
});
