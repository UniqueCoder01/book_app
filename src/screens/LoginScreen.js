import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  ImageBackground,
  Pressable,
  Alert,
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';
const LoginScreen = ({navigation}) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  // const data = useSelector(state => state.credentials.credentials);
  // console.log(data)
  const saveData = async () => {
    try {
      await AsyncStorage.setItem('userId', userId);
    } catch (err) {
      console.log(err);
    }
  };
  const onPress = async () => {
    if (!userId || !password) {
      Alert.alert('Fill Login Credentials');
      return;
    }
    await AsyncStorage.setItem('userId', userId);
    // saveData();
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
            label="UserID"
            value={userId}
            setValue={setUserId}
            placeholder="Enter Username"
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
          <View style={styles.reset_label}>
            <Text style={styles.reset_text}>Don’t have an account?</Text>
            <Pressable
              onPress={() => navigation.navigate('Register')}
              android_ripple={{color: colors.borderColor, borderless: true}}>
              <Text style={styles.register}>Register</Text>
            </Pressable>
          </View>
          <View style={styles.pressButton}>
            <Button onPress={onPress} buttonText="Login" icon />
          </View>
        </View>
        <Text style={styles.loginOptions}>Login with</Text>
      </View>

      <View style={styles.socialMediaOptions}>
        <Pressable onPress={() => {}}>
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

export default LoginScreen;

const styles = StyleSheet.create({
  main_heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  form_container: {
    // marginVertical: 40,
    marginTop: responsiveScreenHeight(3),
    width: '90%',
    left: '5%',
    right: '5%',
    zIndex: 2,
  },

  main_heading_title: {
    fontWeight: 700,
    fontSize: font.large,
    color: colors.dark,
    fontFamily: font.interBold,
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
    marginTop: 20,
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
    width: '30%',
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
    marginTop: responsiveScreenHeight(10),
    // marginTop: 150
  },
});
