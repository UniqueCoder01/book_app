import {StyleSheet, Image, View, StatusBar} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import backgroundImage from '../assets/Books.png';
const MainWrapper = ({children}) => {
  const color = ['#FFADAD', 'rgba(220, 135, 6,0)'];
  return (
    <LinearGradient
      colors={color}
      style={styles.lineargradient}
      angle={180}
      locations={[0, 1]}>
      <View style={styles.main_container}>
        <Image source={backgroundImage} style={styles.bgImage} />
        {children}
      </View>
    </LinearGradient>
  );
};

export default MainWrapper;

const styles = StyleSheet.create({
  lineargradient: {
    flex: 1,
    justifyContent: 'space-between',
    // height: "100%",
  },
  main_container: {
    flex: 1,
    // justifyContent: "space-between",
    marginTop: StatusBar.currentHeight,
  },
  bgImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    top: '-5%',
    zIndex: -1,
    position: 'absolute',
  },
});
