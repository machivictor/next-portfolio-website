import { StyleSheet, View, ViewProps } from "react-native-web";
import React from "react";
import { SectionTitle } from "../../../app";
import ExpertiseTable from "../../../app/Table";
import SectionReveal from "@components/_base/SectionReveal";

interface ExpertiseProps extends ViewProps {}

export default function Expertise({ id, onLayout, style }: ExpertiseProps) {
  return (
    <SectionReveal id={id} delay={0.6}>
      <View onLayout={onLayout} style={[styles.container, style]}>
        <SectionTitle
          heading="Expertise"
          subheading="Learn more about my skills"
        />
        <ExpertiseTable />
      </View>
    </SectionReveal>
  );
}

const styles = StyleSheet.create({
  container: {},
  heading: {
    fontSize: 48,
    fontWeight: "500",
    marginBottom: 32,
  },
});
