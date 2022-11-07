// Author: Aureliina Hietamies
import React from 'react';
import {View} from 'react-native';
import Header from './components/header.js';
import Gameboard from './components/gameboard.js';
import Footer from './components/footer.js';
import StyleSheet from './styles/styles.js';



export default function App() {

  return (
      <View style={StyleSheet.container}>
        <Header />
        <Gameboard />
        <Footer />
      </View>
  );
}
/*  harjoitus mallina
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import {  Text, View, Image, Button } from 'react-native';
import uuid from 'react-uuid';
import Stylesheet from './styles.js';

export default function App() {
  const NBR_OF_DICES = 2;
  const { sumOfDices, setSumOfDices } = useState(0);
  const { diceImages, setDiceImages } = useState([]);

  function initialize() {
    let images = [];
    for (let i = 0; i< NBR_OF_DICES; i++) {
      images[i] = require("./assets/dice-images/smiley.png");
    }
    setDiceImages(images);
  }

  function setImages(throws) {
    let images = [];
    for (let i = 0; i < throws.length; i++) {
      switch(throws[i]) {
        case 1: images[i] = require("./assets/dice-images/1.png"); break;
        case 2: images[i] = require("./assets/dice-images/2.png"); break;
        case 3: images[i] = require("./assets/dice-images/3.png"); break;
        case 4: images[i] = require("./assets/dice-images/4.png"); break;
        case 5: images[i] = require("./assets/dice-images/5.png"); break;
        case 6: images[i] = require("./assets/dice-images/6.png"); break;
        default: break;
      }
    }
    setDiceImages(images);
  }

  function throwDices() {
    let throws = [];
    let sum = 0;
    for (let i = 0; i < NBR_OF_DICES; i++) {
      throws[i] = Math.floor(Math.random() * 6 + 1);
      sum += throws[i];
    }
    setSumOfDices(sum);
    setImages(throws);
  }

  useEffect(() => {
    initialize();
  }, []);

  return (
    <View style={StyleSheet.container}>
      <Text style= {StyleSheet.header}>Mini Yatzy</Text>
      <Button style={StyleSheet.button} onPress={throwDices} title="Throw dices"/>
      <View style={StyleSheet.flex}>
        {diceImages?.map(dice => (
          <Image style={StyleSheet.dice} source={dice} key={uuid()}/>
        ))}
      </View>
      <Text style={StyleSheet.sum}> Sum of dices is {sumOfDices} .</Text>
      <StatusBar style="auto" />
    </View>
  );
}
*/