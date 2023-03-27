import {
  ColorValue,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from "react-native-web";
import React from "react";
import {
  IoLogoGooglePlaystore,
  IoLogoFigma,
  IoLogoAppleAppstore,
  IoLogoGithub,
} from "react-icons/io5";
import Button from "./Button";
import AnimatedOnScroll from "./AnimatedOnScroll";
import Text from "./Text";

interface LogoButtonProps extends ViewProps {
  name: "play-store" | "figma" | "github" | "app-store";
  color: ColorValue;
  style?: ViewStyle;
  delay?: number;
  onPress: () => void;
}

export default function LogoButton({
  name,
  delay = 250,
  color,
  onPress,
  style,
}: LogoButtonProps) {
  return (
    <AnimatedOnScroll delay={delay}>
      <Button
        containerStyle={{ ...styles.container, ...style }}
        style={{ ...styles.button, backgroundColor: color }}
        onPress={onPress}
      >
        {name === "play-store" && (
          <IoLogoGooglePlaystore size={24} color={"white"} />
        )}
        {name === "figma" && <IoLogoFigma size={24} color={"white"} />}
        {name === "github" && <IoLogoGithub size={24} color={"white"} />}
        {name === "app-store" && (
          <IoLogoAppleAppstore size={24} color={"white"} />
        )}
        <Text style={{ marginTop: 8 }}>
          {name === "play-store"
            ? "PlayStore"
            : name === "figma"
            ? "Figma"
            : name === "github"
            ? "GitHub"
            : "AppStore"}
        </Text>
      </Button>
    </AnimatedOnScroll>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
});
