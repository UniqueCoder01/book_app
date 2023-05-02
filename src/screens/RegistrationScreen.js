import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  StatusBar,
  ImageBackground,
  Pressable,
  Linking,
} from 'react-native';
import React, {Component, useState} from 'react';
import bagOutline from '../assets/Bag-Outline.png';
import fb from '../assets/fb.png';
import google from '../assets/google.png';
import insta from '../assets/insta.png';
import Button from '../components/Button';
import Input from '../components/Input';
import {colors, font} from '../constant/GlobalcCss';
import MainWrapper from '../components/MainWrapper';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {addUser} from '../features/slices/credentialsSlice';
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';
const RegistrationScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');
  // const dispatch = useDispatch();
  const saveData = async () => {
    try {
      await AsyncStorage.setItem('userId', userName);
    } catch (err) {
      console.log(err);
    }
  };
  const onPress = () => {
    if (!userId || !password || !userName) {
      Alert.alert('Fill Login Credentials');
      return;
    }
    saveData();
    navigation.replace('Home');
  };
  return (
    <MainWrapper>
      <View style={styles.main_heading}>
        <View style={styles.imageWrapper}>
          <Image source={bagOutline} style={styles.image} />
        </View>
        <Text style={styles.main_heading_title}>Read It</Text>
      </View>
      <View style={styles.form_container}>
        <View style={styles.form}>
          <Input
            label="Username"
            value={userName}
            setValue={setUserName}
            placeholder="Enter Name"
            keyboardType="default"
            gap={responsiveScreenHeight(3)}
          />
          <Input
            label="Password"
            value={password}
            setValue={setPassword}
            placeholder="Enter Password"
            keyboardType="numeric"
            gap={responsiveScreenHeight(3)}
          />
          <Input
            label="Email"
            value={userId}
            setValue={setUserId}
            placeholder="Enter Email"
            keyboardType="email-address"
            gap={responsiveScreenHeight(3)}
          />
          <View style={styles.reset_label}>
            <Text style={styles.reset_text}>Have an Account?</Text>
            <Pressable
              onPress={() => navigation.navigate('Login')}
              android_ripple={{color: colors.borderColor, borderless: true}}>
              <Text style={styles.register}>Login</Text>
            </Pressable>
          </View>
          <View style={styles.pressButton}>
            <Button onPress={onPress} buttonText="Register" icon />
          </View>
        </View>
        <Text style={styles.loginOptions}>Register Using</Text>
      </View>

      <View style={styles.socialMediaOptions}>
        <Pressable
          onPress={() => {
            Linking.openURL('https://www.google.com/');
          }}>
          <Image source={google} />
        </Pressable>
        <Pressable onPress={() => {}}>
          <Image source={fb} />
        </Pressable>
        <Pressable onPress={() => {}}>
          <Image source={insta} />
        </Pressable>
      </View>
    </MainWrapper>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  main_heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  form_container: {
    // marginVertical: 40,
    marginTop: responsiveScreenHeight(2),
    width: '90%',
    left: '5%',
    right: '5%',
    zIndex: 2,
  },

  main_heading_title: {
    fontWeight: 700,
    fontSize: font.large,
    color: colors.dark,
  },
  imageWrapper: {
    // flex: 1,
    width: 70,
    // height: 84,
    borderWidth: 1.5,
    borderColor: colors.borderColor,
    borderStyle: 'solid',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  reset_label: {
    // marginBottom: 20,
    marginTop: responsiveScreenHeight(3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  reset_text: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 18,
    color: colors.dark,
  },
  register: {
    fontWeight: '400',
    fontSize: font.medium,
    color: colors.dark,
  },
  pressButton: {
    alignItems: 'center',
    marginTop: responsiveScreenHeight(3),
    width: '40%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  loginOptions: {
    marginTop: responsiveScreenHeight(3),
    textAlign: 'center',
    fontWeight: '400',
    fontSize: font.medium,
    color: colors.dark,
  },
  socialMediaOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: responsiveScreenHeight(4),
    // marginTop: 150
  },
});
