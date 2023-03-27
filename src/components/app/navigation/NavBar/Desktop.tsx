import { StyleSheet, View, ViewStyle } from "react-native-web";
import React from "react";
import { motion } from "framer-motion";
import { Button, PressableText, Text } from "@components/_base";
import { useColors } from "@hooks/index";
import { Tabs } from "../../../../types";

type MenuItem = {
  id: number;
  title: Tabs;
};

interface NavBarProps {
  menuItems: MenuItem[];
  onScrollTo: (tab: Tabs) => void;
  style?: ViewStyle;
}

interface MenuButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  delay?: number;
}

const animationProps = {
  initial: { opacity: 0, translateY: 10 },
  animate: { opacity: 1, translateY: 0 },
  transition: { duration: 0.3 },
};

export default React.memo(function NavBar({
  menuItems,
  onScrollTo,
  style,
}: NavBarProps) {
  const backgroundColor = useColors("background");
  const primaryColor = useColors("primary");

  return (
    <View style={[styles.container, { backgroundColor }, style]}>
      <motion.div
        {...animationProps}
        transition={{ ...animationProps.transition, duration: 0.7 }}
      >
        <Text style={[styles.logo, { color: primaryColor }]}>Machi</Text>
      </motion.div>
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => {
          return (
            <MenuButton
              key={item.id.toString()}
              title={item.title}
              onPress={() => onScrollTo(item.title)}
              delay={index * 0.1}
            />
          );
        })}
        <motion.div
          {...animationProps}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Button
            title="Resume"
            onPress={() => {}}
            containerStyle={{
              ...styles.resumeButtonContainer,
              borderColor: primaryColor,
            }}
            textStyle={{ ...styles.resumeButtonText, color: primaryColor }}
            style={styles.resumeButton}
          />
        </motion.div>
      </View>
    </View>
  );
});

function MenuButton({ title, onPress, delay = 0, style }: MenuButtonProps) {
  const textPrimary = useColors("textPrimary");

  return (
    <motion.div {...animationProps} transition={{ duration: 0.3, delay }}>
      <PressableText
        onPress={onPress}
        containerStyle={{ ...styles.buttonContainer, ...style }}
        style={styles.menuTitle}
        color={textPrimary}
      >
        {title}
      </PressableText>
    </motion.div>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 44,
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontSize: 24,
    letterSpacing: 0.5,
    fontWeight: "bold",
  },
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuTitle: {
    fontSize: 17,
    fontWeight: "500",
    fontFamily: "Larsseit",
  },
  resumeButtonContainer: {
    marginLeft: 52,
    backgroundColor: "transparent",
    borderWidth: 2,
  },
  resumeButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  resumeButtonText: {
    fontSize: 15,
    fontWeight: "500",
    letterSpacing: 0,
  },
  buttonContainer: {
    marginLeft: 52,
  },
  button: {
    padding: 12,
    backgroundColor: "transparent",
  },
  indicator: {
    width: "100%",
    borderRadius: 8,
    height: 2,
    top: 6,
  },
});
