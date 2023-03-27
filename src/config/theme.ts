import { ColorValue } from "react-native-web";

export interface ColorPallete {
  primary: string;
  secondary: string;
  accent: string;

  textPrimary: string;
  textSecondary: string;
  screenBackground: string;

  background: string;

  white: string;
  black: string;
}

export const LIGHT: ColorPallete = {
  primary: "",
  secondary: "",
  accent: "",
  textPrimary: "",
  textSecondary: "",
  screenBackground: "",
  background: "",
  white: "#fff",
  black: "#000",
};

export const DARK: ColorPallete = {
  primary: "#ff9317",
  secondary: "#BA6DFF",
  accent: "#00B5B2",
  textPrimary: "#fff",
  textSecondary: "",
  screenBackground: "#1a1a1c",
  background: "#252528",
  white: "#fff",
  black: "#000",
};
