import { ViewStyle, View, StyleSheet } from "react-native-web";
import React from "react";
import { LogoButton } from "@components/_base";
import useColors from "@hooks/useColors";

interface SocialsProps {
  style?: ViewStyle;
}

export default function Socials({ style }: SocialsProps) {
  const backgroundColor = useColors("top");

  return (
    <View style={[styles.container, style]}>
      {SOCIALS.map((social: any, index) => (
        <LogoButton
          size={22}
          backgroundColor={backgroundColor}
          delay={index * 50}
          item={social}
          style={index !== SOCIALS.length - 1 ? styles.logoButton : {}}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  logoButton: {
    marginRight: 20,
  },
});

const SOCIALS = [
  { name: "gmail", link: "mailto:machivictordev@gmail.com" },
  { name: "linkedin", link: "https://www.linkedin.com/in/victor-machi/" },
  {
    name: "upwork",
    link: "https://www.upwork.com/freelancers/~01e4855cb3ed5c669c",
  },
  { name: "twitter", link: "https://twitter.com/machi_victor/" },
  { name: "instagram", link: "https://www.instagram.com/machi_victor/" },
];
