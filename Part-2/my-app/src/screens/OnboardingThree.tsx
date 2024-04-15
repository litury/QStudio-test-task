import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function OnboardingOne() {
    return (
        <View style={styles.container}>
            <View style={styles.textBlock}>
                <Text style={[styles.text, styles.dimmedText]}>How it works</Text>
            </View>
            <View style={styles.textBlock}>
                <Text style={[styles.text]}>Share birth details</Text>
            </View>
            <View style={styles.textBlock}>
                <Text style={[styles.text]}>Ask a question</Text>
            </View>
            <View style={styles.textBlock}>
                <Text style={[styles.text]}>An astrologer will make a prediction</Text>
            </View>
            <View style={styles.textBlock}>
                <Text style={[styles.text]}>Get your answer</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        color: "white",
        marginLeft: 20,
        gap: 40
    },
    textBlock: {
        maxWidth: 345,
    },
    text: {
        fontSize: 36,
        color: "white",
        fontWeight: "bold"
    },
    dimmedText: {
        opacity: 0.6,
        fontSize: 44,
    },
    thinText: {
        fontWeight: "normal"
    }
});