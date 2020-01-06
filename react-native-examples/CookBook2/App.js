import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ch1001 } from './Ch1001';
import { Ch1002 } from './Ch1002';
import { Ch1003 } from './Ch1003';
export default function App() {
  return (
    <View style={styles.container}>
      <Ch1001></Ch1001>
      <Ch1002></Ch1002>
      <Ch1003></Ch1003>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
