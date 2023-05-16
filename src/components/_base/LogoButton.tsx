import { Linking, StyleSheet } from "react-native-web";
import React from "react";
import {
  IoLogoGooglePlaystore as PlayStoreLogo,
  IoLogoFigma,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMail,
  IoWarning,
  IoLogoInstagram,
} from "react-icons/io5";
import { SiUpwork } from "react-icons/si";
import Button from "./Button";
import AnimatedOnScroll from "./AnimatedOnScroll";
import { MotionStyle } from "framer-motion";
import useColors from "@hooks/useColors";

type Name =
  | "play-store"
  | "figma"
  | "upwork"
  | "github"
  | "linkedin"
  | "instagram"
  | "twitter"
  | "gmail";

interface LogoButtonProps {
  item: { name: Name; link: string };
  size?: number;
  backgroundColor?: string;
  style?: MotionStyle;
  delay?: number;
}

export default function LogoButton({
  item,
  backgroundColor,
  size = 28,
  delay = 250,
  style,
}: LogoButtonProps) {
  const bgColor = useColors("primary");
  const defaultIconProps = { size, color: "#fff" };

  if (!item?.name) return <IoWarning {...defaultIconProps} />;

  return (
    <AnimatedOnScroll delay={delay} offset={-50}>
      <Button
        containerStyle={{ ...styles.container, ...style }}
        style={{
          ...styles.button,
          backgroundColor: backgroundColor || bgColor,
        }}
        onPress={() => Linking.openURL(item.link)}
      >
        {item.name === "play-store" ? (
          <PlayStoreLogo {...defaultIconProps} />
        ) : item.name === "gmail" ? (
          <IoMail {...defaultIconProps} />
        ) : item.name === "figma" ? (
          <IoLogoFigma {...defaultIconProps} />
        ) : item.name === "github" ? (
          <IoLogoGithub {...defaultIconProps} />
        ) : item.name === "instagram" ? (
          <IoLogoInstagram {...defaultIconProps} />
        ) : item.name === "twitter" ? (
          <IoLogoTwitter {...defaultIconProps} />
        ) : item.name === "linkedin" ? (
          <IoLogoLinkedin {...defaultIconProps} />
        ) : item.name === "upwork" ? (
          <SiUpwork {...defaultIconProps} />
        ) : (
          <IoWarning {...defaultIconProps} />
        )}
      </Button>
    </AnimatedOnScroll>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  text: {
    marginTop: 4,
    color: "white",
    fontWeight: "500",
    textAlign: "center",
  },
});
