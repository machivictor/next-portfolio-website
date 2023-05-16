import { ImageProps } from "next/image";
import { ColorValue } from "react-native-web";

type URL = "play-store" | "github" | "figma";

export interface ProjectImages {
  portrait?: string | keyof ImageProps["src"];
  banner: string | keyof ImageProps["src"];
  icon?: string | keyof ImageProps["src"];
}

export default interface Project {
  title: string;
  tagline: string;
  description: string;
  images: ProjectImages;
  snapPoint: number;
  mobileSnapPoint: number;
  bgColor: ColorValue;
  links: { type: URL; link: string }[];
}
