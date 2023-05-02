import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {colors, font} from '../constant/GlobalcCss';
const Input = ({
  label,
  value,
  setValue,
  placeholder,
  keyboardType,
  backgroundColor,
  color,
  gap,
}) => {
  return (
    <View style={styles.inputField}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TextInput
        style={[
          styles.input,
          {
            color: color ? color : colors.placeHolderColor,
            backgroundColor: backgroundColor
              ? backgroundColor
              : colors.inputBackgroundColor,
            marginBottom: gap ? gap : 20,
          },
        ]}
        onChangeText={e => setValue(e)}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={color ? color : colors.placeHolderColor}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputField: {
    // marginBottom: 20
  },
  label: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: font.medium,
    color: colors.dark,
    fontFamily: 'Raleway-Bold.ttf',
  },
  input: {
    height: 44,
    fontSize: font.small,
    fontWeight: '400',
    color: colors.light,
    // color: colors.placeHolderColor,
    lineHeight: 22,
    paddingHorizontal: 16,
  },
});
