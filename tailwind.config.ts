import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [],
  theme: {
    colors: {
      sky: "#00B5B2",
      indigo: "#c98eff",
      amber: "#F3A12C",
      black: "#000",
      white: "#fff",
      typocolor: {
        900: "#fff",
        800: "#EDF1FF",
        700: "#CCD6F6",
      },
      gray: {
        900: "#0F0F0F",
        800: "#171717",
        700: "#222222",
        600: "#282828",
      },
    },
    fontFamily: {
      heading: ["Preahvihear", ...defaultTheme.fontFamily.sans],
      default: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
    container: {
      center: true,
    },
  },
};
export default config;
