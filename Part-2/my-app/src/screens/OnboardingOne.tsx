import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function OnboardingOne() {
  return (
    <View style={styles.container}>
      <View style={styles.textBlock}>
        <Text style={[styles.text, styles.dimmedText]}>You have</Text>
        <Text style={styles.text}>millions of questions...</Text>
      </View>
      <View style={[styles.textBlock]}>
        <Text style={[styles.text, styles.dimmedText]}>We have</Text>
        <Text style={styles.text}>answers in the stars!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    color: "white",
    marginLeft: 20,
    gap: 60
  },
  textBlock: {
    maxWidth: 335,
  },
  text: {
    fontSize: 44,
    color: "white",
    fontWeight: "bold"
  },
  dimmedText: {
    opacity: 0.6,
  }
});
