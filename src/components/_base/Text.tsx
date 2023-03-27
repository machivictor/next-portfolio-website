import { Text, StyleSheet, TextProps } from "react-native-web";
import React from "react";
import { useColors } from "../../hooks";

export default function CustomText({ children, style, ...props }: TextProps) {
  const color = useColors("textPrimary");

  return (
    <Text style={[styles.text, { color }, style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Larsseit",
  },
});
