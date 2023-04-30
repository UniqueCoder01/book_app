import { TouchableOpacity, StyleSheet, Text, Pressable } from "react-native";
import React from "react";
import { colors, font } from "../constant/GlobalcCss";
import Icon from 'react-native-vector-icons/FontAwesome5';
const Button = ({ onPress, buttonText, icon }) => {
    return (
        <TouchableOpacity style={[styles.button, icon && {
            flexDirection: "row",
            gap: 10
        }]}
            onPress={onPress}
            // android_ripple={colors.rippleColor}
            activeOpacity={0.5}
        >
            <Text style={styles.buttonText}>{buttonText}</Text>
            {

                icon && <Text>
                    <Icon name="arrow-right" color={colors.light} light size={20} />
                </Text>
            }
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.inputBackgroundColor,
        paddingVertical: 16,
        paddingHorizontal: 18,
        elevation: 4, // for Android
        shadowColor: '#421169', // for iOS
        shadowOffset: { width: 2, height: 4 }, // for iOS
        shadowOpacity: 0.25, // for iOS
        shadowRadius: 16, // for iOS,
        borderRadius: 16,
        width: "100%",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    buttonText: {
        color: colors.buttonColor,
        textAlign: "center",
        fontSize: font.medium,
        fontFamily: font.interBold,
        fontWeight: '400'
    }
})
export default Button;
