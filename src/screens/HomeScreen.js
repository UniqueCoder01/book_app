import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MainWrapper from '../components/MainWrapper';
import {colors, font} from '../constant/GlobalcCss';
import {useSelector, useDispatch, useStore} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {addItem} from '../features/slices/cartSlice';
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';

const books = [
  {
    id: 0,
    category: 'Horror',
    name: 'react',
    price: 24.99,
  },
  {
    id: 1,
    category: 'Romance',
    name: 'angular',
    price: 25.99,
  },
  {
    id: 2,
    category: 'Tragedy',
    name: 'java',
    price: 26.99,
  },
  {
    id: 3,
    category: 'Motivational',
    name: 'python',
    price: 27.99,
  },
];

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  // const userName = useSelector(state => state.credentials.credentials);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('userId');
      setValue(value);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  });
  const onPress = item => {
    dispatch(addItem(item));
    navigation.navigate('Checkout', {bookName: item.name});
  };
  const renderItem = ({item}) => {
    // console.log(item)
    return (
      <View style={styles.book_wrap}>
        <Text style={styles.book_label}>{item.category}</Text>
        <Pressable
          onPress={() => onPress(item)}
          android_ripple={{color: colors.borderColor, borderless: true}}>
          <Image source={require('../assets/Book.png')} />
        </Pressable>
      </View>
    );
    // console.log(item)
  };
  return (
    <MainWrapper>
      <View style={styles.container}>
        <View style={styles.title_text}>
          <Text style={styles.welcome_text}>Welcome {value}</Text>
          <Image source={require('../assets/cart.png')} />
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
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title_text: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  welcome_text: {
    color: colors.dark,
    fontSize: font.medium,
    fontWeight: '400',
    textAlign: 'center',
  },
  orderType: {
    fontSize: font.xl,
    fontWeight: 700,
    color: colors.dark,
    marginTop: responsiveScreenHeight(6),
    width: '70%',
  },
  book_container: {
    flexWrap: 'wrap',
    marginTop: responsiveScreenHeight(10),
    // borderWidth: 1
  },
  book_wrap: {
    width: '50%',
    // borderWidth: 1,
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    marginBottom: responsiveScreenHeight(7),
    // borderWidth: 1
  },
  book_label: {
    color: '#9A9A9D',
    fontWeight: '600',
    fontSize: font.small,
    lineHeight: 20,
    marginBottom: 30,
  },
});
