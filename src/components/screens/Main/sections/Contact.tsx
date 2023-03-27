import { Linking, StyleSheet, View, ViewProps } from "react-native-web";
import React from "react";
import { SectionTitle } from "../../../../components/app";
import { CTAButton, Text } from "../../../../components/_base";
import { useColors, useMediaValues } from "../../../../hooks";
import { URL } from "url";
import { Social } from "@components/app/contact";

interface ContactProps extends ViewProps {}

const SOCIALS = [
  { name: "machivictordev@gmail.com", link: "mailto:machivictordev@gmail.com" },
  { name: "linkedin", link: "https://linkedin.com/machivictor" },
  { name: "Dribbble", link: "https://dribbble.com/machivictor" },
  { name: "Behance", link: "https://behance.com/machivictor" },
];

export default function Contact({ onLayout, style }: ContactProps) {
  const accentColor = useColors("accent");
  const primaryColor = useColors("primary");

  const flexDirection = useMediaValues<"row" | "column">(
    [{ break: 940, value: "column" }],
    "row"
  );
  const alignItems = useMediaValues<"center" | "flex-start">(
    [{ break: 940, value: "flex-start" }],
    "center"
  );
  const fontSize = useMediaValues<number>(
    [
      { break: 300, value: 22 },
      { break: 370, value: 24 },
      { break: 585, value: 32 },
      { break: 770, value: 40 },
    ],
    43
  );
  const iconSize = useMediaValues<number>(
    [
      { break: 300, value: 24 },
      { break: 370, value: 28 },
      { break: 585, value: 32 },
      { break: 770, value: 36 },
    ],
    40
  );
  const careerGoalFont = useMediaValues<number>(
    [
      { break: 300, value: 13 },
      { break: 370, value: 16 },
      { break: 585, value: 16 },
      { break: 650, value: 18 },
    ],
    20
  );
  const careerGoalWidth = useMediaValues(
    [{ break: 770, value: "100%" }],
    "50%"
  );
  const footerFont = useMediaValues<number>(
    [
      { break: 300, value: 13 },
      { break: 370, value: 15 },
      { break: 585, value: 16 },
      { break: 770, value: 17 },
    ],
    18
  );

  const openURL = (url: string) => Linking.openURL(url);

  return (
    <View onLayout={onLayout} style={[styles.container, style]}>
      <SectionTitle
        heading="Contact me"
        subheading="Let's work together"
        style={styles.sectionTitle}
      />
      <Text
        style={[
          styles.careerGoal,
          {
            fontSize: careerGoalFont,
            lineHeight: careerGoalFont * 1.8,
            width: careerGoalWidth,
          },
        ]}
      >
        {CAREER_GOAL}
      </Text>
      <View style={[styles.buttonsContainer, { flexDirection, alignItems }]}>
        <CTAButton
          title="Write to me"
          onPress={() => Linking.openURL("mailto:machivictordev@gmail.com")}
          textStyle={{ fontSize }}
          lineColor={primaryColor}
          iconSize={iconSize}
          style={flexDirection === "column" ? { marginBottom: 28 } : {}}
        />
        {flexDirection === "row" && (
          <Text style={[styles.orText, { color: primaryColor }]}>or</Text>
        )}
        <CTAButton
          title="Setup a call with me"
          onPress={() =>
            Linking.openURL(
              "mailto:machivictordev@gmail.com?subject=Setup a call"
            )
          }
          textStyle={{ fontSize }}
          iconSize={iconSize}
          lineColor={primaryColor}
        />
      </View>
      <View style={[styles.footer, { flexDirection }]}>
        <Text
          style={[
            styles.footerText,
            {
              color: accentColor,
              fontSize: footerFont,
              lineHeight: footerFont * 1.6,
            },
            flexDirection === "column" && {
              marginBottom: 14,
            },
          ]}
        >
          Designed and built by Machi Victor
        </Text>
        {/* {SOCIALS.map((social) => {
          return <Social name={social.name} link={social.link} />;
        })} */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  sectionTitle: {
    marginBottom: 16,
  },
  careerGoal: {
    fontSize: 18,
    marginBottom: 60,
    fontWeight: "300",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginBottom: 60,
  },
  orText: {
    fontSize: 48,
    marginLeft: 24,
    marginRight: 24 + 20,
    opacity: 0.3,
  },
  footer: {
    flexDirection: "row",
  },
  footerText: {
    marginRight: 60,
    fontSize: 18,
    letterSpacing: 0.5,
    fontWeight: "300",
  },
});

const CAREER_GOAL =
  "I can offer dedication and enthusiasm to a position at your company";
