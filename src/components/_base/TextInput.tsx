import { TextInput, StyleSheet, TextInputProps } from "react-native-web";
import React, { Component } from "react";

export interface CustomTextInputProps extends TextInputProps {}

export default class CustomTextInput extends Component<CustomTextInputProps> {
  render() {
    const { style, children } = this.props;

    return (
      <TextInput {...this.props} style={[styles.base, style]}>
        {children}
      </TextInput>
    );
  }
}

const styles = StyleSheet.create({
  base: {},
});
