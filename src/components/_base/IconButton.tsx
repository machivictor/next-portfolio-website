import { StyleSheet, ViewStyle, PressableProps } from "react-native-web";
import React from "react";
// import Ionicons from "react-native-vector-icons/dist/Ionicons";

import Button from "./Button";
import Icon from "./Icon";
import { LIGHT } from "../../config";

export interface IconButtonProps extends PressableProps {
  name: string;
  size: number;
  onPress: () => void;
  containerStyle?: ViewStyle;
  buttonStyle?: ViewStyle;
  color?: string;
}

export default class IconButton extends React.Component<IconButtonProps> {
  render() {
    const { onPress, containerStyle, buttonStyle, name, size, color } =
      this.props;

    return (
      <Button
        onPress={onPress}
        containerStyle={containerStyle}
        style={buttonStyle}
      >
        <Icon name={name} size={size} color={color} />
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: "hidden",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 19,
  },
  spinner: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: LIGHT.white,
    borderTopColor: LIGHT.primary,
  },
  text: {
    fontFamily: "Larsseit-Medium",
    color: LIGHT.white,
    fontSize: 20,
  },
});
