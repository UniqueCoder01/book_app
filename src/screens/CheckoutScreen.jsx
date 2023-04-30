import { Image, StyleSheet, Text, View } from "react-native";
import MainWrapper from "../components/MainWrapper";
import React from "react";
import { font, colors } from "../constant/GlobalcCss";
import Button from "../components/Button";
import Icon from 'react-native-vector-icons/FontAwesome5';
// import Icon from 'react-native-vector-icons/dist/FontAwesome5';
const CheckoutScreen = () => {
    const onPress = () => { }
    return (
        <MainWrapper>
            <View style={styles.main_heading}>
                <Text style={styles.main_heading_title}>In-Cart Products</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.price_container}>
                    <Text style={styles.price_options}>Total Price</Text>
                    <Text style={styles.price_options}>$ 24.99</Text>
                </View>
                <View style={styles.pressButton}>
                    <Button onPress={onPress} buttonText="Check out" />
                </View>
                <View style={styles.quantity_wrap}>
                    <Image source={require("../assets/Book.png")} style={styles.book_image} />
                    <Text style={styles.book_name}>Alice's Adventures in Wonderland</Text>
                    <View style={styles.quantity_div}>
                        <Text style={styles.book_name}>Quantity</Text>
                        <View style={styles.quantity_icons}>
                            <Text style={styles.icons}>
                                <Icon name="minus-circle" color={colors.dark} solid size={30} />
                            </Text>
                            <View >
                                <Text style={styles.icons}>
                                    <Icon name="circle" light color={colors.dark} size={30} />

                                </Text>
                                <View style={styles.product_no}>
                                    <Text style={styles.product_count} >1</Text>
                                </View>
                            </View>
                            <Text style={styles.icons}>
                                <Icon name="plus-circle" solid color={colors.dark} size={30} />
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </MainWrapper>
    );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
    main_heading: {
        width: "90%",
        alignItems: "flex-end"
    },
    main_heading_title: {
        fontWeight: 700,
        fontSize: font.xl,
        color: colors.dark
    },
    container: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        paddingVertical: 20
    },
    price_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: "10%",
        paddingRight: "10%"
    },
    price_options: {
        color: colors.dark,
        fontWeight: "400",
        fontSize: font.medium
    },
    pressButton: {
        marginTop: 20,
        marginBottom: 40,
        paddingLeft: "10%",
        paddingRight: "10%"
    },
    quantity_wrap: {
        justifyContent: "center",
        alignItems: "center"
    },
    book_image: {
        width: 234,
        height: 220
    },
    book_name: {
        fontSize: font.small,
        fontWeight: "600",
        color: colors.dark
    },
    quantity_div: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 20,
        gap: 20
        // justifyContent:'space-between'
    },
    quantity_icons: {
        flexDirection: "row",
        justifyContent: 'space-between',
        gap: 4,
        alignItems: "center"
    },
    product_no: {
        position: 'absolute',
        color: 'red',
        zIndex: 99999,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 40,
        justifyContent: 'center',
        alignItems: "center",
    },
    product_count: {
        fontWeight: 600,
        fontSize: 20,
        color: colors.dark
    }
});
