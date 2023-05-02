import {Image, StyleSheet, Text, View} from 'react-native';
import MainWrapper from '../components/MainWrapper';
import React, {useEffect} from 'react';
import {font, colors} from '../constant/GlobalcCss';
import Button from '../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import {
  addItem,
  decreaseItemCount,
  increaseItemCount,
} from '../features/slices/cartSlice';
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';
// import Icon from 'react-native-vector-icons/dist/FontAwesome5';
const CheckoutScreen = ({route, navigation}) => {
  const dispatch = useDispatch();
  const item = useSelector(state => state.cart.value);
  const val = useSelector(state => state.cart.noOfItems);
  const bookName = route.params.bookName;
  // console.log(val, bookName, item)
  const newItem = item.filter(val => val.name == bookName);
  // // const details = route.params.data[0]['data']['name']
  // console.log(newItem.price, val[bookName])
  // console.log(route.params.bookName)
  const onPress = () => {
    navigation.navigate('DetailsSubmition');
  };
  useEffect(() => {
    if (val[bookName] == 0) {
      navigation.navigate('Home');
    }
  }, [val[bookName]]);

  return (
    <MainWrapper>
      <View style={styles.main_heading}>
        <Text style={styles.main_heading_title}>In-Cart Products</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.price_container}>
          <Text style={styles.price_options}>Total Price</Text>
          <Text style={styles.price_options}>
            {(newItem[0].price * val[bookName]).toFixed(2)}
          </Text>
        </View>
        <View style={styles.pressButton}>
          <Button onPress={onPress} buttonText="Check out" />
        </View>
        <View style={styles.quantity_wrap}>
          <Image
            source={require('../assets/Book1.png')}
            style={styles.book_image}
          />
          <Text style={styles.book_name}>Alice's Adventures in Wonderland</Text>
          <View style={styles.quantity_div}>
            <Text style={styles.book_name}>Quantity</Text>
            <View style={styles.quantity_icons}>
              <Text style={styles.icons}>
                <Icon
                  name="minus-circle"
                  color={colors.dark}
                  solid
                  size={30}
                  onPress={() => dispatch(decreaseItemCount(bookName))}
                />
              </Text>
              <View>
                <Text style={styles.icons}>
                  <Icon name="circle" light color={colors.dark} size={30} />
                </Text>
                <View style={styles.product_no}>
                  <Text style={styles.product_count}>{val[bookName]}</Text>
                </View>
              </View>
              <Text style={[styles.icons]}>
                <Icon
                  name="plus-circle"
                  solid
                  color={colors.dark}
                  size={30}
                  onPress={() => dispatch(increaseItemCount(bookName))}
                />
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
    width: '90%',
    alignItems: 'flex-end',
  },
  main_heading_title: {
    fontWeight: 700,
    fontSize: font.xl,
    color: colors.dark,
  },
  container: {
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: responsiveScreenHeight(4),
    paddingVertical: 20,
  },
  price_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  price_options: {
    color: colors.dark,
    fontWeight: '400',
    fontSize: font.medium,
  },
  pressButton: {
    marginTop: responsiveScreenHeight(4),
    marginBottom: responsiveScreenHeight(8),
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  quantity_wrap: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: responsiveScreenHeight(10),
  },
  book_image: {
    width: 234,
    height: 220,
  },
  book_name: {
    fontSize: font.small,
    fontWeight: '600',
    color: colors.dark,
  },
  quantity_div: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    gap: 20,
    // justifyContent:'space-between'
  },
  quantity_icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 4,
    alignItems: 'center',
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
    alignItems: 'center',
  },
  product_count: {
    fontWeight: 600,
    fontSize: 20,
    color: colors.dark,
  },
});
