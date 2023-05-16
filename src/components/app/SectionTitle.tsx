import { StyleSheet, View, ViewProps } from "react-native-web";
import React from "react";
import { Text } from "../_base";
import { useColors, useMediaValues } from "../../hooks";

interface SectionTitleProps extends ViewProps {
  heading: string;
  subheading: string;
}

export default function SectionTitle({
  heading,
  subheading,
  style,
}: SectionTitleProps) {
  const primaryColor = useColors("primary");
  const headingFontSize = useMediaValues<number>(
    [
      { break: 370, value: 14 },
      { break: 585, value: 16 },
      { break: 650, value: 18 },
    ],
    18
  );

  const subHeadingFontSize = useMediaValues<number>(
    [
      { break: 370, value: 32 },
      { break: 585, value: 36 },
      { break: 650, value: 40 },
      { break: 1020, value: 44 },
    ],
    46
  );

  return (
    <View style={[styles.container, style]}>
      <Text
        style={[
          styles.heading,
          { fontSize: headingFontSize, color: primaryColor },
        ]}
      >
        {heading}
      </Text>
      <Text
        style={[
          styles.subheading,
          {
            fontSize: subHeadingFontSize,
            lineHeight: subHeadingFontSize * 1.45,
          },
        ]}
      >
        {subheading}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 80,
  },
  heading: {
    fontSize: 18,
    letterSpacing: 3,
    marginBottom: 18,
    textTransform: "uppercase",
  },
  subheading: {
    fontSize: 46,
    letterSpacing: -0.5,
    fontWeight: "500",
  },
});
