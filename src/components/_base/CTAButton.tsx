import { StyleSheet, View, Pressable, TextStyle } from "react-native-web";
import React from "react";
import { useColors } from "../../hooks";
import Text from "./Text";
import { motion, MotionStyle } from "framer-motion";
import { BiArrowBack } from "react-icons/bi";

interface CTAButtonProps {
  title: string;
  textStyle?: TextStyle;
  lineColor?: string;
  iconSize?: number;
  style?: MotionStyle;
  onPress: () => void;
}

const iconVariants = {
  initial: { x: 10, opacity: 0.2 },
  whileActive: { x: 30, opacity: 1 },
};

const lineVariants = {
  initial: { opacity: 0.4 },
  whileActive: { opacity: 1 },
};

export default function CTAButton({
  title,
  onPress,
  iconSize = 40,
  style,
  textStyle,
  lineColor = "#fff",
  ...otherProps
}: CTAButtonProps) {
  const whiteColor = useColors("white");

  return (
    <Pressable onPress={onPress} {...otherProps}>
      <motion.div
        whileFocus="whileActive"
        whileHover="whileActive"
        whileTap="whileActive"
        style={style}
      >
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Text style={[styles.buttonText, { color: whiteColor }, textStyle]}>
              {title}
            </Text>
            <motion.div
              initial={{ x: 10, opacity: 0.4 }}
              transition={{ duration: 0.4 }}
              variants={iconVariants}
            >
              <BiArrowBack
                color={lineColor}
                size={iconSize - 3}
                style={{ rotate: "180deg" }}
              />
            </motion.div>
          </View>
        </View>
        <motion.div
          initial={{ opacity: 0.4 }}
          transition={{ duration: 0.4 }}
          variants={lineVariants}
          style={{ ...styles.line, backgroundColor: lineColor }}
        />
      </motion.div>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 30,
  },
  buttonText: {
    fontSize: 40,
    fontWeight: "400",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    width: "100%",
    height: 4,
    borderRadius: 8,
    marginTop: 6,
  },
});
