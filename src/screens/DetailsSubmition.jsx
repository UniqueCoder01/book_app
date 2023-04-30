import { Image, StyleSheet, Text, View } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import MainWrapper from "../components/MainWrapper";
import React, { useEffect, useState } from "react";
import { font, colors } from "../constant/GlobalcCss";
import { useStore } from "react-redux";
import Geolocation from '@react-native-community/geolocation';

const DetailsSubmition = () => {
    const [addressLine1, setAddressLine1] = useState("")
    const [addressLine2, setAddressLine2] = useState("")
    const [addressLine3, setAddressLine3] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zip, setZip] = useState(null)
    const onPress = () => { }
    const getLocation = () => Geolocation.getCurrentPosition(
        position => {
            const { latitude, longitude } = position.coords;
            // use the latitude and longitude values to retrieve the address
        },
        error => {
            console.log(error);
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    useEffect(() => {

        console.log(getLocation())

    }, [])

    return (
        <MainWrapper>
            <View style={styles.main_heading}>
                <Text style={styles.main_heading_title}>Fill your address</Text>
            </View>
            <View style={styles.form_container}>

                <View style={styles.form}>
                    <Input label="" value={addressLine1} setValue={setAddressLine1} placeholder="Address Line 1" keyboardType="default" backgroundColor={colors.light} color="rgba(60, 60, 67, 0.6)" />
                    <Input label="" value={addressLine2} setValue={setAddressLine2} placeholder="Address Line 2" keyboardType="default" backgroundColor={colors.light} color="rgba(60, 60, 67, 0.6)" />
                    <Input label="" value={addressLine3} setValue={setAddressLine3} placeholder="Address Line 3 (Optional)" keyboardType="default" backgroundColor={colors.light} color="rgba(60, 60, 67, 0.6)" />
                    <Input label="" value={city} setValue={setCity} placeholder="City" keyboardType="default" backgroundColor={colors.light} color="rgba(60, 60, 67, 0.6)" />
                    <Input label="" value={state} setValue={setState} placeholder="State" keyboardType="default" backgroundColor={colors.light} color="rgba(60, 60, 67, 0.6)" />
                    <Input label="" value={zip} setValue={setZip} placeholder="Zip Code" keyboardType="numeric" backgroundColor={colors.light} color="rgba(60, 60, 67, 0.6)" />
                    <View style={styles.pressButton}>
                        <Button onPress={onPress} buttonText="Check out" />
                    </View>
                </View>
            </View>
        </MainWrapper>
    );
};

export default DetailsSubmition;

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
    form_container: {
        // marginVertical: 40,
        marginTop: 80,
        width: "90%",
        left: '5%',
        right: '5%',
        zIndex: 2,
    },
    pressButton: {
        alignItems: "center",
        marginTop: 40,
        width: "90%"
    }
});
