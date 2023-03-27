// import Ionicons from "react-native-vector-icons/dist/Ionicons";
import { View, ViewStyle } from "react-native-web";
import React, { Component } from "react";

export interface IconProps {
  name: string;
  size: number;
  style?: ViewStyle;
  color?: string;
}

export default class Icon extends Component<IconProps> {
  render() {
    const { style, color } = this.props;
    return (
      <View
        style={{ width: 20, height: 20, backgroundColor: color, ...style }}
      />
    );

    // return <Ionicons {...this.props} color={color} style={style} />;
  }
}
