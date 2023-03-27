import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  ViewProps,
  View,
  ViewStyle,
} from "react-native-web";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

import { Button, Text } from "@components/_base";
import { useColors, useMediaValues, useMediaQuery } from "@hooks/index";
import { Tabs } from "../../../../types";

type MenuItem = {
  id: number;
  title: Tabs;
};

interface NavBarProps extends ViewProps {
  menuItems: MenuItem[];
  onScrollTo: (tab: Tabs) => void;
}

interface ButtonProps {
  onPress: () => void;
  style?: ViewStyle;
}

interface MenuButtonProps {
  title: string;
  isFocused: boolean;
  onPress: () => void;
  style?: ViewStyle;
}

const animationProps = {
  initial: { opacity: 0, translateY: 10 },
  animate: { opacity: 1, translateY: 0 },
  transition: { duration: 0.3 },
};

export default React.memo(function MobileNavBar(props: NavBarProps) {
  const { width } = useMediaQuery();
  const [menuVisible, setMenuVisible] = React.useState(false);
  const [menuLayout, setMenuLayout] = React.useState({ width: 0, height: 0 });
  const [logoHeight, setLogoHeight] = React.useState(0);
  const backgroundColor = useColors("background");
  const primaryColor = useColors("primary");

  const logoFont = useMediaValues([{ break: 480, value: 24 }], 30);

  function handleOpen() {
    setMenuVisible(true);
  }

  function handleDismiss() {
    setMenuVisible(false);
  }

  return (
    <>
      <View style={[styles.container, { backgroundColor }, props.style]}>
        <motion.div
          {...animationProps}
          transition={{
            ...animationProps.transition,
            duration: 0.7,
            delay: 0.2,
          }}
        >
          <View style={styles.motionContainer}>
            <Text
              onLayout={(e) => setLogoHeight(e.nativeEvent.layout.height)}
              style={[styles.logo, { color: primaryColor, fontSize: logoFont }]}
            >
              Machi
            </Text>
            <HamburgerButton
              maxHeight={logoHeight}
              onPress={() => {
                handleOpen();
              }}
            />
          </View>
        </motion.div>
      </View>
      <AnimatePresence>
        {menuVisible && (
          <TouchableWithoutFeedback
            onPressIn={() => handleDismiss()}
            onPress={() => handleDismiss()}
          >
            <motion.div
              initial={{ backgroundColor: "rgba(0,0,0,0)" }}
              animate={{ backgroundColor: "rgba(0,0,0,0.8)" }}
              exit={{ backgroundColor: "rgba(0,0,0,0)" }}
              transition={{ duration: 0.25, ease: "easeInOut", type: "tween" }}
              style={styles.translucentBg}
            >
              <motion.div
                initial={{ translateX: menuLayout.width }}
                animate={{ translateX: 0 }}
                exit={{ translateX: menuLayout.width }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  type: "tween",
                }}
                style={{
                  alignSelf: "flex-end",
                  position: "absolute",
                  right: 0,
                }}
              >
                <TouchableWithoutFeedback>
                  <View style={[styles.menuContainer, { backgroundColor }]}>
                    <MenuContent
                      onLayout={(e) => setMenuLayout(e.nativeEvent.layout)}
                      visible={menuVisible}
                      onClose={() => {
                        handleDismiss();
                      }}
                      {...props}
                    />
                  </View>
                </TouchableWithoutFeedback>
              </motion.div>
            </motion.div>
          </TouchableWithoutFeedback>
        )}
      </AnimatePresence>
    </>
  );
});

interface MenuContentProps extends NavBarProps {
  visible: boolean;
  onClose: () => void;
}

function MenuContent({
  menuItems,
  onLayout,
  onScrollTo,
  onClose,
}: MenuContentProps) {
  const primaryColor = useColors("primary");
  const backgroundColor = useColors("screenBackground");

  return (
    <View onLayout={onLayout} style={[styles.menuContent, { backgroundColor }]}>
      <CloseButton style={styles.closeButton} onPress={onClose} />
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}
      >
        {menuItems.map((item) => {
          return (
            <MenuButton
              key={item.id.toString()}
              title={item.title}
              onPress={() => {
                onClose();
                onScrollTo(item.title);
              }}
              isFocused={false}
            />
          );
        })}
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
      </ScrollView>
    </View>
  );
}

function MenuButton({ title, onPress, isFocused, style }: MenuButtonProps) {
  return (
    <Pressable onPress={onPress} style={[styles.buttonContainer, style]}>
      <Text style={[styles.menuTitle]}>{title}</Text>
    </Pressable>
  );
}

function HamburgerButton({
  onPress,
  style,
  maxHeight,
}: { maxHeight: number } & ButtonProps) {
  return maxHeight !== 0 ? (
    <View>
      <Pressable
        onPress={onPress}
        style={[
          styles.menuButtonContainer,
          { maxHeight, minHeight: maxHeight },
          style,
        ]}
      >
        <View style={[styles.line, { width: 36 }]} />
        <View style={[styles.line, { width: 25 }]} />
        <View style={styles.line} />
      </Pressable>
    </View>
  ) : (
    <></>
  );
}

function CloseButton({ onPress, style }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.menuButtonContainer, { top: 10 }, style]}
    >
      <IoMdClose size={36} color="#fff" />
      {/* <Icon name="close" color="#fff" size={44} /> */}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 44,
  },
  motionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  scrollViewContainer: {
    padding: 32,
    justifyContent: "center",
    // alignItems: "center",
    flex: 1,
  },
  logo: {
    letterSpacing: 1,
    fontWeight: "bold",
  },
  translucentBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "red",
    alignItems: "flex-end",
    zIndex: 99,
  },
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomLeftRadius: 12,
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Larsseit",
    textAlign: "right",
  },
  resumeButtonContainer: {
    marginTop: 24,
    marginBottom: 24,
    backgroundColor: "transparent",
    borderWidth: 2,
  },
  resumeButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  resumeButtonText: {
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: 0,
  },
  buttonContainer: {
    marginTop: 24,
    marginBottom: 24,
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
  menuButtonContainer: {
    paddingVertical: 4,
    zIndex: 9999,
    justifyContent: "space-between",
  },
  line: {
    backgroundColor: "#fff",
    width: 14,
    height: 2,
    borderRadius: 8,
    alignSelf: "flex-end",
  },
  menuContentContainer: {
    flex: 1,
    alignItems: "flex-end",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  menuContent: {
    flex: 1,
    borderBottomLeftRadius: 12,
  },
  closeButton: {
    alignSelf: "flex-end",
    marginVertical: 8,
    marginRight: 32,
  },
});
