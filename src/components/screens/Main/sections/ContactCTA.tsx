import { StyleSheet, View, ViewStyle, Linking } from "react-native-web";
import React from "react";
import { CTAButton, Text } from "@components/_base";
import { useColors, useMediaQuery, useMediaValues } from "@hooks/index";

interface ContactCTAProps {
  style?: ViewStyle;
}

export default function ContactCTA({ style }: ContactCTAProps) {
  const primaryColor = useColors("primary");
  const { width } = useMediaQuery();
  const flexDirection = useMediaValues<"row" | "column">(
    [{ break: 770, value: "column" }],
    "row"
  );
  const alignItems = useMediaValues<"center" | "flex-start">(
    [{ break: 770, value: "flex-start" }],
    "center"
  );

  const fontSize = useMediaValues<number>(
    [
      { break: 300, value: 22 },
      { break: 370, value: 24 },
      { break: 585, value: 28 },
      { break: 770, value: 36 },
      { break: 1200, value: 28 },
    ],
    43
  );
  const borderRadius = useMediaValues<number>(
    [
      { break: 300, value: 16 },
      { break: 370, value: 20 },
      { break: 585, value: 28 },
      { break: 770, value: 36 },
    ],
    48
  );

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection,
          backgroundColor: primaryColor,
          borderRadius,
          alignItems,
        },
        style,
      ]}
    >
      <Text
        style={[
          styles.mainText,
          {
            fontSize,
            lineHeight: width <= 768 ? fontSize * 1.4 : fontSize * 1.7,
          },
          width <= 768 && { marginBottom: 32 },
        ]}
      >
        Have an app idea you need help with?
      </Text>
      <CTAButton
        title="Let's talk!"
        onPress={() => Linking.openURL("mailto:machivictordev@gmail.com")}
        textStyle={{ fontSize: fontSize + 4, fontWeight: "bold" }}
        lineColor="#fff"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainText: {
    fontWeight: "500",
    letterSpacing: -0.7,
  },
});
