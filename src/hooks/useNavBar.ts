/* import { useCallback, useState } from "react";
import {
  SharedValue,
  useSharedValue,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import MenuItem from "../types/MenuItems";

type Args = {
  menuItems: MenuItem[];
  scrollPosition: SharedValue<number>;
};

export default function useNavBar({ menuItems, scrollPosition }: Args) {
  const [focusedTab, setFocusedTab] = useState("Home");
  const rValue = useSharedValue(0);

  const getLayout = useCallback(() => {
    const hero = 0;
    const expertise = menuItems[1].layout.y - 250;
    const projects = menuItems[2].layout.y - 250;
    const contact = menuItems[3].layout.y - 250;

    if (contact === -250) return { focusedTab: "Home", animationValue: 0 };

    if (scrollPosition.value >= hero && scrollPosition.value <= expertise)
      return { focusedTab: "Home", animationValue: 0 };
    else if (
      scrollPosition.value > expertise &&
      scrollPosition.value <= projects
    )
      return { focusedTab: "Expertise", animationValue: 1 };
    else if (scrollPosition.value > projects && scrollPosition.value <= contact)
      return { focusedTab: "Projects", animationValue: 2 };
    else if (scrollPosition.value >= contact)
      return { focusedTab: "Contact", animationValue: 3 };
  }, [menuItems]);

  useDerivedValue(() => {
    scrollPosition.value;
    const result = getLayout();

    setFocusedTab(result?.focusedTab || "Home");
    rValue.value = withTiming(result?.animationValue || 0);
  }, [menuItems]);

  return { focusedTab, rValue };
} */

export default () => {};
