import { ColorPallete, DARK } from "../config";

type Color = keyof ColorPallete;

export default function useColors(lightColor: Color, darkColor?: Color): Color {
  return DARK[darkColor || lightColor] || darkColor;
}
