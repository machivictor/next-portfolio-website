import {
  Linking,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from "react-native-web";
import Image from "next/image";
import React from "react";
import { useColors, useMediaValues } from "@hooks/index";
import { AnimatedText, LogoButton } from "@components/_base";
import { ProjectType } from "../../../types";

interface MobileProjectProps extends ViewProps {
  item: ProjectType;
}

interface AnimatedBannerProps {
  images: ProjectType["images"];
  style?: ViewStyle;
  width: number;
}

export default function MobileProject({ item, style }: MobileProjectProps) {
  const [contentWidth, setContentWidth] = React.useState<number>(0);
  const { title, tagline, description } = item;

  const accentColor = useColors("accent");
  const textPrimary = useColors("textPrimary");

  const titleFont = useMediaValues<number>(
    [
      { break: 300, value: 14 },
      { break: 370, value: 15 },
      { break: 585, value: 16 },
    ],
    17
  );

  const taglineFont = useMediaValues<number>(
    [
      { break: 370, value: 30 },
      { break: 585, value: 32 },
    ],
    40
  );
  const descriptionFont = useMediaValues<number>(
    [
      { break: 300, value: 14 },
      { break: 370, value: 15 },
      { break: 585, value: 16 },
      { break: 650, value: 18 },
    ],
    18
  );
  const taglineMarginVertical = useMediaValues<number>(
    [
      { break: 370, value: 12 },
      { break: 585, value: 12 },
      { break: 650, value: 16 },
    ],
    20
  );

  return (
    <View
      style={[
        styles.projectContainer,
        { flexDirection: "column-reverse", alignItems: "center" },
        style,
      ]}
    >
      <View
        onLayout={(e) => setContentWidth(e.nativeEvent.layout.width)}
        style={{ maxWidth: 600, width: "100%" }}
      >
        <AnimatedText
          content={title}
          style={{
            ...styles.projectTitle,
            fontSize: titleFont,
            lineHeight: titleFont * 1.5,
            color: accentColor,
          }}
        />
        <AnimatedText
          delay={100}
          content={tagline}
          style={{
            ...styles.projectTagline,
            fontSize: taglineFont,
            lineHeight: taglineFont * 1.35,
            color: textPrimary,
          }}
          containerStyle={{ marginVertical: taglineMarginVertical }}
        />
        <AnimatedText
          delay={200}
          content={description}
          style={{
            ...styles.projectDescription,
            fontSize: descriptionFont,
            lineHeight: descriptionFont * 1.8,
            color: textPrimary,
            marginBottom: taglineMarginVertical + 12,
          }}
        />
        <View style={styles.buttonsContainer}>
          {item.links.map((prop, index) => {
            return (
              <View
                style={index !== item.links.length - 1 ? styles.logoButton : {}}
              >
                <LogoButton
                  key={prop.type}
                  item={{ name: prop.type, link: prop.link }}
                  style={
                    index !== item.links.length - 1 ? styles.logoButton : {}
                  }
                />
              </View>
            );
          })}
        </View>
      </View>
      <View style={styles.imageContainer}>
        <AnimatedBanner images={item.images} width={contentWidth} />
      </View>
    </View>
  );
}

function AnimatedBanner({ style, images, width }: AnimatedBannerProps) {
  return (
    <View
      style={[
        style,
        {
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          width,
          height: width / 1.33,
          maxWidth: 600,
        },
      ]}
    >
      <Image
        alt=""
        src={images.banner}
        style={{
          objectFit: "none",
          backgroundColor: styles.bannerImage.backgroundColor,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  projectContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageContainer: {
    flex: 1,
    marginBottom: 40,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: -0.1,
    fontFamily: "Larsseit",
  },
  projectTagline: {
    fontFamily: "Larsseit",
    fontSize: 40,
    lineHeight: 40 * 1.3,
    fontWeight: "700",
  },
  projectDescription: {
    fontSize: 17,
    lineHeight: 18 * 1.6,
    opacity: 0.95,
    fontWeight: "300",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  logoButton: {
    marginRight: 28,
  },
  bannerImage: {
    backgroundColor: "#BECCE8",
    alignSelf: "flex-end",
  },
  portraitImage: {
    position: "absolute",
  },
});
