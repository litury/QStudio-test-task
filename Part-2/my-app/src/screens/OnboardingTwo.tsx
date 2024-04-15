import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function OnboardingOne() {
    return (
        <View style={styles.container}>
            <View style={styles.textBlock}>
                <Text style={[styles.text, styles.dimmedText]}>Love</Text>
                <Text style={styles.text}>
                    When will I meet my soulmate?
                    When will I get married?
                </Text>
                <Text style={[styles.text, styles.thinText]}>and others...</Text>
            </View>
            <View style={styles.textBlock}>
                <Text style={[styles.text, styles.dimmedText]}>Self</Text>
                <Text style={styles.text}>
                    What I am here to learn in life?
                    Am I on the right path?
                </Text>
                <Text style={[styles.text, styles.thinText]}>and others...</Text>
            </View>
            <View style={styles.textBlock}>
                <Text style={[styles.text, styles.dimmedText]}>Daily life</Text>
                <Text style={styles.text}>
                    What is going to happen next?
                    Any insight for today?
                </Text>
                <Text style={[styles.text, styles.thinText]}>and others...</Text>
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
        fontSize: 24,
        color: "white",
        fontWeight: "bold"
    },
    dimmedText: {
        opacity: 0.6,
        fontSize: 34,
    },
    thinText: {
        fontWeight: "normal"
    }
});