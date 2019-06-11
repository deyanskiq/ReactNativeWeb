import { CommonApp } from '@mono-repo/common';
import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { TwoIconButton } from '@mono-repo/common/src/components/TwoIconButton' 
import { Platform } from 'react-native';

const { width, height } = Dimensions.get('window')

const App = () => {

  return (
    <View style={styles.container}>
      <CommonApp />
      <TwoIconButton
          leftIcon={'https://pptcrafter.files.wordpress.com/2013/08/stopwatch2.png'}
          rightIcon={'https://cdn.pixabay.com/photo/2014/09/26/10/45/arrow-462212_960_720.png'}
          additionalButtonStyle={{}}
          additionalLeftIconStyle={{}}
          additionalButtonTextStyle={{}}
          additionalRightIconStyle={{}}
          >
              Common repo button
      </TwoIconButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: (Platform.OS === 'web') ? 150 : 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default App;

