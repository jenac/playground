import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Greeting from './Greeting';
import Blink from './Blink';
import LotsOfStyles from './LotsOfStyles';
import FixedDimensionsBasics from './FixedDimensionsBasics';
import FlexDimensionsBasics from './FlexDimensionsBasics';
import FlexDirectionBasics from './FlexDirectionBasics';
import JustifyContentBasics from './JustifyContentBasics';
import AlignItemsBasics from './AlignItemsBasics';

export default function App() {
  return (
    // 1.
    // <View style={styles.container}>
    //   <Greeting name="Jenac"></Greeting>
    //   <Greeting name="DosBox"></Greeting>
    //   <Greeting name="MAME"></Greeting>
    //   <Blink text= 'I love blink'></Blink>
    //   <LotsOfStyles></LotsOfStyles>
    //   <FixedDimensionsBasics></FixedDimensionsBasics>
    // </View>

    // 2.
    // <FlexDimensionsBasics></FlexDimensionsBasics>

    // 3.
    // <FlexDirectionBasics></FlexDirectionBasics>

    // 4.
    // <JustifyContentBasics></JustifyContentBasics>

    // 5.
    <AlignItemsBasics></AlignItemsBasics>
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
