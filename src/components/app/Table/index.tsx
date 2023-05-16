import { StyleSheet, View, ViewStyle } from "react-native-web";
import React from "react";

import { useColors, useMediaValues } from "../../../hooks";
import LargeColumn from "./LargeColumn";
import SmallColumn from "./SmallColumn";

type ColumnData = {
  title: string;
  description: string;
  tags: string[];
};

interface ExpertiseTableProps {}

interface ColumnProps {
  data: ColumnData;
  color?: string;
  style?: ViewStyle;
}

export default function ExpertiseTable({}: ExpertiseTableProps) {
  const primaryColor = useColors("primary");
  const secondaryColor = useColors("accent");
  const accentColor = useColors("secondary");
  const flexDirection = useMediaValues<"row" | "column">(
    [{ break: 990, value: "column" }],
    "row"
  );
  const isLargeScreen = useMediaValues<"true" | "false">(
    [{ break: 990, value: "false" }],
    "true"
  );

  return (
    <View style={[styles.container, { flexDirection }]}>
      <Column
        data={TABLE_DATA[0]}
        color={secondaryColor}
        style={styles.col1}
        isLargeScreen={isLargeScreen}
      />
      <Column
        data={TABLE_DATA[1]}
        color={primaryColor}
        isLargeScreen={isLargeScreen}
      />
      <Column
        data={TABLE_DATA[2]}
        color={accentColor}
        style={styles.col3}
        isLargeScreen={isLargeScreen}
      />
    </View>
  );
}

function Column(props: { isLargeScreen: "true" | "false" } & ColumnProps) {
  return props.isLargeScreen === "true" ? (
    <LargeColumn {...props} />
  ) : (
    <SmallColumn {...props} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 12,
  },
  col1: {
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  col3: {
    borderRightWidth: 2,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
});

const TABLE_DATA: ColumnData[] = [
  {
    title: "UI/UX",
    description: "I have a keen eye for design and great attention to detail.",
    tags: ["Adobe photoshop", "Figma"],
  },
  {
    title: "Front-end",
    description:
      "I am particularly passionate about building performant cross-platform apps and responsive websites.",
    tags: [
      "Javascript",
      "Typescript",
      "HTML5",
      "Vue.js",
      "React.js",
      "React Native",
      "Expo",
      "Next.js",
    ],
  },
  {
    title: "Back-end",
    description: "I can build robust APIs and manage servers on the cloud.",
    tags: ["Amazon Web Services", "REST", "GraphQL", "Node.js", "SQL", "NoSQL"],
  },
];
