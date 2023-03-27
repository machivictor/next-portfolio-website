import { useState, useEffect } from "react";
import useMediaQuery from "./useMediaQuery";

interface Point<T> {
  break: number;
  value: T;
}

export default function useMediaValues<T>(points: Point<T>[], fallback: T): T {
  const { width } = useMediaQuery();
  const [value, setValue] = useState<Point<T>["value"]>(points[0].value);

  useEffect(() => {
    const value = calculateValue();
    if (value) setValue(value);
    else setValue(fallback);
  }, [width]);

  function calculateValue() {
    let value;
    points.forEach((point, index) => {
      if (index === 0) {
        if (width <= point.break) value = point.value;
      } else if (width > points[index - 1].break && width <= point.break) {
        value = point.value;
      }
    });

    return value;
  }

  return value;
}
