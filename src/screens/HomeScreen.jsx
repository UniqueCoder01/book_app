import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity, Alert, Pressable } from "react-native";
import React, { useEffect } from "react";
import MainWrapper from "../components/MainWrapper";
import { colors, font } from "../constant/GlobalcCss";
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from "../features/slices/cartSlice";

const books = [
    {
        id: 0,
        category: "Horror",
        price: "24.99$"
    },
    {
        id: 1,
        category: "Romance",
        price: "25.99$"
    },
    {
        id: 2,
        category: "Tragedy",
        price: "26.99$"
    },
    {
        id: 3,
        category: "Motivational",
        price: "27.99$"
    },
]

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const userName = useSelector(state => state.credentials.credentials)
    const onPress = (item) => {
        dispatch(addItem(item))
        navigation.navigate("Checkout")
    }
    const renderItem = ({ item }) => {
        // console.log(item)
        return (
            <View style={styles.book_wrap}>
                <Text style={styles.book_label}>{item.category}</Text>
                <Pressable onPress={() => onPress(item)}
                    android_ripple={{ color: colors.borderColor, borderless: true }}

                >
                    <Image source={require("../assets/Book.png")} />
                </Pressable>
            </View>
        )
        // console.log(item)
    }
    return (
        <MainWrapper>
            <View style={styles.container}>
                <View style={styles.title_text}>
                    <Text style={styles.welcome_text}>Welcome {userName[0]?.data.name}</Text>
                    <Image
                        source={require("../assets/cart.png")}
                    />
                </View>
                <Text style={styles.orderType}>Order online or get in store</Text>

            </View>
            <View style={styles.book_container}>
                <FlatList
                    data={books}
                    numColumns={2}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </MainWrapper>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginLeft: "auto",
        marginRight: "auto"
    },
    title_text: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    welcome_text: {
        color: colors.dark,
        fontSize: font.medium,
        fontWeight: "400",
        textAlign: "center"
    },
    orderType: {
        fontSize: font.xl,
        fontWeight: 700,
        color: colors.dark,
        marginTop: 40,
        width: "70%"
    },
    book_container: {
        flexWrap: 'wrap',
        marginTop: 200
        // borderWidth: 1
    },
    book_wrap: {
        width: "50%",
        // borderWidth: 1,
        justifyContent: "center",
        textAlign: "center",
        textAlignVertical: "center",
        alignItems: "center",
        marginBottom: 50
        // borderWidth: 1
    },
    book_label: {
        color: "#9A9A9D",
        fontWeight: "600",
        fontSize: font.small,
        lineHeight: 20,
        marginBottom: 30
    }
});
