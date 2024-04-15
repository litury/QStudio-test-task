import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';

const xml = `<svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.1644 29.6261C21.8056 29.4197 27.9265 26.5024 27.8357 23.1102C27.745 19.718 21.4769 17.1354 13.8357 17.3418C6.19445 17.5482 0.0735817 20.4655 0.164349 23.8577C0.255117 27.2499 6.52315 29.8325 14.1644 29.6261Z" fill="white"/>
<path d="M25.5012 13.9889C25.9041 11.2656 21.2591 8.31484 15.1264 7.39811C8.99356 6.48137 3.6953 7.94586 3.29235 10.6691C2.8894 13.3924 7.53435 16.3432 13.6671 17.2599C19.7999 18.1767 25.0982 16.7122 25.5012 13.9889Z" fill="white"/>
<path d="M14.7891 7.48365C19.3102 7.36147 22.9317 5.63668 22.8781 3.63122C22.8245 1.62575 19.1159 0.0990487 14.5949 0.221225C10.0738 0.343401 6.45224 2.06819 6.50588 4.07366C6.55952 6.07912 10.2681 7.60582 14.7891 7.48365Z" fill="white"/>
</svg>
`

const LogoHeader = () => {
    return (
        <View style={styles.container}>
            <SvgXml xml={xml} width="30" height="30" />
            <Text style={styles.text}>Calm</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 65,
        paddingHorizontal: 20,
        marginBottom: 70
    },
    text: {
        marginLeft: 10,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default LogoHeader;