import { ColorPallete, DARK } from "../config";

type Color = keyof ColorPallete;

export default function useColors(color: Color) {
  return DARK[color] || color;
}
