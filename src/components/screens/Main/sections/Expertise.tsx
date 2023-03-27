import { StyleSheet, View, ViewProps } from "react-native-web";
import React from "react";
import { SectionTitle } from "../../../../components/app";
import ExpertiseTable from "../../../../components/app/Table";

interface ExpertiseProps extends ViewProps {}

export default function Expertise({ id, onLayout, style }: ExpertiseProps) {
  return (
    <div id={id}>
      <View onLayout={onLayout} style={[styles.container, style]}>
        <SectionTitle
          heading="Expertise"
          subheading="Learn more about my skills"
        />
        <ExpertiseTable />
      </View>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  heading: {
    fontSize: 48,
    fontWeight: "500",
    marginBottom: 32,
  },
});
