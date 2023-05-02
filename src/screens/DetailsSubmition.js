import {Image, StyleSheet, Text, View} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import MainWrapper from '../components/MainWrapper';
import React, {useEffect, useState} from 'react';
import {font, colors} from '../constant/GlobalcCss';
import {useStore} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import {request, PERMISSIONS} from 'react-native-permissions';
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';
const DetailsSubmition = () => {
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [addressLine3, setAddressLine3] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState(null);
  const [currentLongitude, setCurrentLongitude] = useState('...');
  const [currentLatitude, setCurrentLatitude] = useState('...');
  const [locationStatus, setLocationStatus] = useState('');
  const onPress = () => {};
  const getLocation = () =>
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        // use the latitude and longitude values to retrieve the address
      },
      error => {
        console.log(error);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  // useEffect(() => {
  //   // console.log(getLocation());
  //   // console.log(request());
  //   // request().then(e => console.log(e));
  //   console.log();
  // }, []);

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        try {
          const granted = await request(
            PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        setLocationStatus('You are Here');
        const currentLongitude = JSON.stringify(position.coords.longitude);
        //getting the Longitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);
        //getting the Latitude from the location json
        setCurrentLongitude(currentLongitude);
        //Setting state Longitude to re re-render the Longitude Text
        setCurrentLatitude(currentLatitude);
        //Setting state Latitude to re re-render the Longitude Text
      },
      error => {
        setLocationStatus(error.message);
      },
      {enableHighAccuracy: false, timeout: 30000, maximumAge: 1000},
    );
  };

  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      position => {
        setLocationStatus('You are Here');
        //Will give you the location on location change
        console.log(position);
        const currentLongitude = JSON.stringify(position.coords.longitude);
        //getting the Longitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);
        //getting the Latitude from the location json
        setCurrentLongitude(currentLongitude);
        //Setting state Longitude to re re-render the Longitude Text
        setCurrentLatitude(currentLatitude);
        //Setting state Latitude to re re-render the Longitude Text
      },
      error => {
        setLocationStatus(error.message);
      },
      {enableHighAccuracy: false, maximumAge: 1000},
    );
  };
  return (
    <MainWrapper>
      <View style={styles.main_heading}>
        <Text style={styles.main_heading_title}>Fill your address</Text>
      </View>
      <View style={styles.form_container}>
        <View style={styles.form}>
          <Input
            label=""
            value={addressLine1}
            setValue={setAddressLine1}
            placeholder="Address Line 1"
            keyboardType="default"
            backgroundColor={colors.light}
            color="rgba(60, 60, 67, 0.6)"
            gap={responsiveScreenHeight(4)}
          />
          <Input
            label=""
            value={addressLine2}
            setValue={setAddressLine2}
            placeholder="Address Line 2"
            keyboardType="default"
            backgroundColor={colors.light}
            color="rgba(60, 60, 67, 0.6)"
            gap={responsiveScreenHeight(4)}
          />
          <Input
            label=""
            value={addressLine3}
            setValue={setAddressLine3}
            placeholder="Address Line 3 (Optional)"
            keyboardType="default"
            backgroundColor={colors.light}
            color="rgba(60, 60, 67, 0.6)"
            gap={responsiveScreenHeight(4)}
          />
          <Input
            label=""
            value={city}
            setValue={setCity}
            placeholder="City"
            keyboardType="default"
            backgroundColor={colors.light}
            color="rgba(60, 60, 67, 0.6)"
            gap={responsiveScreenHeight(4)}
          />
          <Input
            label=""
            value={state}
            setValue={setState}
            placeholder="State"
            keyboardType="default"
            backgroundColor={colors.light}
            color="rgba(60, 60, 67, 0.6)"
            gap={responsiveScreenHeight(4)}
          />
          <Input
            label=""
            value={zip}
            setValue={setZip}
            placeholder="Zip Code"
            keyboardType="numeric"
            backgroundColor={colors.light}
            color="rgba(60, 60, 67, 0.6)"
            gap={responsiveScreenHeight(4)}
          />
          <View style={styles.pressButton}>
            <Button onPress={onPress} buttonText="Next" icon />
          </View>
        </View>
      </View>
    </MainWrapper>
  );
};

export default DetailsSubmition;

const styles = StyleSheet.create({
  main_heading: {
    width: '90%',
    alignItems: 'flex-end',
    marginTop: responsiveScreenHeight(2),
  },
  main_heading_title: {
    fontWeight: 700,
    fontSize: font.xl,
    color: colors.dark,
  },
  form_container: {
    // marginVertical: 40,
    marginTop: responsiveScreenHeight(10),
    width: '90%',
    left: '5%',
    right: '5%',
    zIndex: 2,
  },
  pressButton: {
    alignItems: 'center',
    marginTop: 40,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
