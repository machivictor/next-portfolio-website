import { StyleSheet, Pressable, Linking, ViewStyle } from "react-native-web";
import React from "react";
import { IoLogoDribbble, IoLogoBehance, IoLogoLinkedin } from "react-icons/io5";
import { Text } from "@components/_base";

type Name = "machivictordev@gmail.com" | "dribbble" | "behance" | "linkedin";

interface SocialProps {
  name: string;
  link: string;
  style?: ViewStyle;
}

export default function Social({ name, link, style }: SocialProps) {
  return (
    <Pressable
      onPress={() => Linking.openURL(link)}
      style={[styles.container, style]}
    >
      {name === "behance" && <IoLogoBehance />}
      {name === "dribbble" && <IoLogoDribbble />}
      {name === "linkedin" && <IoLogoLinkedin />}
      {name === "machivictordev@gmail.com" && <Text>{name}</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {},
});
