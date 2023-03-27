import {
  Linking,
  StyleSheet,
  View,
  TextStyle,
  ViewProps,
  ViewStyle,
} from "react-native-web";
import Image from "next/image";
import React from "react";
import { Button, Text } from "@components/_base";
import { useColors, useMediaValues } from "@hooks/index";
import { motion } from "framer-motion";

interface HeroProps extends ViewProps {}

const LARGE_SCREENS = ["desktop", "tablet"];

export default function Hero({ id, onLayout, style }: HeroProps) {
  const primaryColor = useColors("primary");

  const device = useMediaValues(
    [
      { break: 750, value: "mobile" },
      { break: 990, value: "mobileLandScape" },
      { break: 1070, value: "tablet" },
    ],
    "desktop"
  );
  const contentContainerWidth = useMediaValues(
    [
      { break: 750, value: "100%" },
      { break: 990, value: "80%" },
    ],
    "58%"
  );
  const introFontSize = useMediaValues<number>(
    [
      { break: 370, value: 36 },
      { break: 585, value: 40 },
      { break: 650, value: 44 },
      { break: 1020, value: 46 },
    ],
    48
  );
  const greetingFontSize = useMediaValues<number>(
    [
      { break: 300, value: 14 },
      { break: 370, value: 15 },
      { break: 585, value: 16 },
      { break: 650, value: 18 },
    ],
    18
  );

  const bioFontSize = useMediaValues<number>(
    [
      { break: 300, value: 14 },
      { break: 370, value: 15 },
      { break: 585, value: 16 },
      { break: 650, value: 17 },
    ],
    18
  );

  return (
    <div id={id}>
      <View onLayout={onLayout} style={[styles.container, style]}>
        <View
          style={[
            styles.contentContainer,
            {
              width: contentContainerWidth,
            },
          ]}
        >
          <AnimatedText
            delay={0.2}
            style={{
              ...styles.greeting,
              color: primaryColor,
              fontSize: greetingFontSize,
            }}
          >
            {GREETING}
          </AnimatedText>
          <AnimatedText
            delay={0.2}
            style={{ ...styles.name, fontSize: introFontSize }}
          >
            {NAME}
          </AnimatedText>
          <AnimatedText
            toOpacity={0.9}
            delay={0.3}
            style={{
              ...styles.intro,
              fontSize: introFontSize,
            }}
          >
            {INTRO}
          </AnimatedText>
          <AnimatedText
            delay={0.4}
            style={{
              ...styles.bio,
              fontSize: bioFontSize,
              lineHeight: bioFontSize * 1.8,
            }}
          >
            {BIO_1}
            <Text
              onPress={() => Linking.openURL("https://reactnative.dev")}
              style={{ color: "#ffa43b" }}
            >
              React Native.
            </Text>
            {BIO_2}
          </AnimatedText>
          <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{}}
          >
            <Button
              onPress={() => Linking.openURL("mailto:machivictordev@gmail.com")}
              title="Let's work together"
            />
          </motion.div>
        </View>
        {LARGE_SCREENS.includes(device) && (
          <View
            style={[
              device === "desktop"
                ? styles.desktopImageContainer
                : device === "tablet"
                ? styles.tabletImageContainer
                : device === "mobileLandscape"
                ? styles.mobileLandscapeImageContainer
                : {},
              { backgroundColor: "#ffa43b" },
            ]}
          >
            <motion.div
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                alt="Avatar"
                src={require("@assets/dev.png")}
                style={{
                  objectFit: "cover",
                  ...(device === "desktop"
                    ? styles.desktopImage
                    : device === "tablet"
                    ? styles.tabletImage
                    : device === "mobileLandscape"
                    ? styles.mobileLandscapeImage
                    : {}),
                }}
              />
            </motion.div>
          </View>
        )}
      </View>
    </div>
  );
}

interface AnimatedTextProps {
  delay?: number;
  style: TextStyle;
  children: React.ReactNode;
  toOpacity?: number;
  containerStyle?: ViewStyle;
}

function AnimatedText({
  toOpacity = 1,
  delay = 0,
  style,
  containerStyle,
  children,
}: AnimatedTextProps) {
  const textPrimary = useColors("textPrimary");

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: toOpacity, translateY: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <View style={containerStyle}>
        <Text style={[{ fontFamily: "Larsseit", color: textPrimary }, style]}>
          {children}
        </Text>
      </View>
    </motion.div>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentContainer: {
    width: "58%",
  },
  greeting: {
    fontSize: 18,
    letterSpacing: 2,
    marginBottom: 24,
    textTransform: "uppercase",
  },
  name: {
    fontSize: 46,
    fontWeight: "bold",
    letterSpacing: 1,
    lineHeight: 52,
    marginBottom: 4,
  },
  intro: {
    fontSize: 46,
    fontWeight: "bold",
    opacity: 0.7,
    marginBottom: 40,
  },
  bio: {
    fontSize: 18,
    marginBottom: 54,
    fontWeight: "300",
  },
  desktopImageContainer: {
    width: 380,
    height: 380,
    borderRadius: 380 / 2,
    overflow: "hidden",
  },
  tabletImageContainer: {
    width: 300,
    height: 300,
    borderRadius: 300 / 2,
    overflow: "hidden",
  },
  mobileLandscapeImageContainer: {
    width: 250,
    height: 250,
    borderRadius: 250 / 2,
    overflow: "hidden",
  },
  desktopImage: {
    width: 380,
    height: 380,
    borderRadius: 380 / 2,
  },
  tabletImage: {
    width: 300,
    height: 300,
    borderRadius: 300 / 2,
  },
  mobileLandscapeImage: {
    width: 250,
    height: 250,
    borderRadius: 250 / 2,
  },
});

const GREETING = "Hi, my name is";
const NAME = "Machi Victor.";
const INTRO = "I am a software engineer.";
const BIO_1 =
  "I specialize in designing and building delightful mobile experiences using ";
const BIO_2 =
  " I am currently in university finalizing my bachelor's degree in Information Technology and I am available for new opportunities.";
