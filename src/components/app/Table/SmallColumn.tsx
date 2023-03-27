import React from "react";
import { StyleSheet, View } from "react-native-web";
import { useColors, useMediaValues } from "@hooks/index";
import { AnimatedOnScroll, AnimatedText, Label, Text } from "@components/_base";

type ColumnData = {
  title: string;
  description: string;
  tags: string[];
};

interface ColumnProps {
  data: ColumnData;
  color?: string;
}

export default function SmallColumn({ data, color }: ColumnProps) {
  const primaryColor = useColors("primary");

  const descriptionFont = useMediaValues<number>(
    [
      { break: 370, value: 15 },
      { break: 585, value: 16 },
      { break: 650, value: 17 },
    ],
    18
  );

  return (
    <View style={[styles.column, { borderColor: primaryColor }]}>
      <Text style={{ ...styles.title, color }}>{data.title}</Text>
      <AnimatedText
        content={data.description}
        style={{
          ...styles.description,
          fontSize: descriptionFont,
          lineHeight: descriptionFont * 1.8,
        }}
      />
      <AnimatedOnScroll delay={100} containerStyle={styles.tagsContainer}>
        {data.tags.map((tag, index) => {
          return (
            <Label
              key={tag}
              delay={index * 50}
              title={tag}
              color={color}
              style={styles.label}
            />
          );
        })}
      </AnimatedOnScroll>
    </View>
  );
}

const styles = StyleSheet.create({
  column: {
    padding: 16,
    paddingBottom: 12,
    borderWidth: 2,
    borderRadius: 12,
    marginBottom: 24,
  },
  col: {},
  title: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 20,
    fontFamily: "Larsseit",
  },
  description: {
    fontSize: 18,
    lineHeight: 27,
    opacity: 0.9,
    marginBottom: 32,
    fontFamily: "Larsseit",
    fontWeight: "300",
    maxWidth: 600,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    maxWidth: 600,
  },
  label: {
    marginRight: 16,
    marginBottom: 20,
  },
});
