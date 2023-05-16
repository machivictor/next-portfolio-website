import { Pressable, StyleSheet, Keyboard } from "react-native-web";
import type { PressableProps, ViewStyle } from "react-native-web";
import React from "react";
import { motion, MotionStyle } from "framer-motion";
import { useColors } from "../../hooks";

interface ButtonProps extends PressableProps {
  title?: string;
  onPress: () => void;
  textColor?: string;
  textStyle?: any;
  containerStyle?: MotionStyle;
  style?: ViewStyle;
}

const buttonVariants = {
  hovered: { backgroundColor: "#fff" },
  tapped: { scale: 0.95 },
};

const textVariants = {
  hovered: { color: "#000" },
};

export default function Button({
  title,
  onPress,
  disabled,
  textStyle,
  textColor = "#fff",
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
      variants={buttonVariants}
      whileHover="hovered"
      whileTap="tapped"
      whileFocus="hovered"
      style={{
        ...styles.container,
        backgroundColor: primaryColor,
        border: "none",
        outline: "none",
        ...containerStyle,
      }}
    >
      <Pressable
        onPress={handlePress}
        style={[styles.button, style]}
        {...otherProps}
      >
        {children ? (
          children
        ) : (
          <motion.div variants={textVariants} style={{ color: textColor }}>
            <p style={{ ...styles.text, ...textStyle }}>{title}</p>
          </motion.div>
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
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 0.5,
    textShadowColor: "rgba(0,0,0,0.2)",
    textShadowRadius: 10,
    textShadowOffset: { height: 3, width: 3 },
  },
});
