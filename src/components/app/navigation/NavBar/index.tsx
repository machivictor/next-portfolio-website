import React from "react";
import { ViewStyle } from "react-native-web";
import { useMediaValues } from "@hooks/index";
import { Tabs } from "../../../../types";

import DesktopNavBar from "./Desktop";
import MobileNavBar from "./Mobile";

type MenuItem = {
  id: number;
  title: Tabs;
};

interface NavBarProps {
  menuItems: MenuItem[];
  onScrollTo: (tab: Tabs) => void;
  style?: ViewStyle;
}

const LARGE_SCREENS = ["desktop", "tablet"];

export default function NavBar(props: NavBarProps) {
  const device = useMediaValues(
    [
      { break: 480, value: "mobile" },
      { break: 768, value: "mobileLandScape" },
      { break: 1024, value: "tablet" },
    ],
    "desktop"
  );

  return LARGE_SCREENS.includes(device) ? (
    <DesktopNavBar {...props} />
  ) : (
    <MobileNavBar {...props} />
  );
}
