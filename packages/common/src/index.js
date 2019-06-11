import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
// import realm from './storage/Realm'
// import Realm from 'realm';

export const CommonApp = () => {

    return (
    <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native and React Native Web!</Text>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
  });

  
  