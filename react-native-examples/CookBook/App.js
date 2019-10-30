import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ch0202 } from './components/Ch0202';
import { Ch0301 } from './components/Ch0301';
import { Ch0303 } from './components/Ch0303';

export default function App() {
  return (
    <View style={styles.container}>
      <Ch0202></Ch0202>
      <Ch0301 name="PancakesYaa!" isYummy={true} />
      <Ch0303 name='Rexxar' />
      <Ch0303 name='Jaina' />
      <Ch0303 name='Valeera' />
      <Text>Open up App.js to start working on your app! What?</Text>
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
