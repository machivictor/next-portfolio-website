import { StyleSheet, View, ViewProps } from "react-native-web";
import Image from "next/image";
import React from "react";
import { useColors, useMediaValues } from "@hooks/index";
import { AnimatedText, LogoButton } from "@components/_base";
import { ProjectType } from "../../../types";

interface DesktopProjectProps extends ViewProps {
  item: ProjectType;
}

interface AnimatedBannerProps {
  images: ProjectType["images"];
  style?: ViewProps["style"];
}

export default function DesktopProject({ item, style }: DesktopProjectProps) {
  const { title, tagline, description } = item;

  const accentColor = useColors("accent");
  const textPrimary = useColors("textPrimary");

  const taglineFont = useMediaValues<number>([{ break: 630, value: 26 }], 36);
  const descriptionFont = useMediaValues<number>(
    [{ break: 1024, value: 16 }],
    18
  );
  const contentMaxWidth = useMediaValues<number>(
    [
      { break: 1024, value: 350 },
      { break: 1200, value: 400 },
    ],
    450
  );

  return (
    <View style={[styles.projectContainer, { flexDirection: "row" }, style]}>
      <View
        style={[
          styles.contentContainer,
          {
            width: "100%",
            maxWidth: contentMaxWidth,
          },
        ]}
      >
        <AnimatedText
          content={title}
          offset={-70}
          style={{
            ...styles.projectTitle,
            fontSize: descriptionFont - 1,
            lineHeight: descriptionFont * 1.7,
            color: accentColor,
          }}
        />
        <AnimatedText
          content={tagline}
          delay={100}
          style={{
            ...styles.projectTagline,
            fontSize: taglineFont,
            marginVertical: 24,
            lineHeight: taglineFont * 1.3,
            color: textPrimary,
          }}
        />
        <AnimatedText
          content={description}
          delay={200}
          style={{
            ...styles.projectDescription,
            fontSize: descriptionFont,
            lineHeight: descriptionFont * 1.8,
            color: textPrimary,
            marginBottom: 32,
          }}
        />
        <View style={styles.buttonsContainer}>
          {item.links.map((prop, index) => {
            return (
              <LogoButton
                key={prop.type}
                item={{ name: prop.type, link: prop.link }}
                style={index !== item.links.length - 1 ? styles.logoButton : {}}
              />
            );
          })}
        </View>
      </View>
      <View style={[styles.imageContainer, { backgroundColor: item.bgColor }]}>
        <AnimatedBanner images={item.images} />
      </View>
    </View>
  );
}

function AnimatedBanner({ style, images }: AnimatedBannerProps) {
  const imageDimensions = useMediaValues(
    [
      { break: 780, value: { width: "80%", height: 350 } },
      { break: 1280, value: { width: "100%", height: 470 } },
    ],
    { width: "100%", height: 450 }
  );

  return (
    <View
      style={[
        style,
        {
          ...imageDimensions,
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        },
      ]}
    >
      <Image
        alt=""
        src={images.banner}
        style={{ objectFit: "cover", ...imageDimensions }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  projectContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 90,
    width: "100%",
  },
  contentContainer: {},
  imageContainer: {
    flex: 1,
    width: "100%",
    alignItems: "flex-end",
  },
  projectTitle: {
    fontSize: 17,
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: 1,
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
    marginRight: 16,
  },
});
