import { TextProps, ViewStyle } from "react-native-web";
import React from "react";
import { Text, AnimatedOnScroll } from "@components/_base";

interface AnimatedTextProps extends TextProps {
  delay?: number;
  duration?: number;
  offset?: number;
  content?: string;
  containerStyle?: ViewStyle;
}

export default function AnimatedText({
  delay,
  duration,
  offset,
  style: textStyle,
  containerStyle,
  children,
  content,
}: AnimatedTextProps) {
  return (
    <AnimatedOnScroll
      containerStyle={containerStyle}
      delay={delay}
      duration={duration}
      offset={offset}
    >
      <Text style={[{ color: "#fff" }, textStyle]}>{children || content}</Text>
    </AnimatedOnScroll>
  );
}
