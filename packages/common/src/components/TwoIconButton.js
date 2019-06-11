import React from 'react'
import { Text, TouchableOpacity, Image, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const TwoIconButton = ({ onPress, disabled, activeOpacity, children, ...otherProps }) => {
  const { buttonStyle, textStyle, leftIconStyle, rightIconStyle } = styles
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={activeOpacity}
      style={[buttonStyle, otherProps.additionalButtonStyle]}>
      <Image
        source={otherProps.leftIcon}
        style={[leftIconStyle,
          otherProps.additionalLeftIconStyle]}
        resizeMode='contain'
      />
      <Text
        style={[textStyle, otherProps.additionalButtonTextStyle]}>
        {children}
      </Text>
      <Image
        source={otherProps.rightIcon}
        style={[rightIconStyle, otherProps.additionalRightIconStyle]}
      />
    </TouchableOpacity>
  )
}

const styles = {
  buttonStyle: {
    backgroundColor: '#fff',
    borderRadius: 14,
    marginLeft: width / 20,
    marginRight: width / 20,
    marginTop: width / 40,
    shadowColor: '#000',
    shadowOffset: { height: 5, width: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 1,
    width: width / 1.17,
    height: height / 13,
    flexDirection: 'row',
  },
  leftIconStyle: {
    height: width / 20,
    width: width / 20,
    marginTop: height / 35,
    marginLeft: width / 25,
  },
  rightIconStyle: {
    height: width / 50,
    width: width / 50,
    marginTop: height / 30,
    marginRight: width / 20,
  },
  textStyle: {
    color: '#000',
    marginTop: height / 35,
    marginLeft: width / 30,
    fontSize: width / 28,
    flex: 1,
    fontFamily: 'Avenir',
  },
}
export { TwoIconButton }
