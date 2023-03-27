import { Pressable, StyleSheet, ViewStyle } from "react-native-web";
import React from "react";
import { motion, MotionStyle } from "framer-motion";
import { useColors } from "@hooks/index";

interface PressableTextProps {
  onPress: () => void;
  containerStyle?: ViewStyle;
  color: string;
  style?: MotionStyle;
  children?: React.ReactNode;
}

export default function PressableText({
  style,
  children,
  onPress,
  containerStyle,
  color,
}: PressableTextProps) {
  const [width, setWidth] = React.useState(0);
  const primaryColor = useColors("primary");

  return (
    <Pressable
      onLayout={(e) => setWidth(e.nativeEvent.layout.width)}
      onPress={onPress}
      style={containerStyle}
    >
      <motion.span
        whileHover="focused"
        whileTap="focused"
        whileFocus="focused"
        style={styles.container}
      >
        <motion.p
          initial={{ color }}
          variants={{
            focused: { color: primaryColor },
            blurred: { color },
          }}
          style={{ ...style, paddingBottom: 5 }}
        >
          {children}
        </motion.p>
        <motion.div
          style={{ backgroundColor: primaryColor, height: 2 }}
          initial={{ width: 0 }}
          variants={{
            focused: { width },
            blurred: { width: 0 },
          }}
        />
      </motion.span>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
  },
});
