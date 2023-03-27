import { StyleSheet, View, ViewProps } from "react-native-web";
import React from "react";

import { AnimatedOnScroll, Text } from "@components/_base";
import { useColors, useMediaValues } from "../../hooks";

interface LabelProps extends ViewProps {
  title: string;
  color?: string;
  delay?: number;
}

export default function Label({
  title,
  delay = 100,
  color,
  style,
}: LabelProps) {
  const primaryColor = useColors("primary");
  const fontSize = useMediaValues([{ break: 768, value: 14.5 }], 16);

  return (
    <AnimatedOnScroll
      containerStyle={[
        styles.container,
        style,
        { borderColor: color ? color : primaryColor },
      ]}
      delay={delay}
    >
      {/* <View> */}
      <Text
        style={[
          styles.title,
          { color: color ? color : primaryColor, fontSize },
        ]}
      >
        {title}
      </Text>
      {/* </View> */}
    </AnimatedOnScroll>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  title: {
    fontWeight: "500",
    fontSize: 15,
  },
});
