import React from "react";
import { ViewStyle, StyleSheet, View } from "react-native-web";
import { useColors } from "@hooks/index";
import { AnimatedOnScroll, AnimatedText, Text, Label } from "@components/_base";

type ColumnData = {
  title: string;
  description: string;
  tags: string[];
};

interface ColumnProps {
  data: ColumnData;
  color?: string;
  style?: ViewStyle;
}

export default function LargeColumn({ data, color, style }: ColumnProps) {
  const primaryColor = useColors("primary");
  const textPrimary = useColors("textPrimary");

  return (
    <View style={[styles.column, { borderColor: primaryColor }, style]}>
      <Text style={{ ...styles.title, color }}>{data.title}</Text>
      <AnimatedText
        content={data.description}
        style={{ ...styles.description, color: textPrimary }}
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
    flex: 1,
    padding: 16,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
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
  title: {
    fontSize: 26,
    fontWeight: "600",
    marginBottom: 20,
    fontFamily: "Larsseit",
  },
  description: {
    fontSize: 16,
    lineHeight: 27,
    opacity: 0.9,
    marginBottom: 32,
    fontFamily: "Larsseit",
    fontWeight: "300",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  label: {
    marginRight: 16,
    marginBottom: 20,
  },
});
