import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import LogoHeader from "./src/components/LogoHeader/LogoHeader";
import OnboardingOne from "./src/screens/OnboardingOne";
import OnboardingTwo from "./src/screens/OnboardingTwo";
import OnboardingThree from "./src/screens/OnboardingThree";

export default function App() {
  return (
    <LinearGradient colors={["#6B73FF", "#000DFF"]} style={styles.container}>
      <StatusBar style="light" />
      <View>
        <LogoHeader />
        <OnboardingThree />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    color: "white",
  },
});
