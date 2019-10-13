import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Greeting from './Greeting';
import Blink from './Blink';
import LotsOfStyles from './LotsOfStyles';
import FixedDimensionsBasics from './FixedDimensionsBasics';
export default function App() {
  return (
    <View style={styles.container}>
      <Greeting name="Jenac"></Greeting>
      <Greeting name="DosBox"></Greeting>
      <Greeting name="MAME"></Greeting>
      <Blink text= 'I love blink'></Blink>
      <LotsOfStyles></LotsOfStyles>
      <FixedDimensionsBasics></FixedDimensionsBasics>
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
