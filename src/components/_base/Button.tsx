import {
  Pressable,
  StyleSheet,
  Keyboard,
  PressableProps,
  TextStyle,
  ViewStyle,
} from "react-native-web";
import React from "react";
import { motion, MotionStyle } from "framer-motion";

import Text from "./Text";
import { useColors } from "../../hooks";

interface ButtonProps extends PressableProps {
  title?: string;
  onPress: () => void;
  textStyle?: TextStyle;
  containerStyle?: MotionStyle;
  style?: ViewStyle;
}

export default function Button({
  title,
  onPress,
  disabled,
  textStyle,
  containerStyle,
  style,
  children,
  ...otherProps
}: ButtonProps) {
  const primaryColor = useColors("primary");

  function handlePress() {
    Keyboard.dismiss();
    onPress();
  }

  return (
    <motion.button
      initial={{ opacity: 1 }}
      whileHover={{ opacity: 0.7 }}
      whileTap={{ opacity: 0.7 }}
      whileFocus={{ opacity: 0.7 }}
      style={{
        ...styles.container,
        backgroundColor: primaryColor,
        ...containerStyle,
      }}
    >
      <Pressable
        onPress={handlePress}
        android_ripple={{
          color: otherProps.android_ripple?.color || "transparent",
        }}
        disabled={disabled}
        style={[styles.button, style]}
        {...otherProps}
      >
        {children ? (
          children
        ) : (
          <Text
            allowFontScaling={false}
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[styles.text, textStyle]}
          >
            {title}
          </Text>
        )}
      </Pressable>
    </motion.button>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: "hidden",
    flexDirection: "row",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 32,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 0.5,
    textShadowColor: "rgba(0,0,0,0.2)",
    textShadowRadius: 10,
    textShadowOffset: { height: 3, width: 3 },
  },
});
