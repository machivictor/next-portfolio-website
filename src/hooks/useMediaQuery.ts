import { useState, useEffect } from "react";
import { Dimensions } from "react-native-web";

export default function useMediaQuery() {
  const [dimensions, setDimensions] = useState(Dimensions.get("window"));

  useEffect(() => {
    const handleChange = () => setDimensions(Dimensions.get("window"));
    window.addEventListener("resize", handleChange);

    return () => {
      window.removeEventListener("resize", handleChange);
    };
  }, []);

  return { ...dimensions };
}
