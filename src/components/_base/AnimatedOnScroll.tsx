import React from "react";
import { View, ViewProps } from "react-native-web";

interface AnimatedOnScrollProps extends ViewProps {
  initialState?: keyof typeof boxVariant;
  toOpacity?: number;
  delay?: number;
  offset?: number;
  duration?: number;
  containerStyle?: ViewProps["style"];
  children?: React.ReactNode;
}

const boxVariant = {
  visible: { opacity: 1, translateY: 0 },
  hidden: { opacity: 0, translateY: 20 },
};

export default function AnimatedOnScroll({
  containerStyle,
  delay = 0,
  offset = 0,
  duration,
  children,
}: AnimatedOnScrollProps) {
  return (
    <div
      data-aos="fade-up-cubic"
      data-aos-duration={duration}
      data-aos-easing="fade-up-cubic"
      data-aos-offset={120 + offset}
      data-aos-delay={delay}
    >
      <View style={containerStyle}>{children}</View>
    </div>
  );
}
