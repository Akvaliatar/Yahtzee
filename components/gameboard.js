import React, { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import { Grid, Col, Row } from 'react-native-easy-grid';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import StyleSheet from '../styles/styles.js';

let board = [];
let points = new Array(6).fill(0);
const NBR_OF_DICES = 5;
const NBR_OF_THROWS = 3;
const BONUS = 63;
let checkBonus = true;

export default function Gameboard() {
    const [throwsLeft, setThrowsLeft] = useState(NBR_OF_THROWS);
    const [total, setTotal] = useState(0);
    const [status, setStatus] = useState('');
    const [selectedDice, setSelectedDice] = useState(new Array(NBR_OF_DICES).fill(false));
    const [selectedPoints, setSelectedPoints] = useState(new Array(6).fill(false));

    const diceRow = [];
    for (let i=0; i < NBR_OF_DICES; i++){
        diceRow.push(
            <Pressable 
            key={'diceRow'+i} 
            onPress={() => selectDice(i)}>
            <MaterialCommunityIcons name={board[i]} key={'diceRow' + i} size={40} color={getDiceColor(i)}>
            </MaterialCommunityIcons>
            </Pressable>
        )
    }

    function getDiceColor(i) {
        return selectedDice[i] ? 'white' : '#81968F';
    }

    function selectDice(i) {
        if (throwsLeft === 3) {
            setStatus('You have to throw dices first.')
        } else {
        let dice = [...selectedDice];
        dice[i] = selectedDice[i] ? false : true;
        setSelectedDice(dice);
        }
    }

    function unSelectDices() {
        let dice = [...selectedDice];
        dice.fill(false);
        setSelectedDice(dice);
    }

    function throwDice() {
        if (throwsLeft == 0) {
            return;
        } else if (BONUS <= total && checkBonus == true) {
            setTotal(total + 35);
            checkBonus = false;
        } else if (selectedPoints.every((value) => value === true)) {
            ResetGame();
        }

    for (let i = 0; i < NBR_OF_DICES; i++) {
        if (!selectedDice[i]) {
            let num = Math.floor(Math.random() * 6 + 1);
            board[i] = 'dice-'+num;
        }
    }
    setThrowsLeft(throwsLeft - 1);
    }

    const points = [];
    for (let i = 0; i < 6; i++) {
        points.push(
            <Col 
            style={StyleSheet.column}
            key={'points'+i}>
                <Text key={'pointCount' + i}>{points[i]}</Text>
                <Pressable
                key={'pointPress'+i}
                onPress={() => selectPts(i)}>
                <MaterialCommunityIcons
                name={'numeric-' + (i + 1) + '-circle'}
                key={'points'+i}
                size={30}
                color={getPointColor(i)}>
                </MaterialCommunityIcons>
                </Pressable>
            </Col>
        )
    }

    function getPointColor(i) {
        return selectedPoints[i] ? 'black' : '#81968F';
    }
    
    function countPoints(value) {
        let sum = 0;
        for (let i = 0; i < board.length; i++) {
            if (board[i].endsWith(value + 1)) {
                sum += value + 1;
            }
        }

        points[value] = sum;
        setTotal(total+sum);
    }

    function selectPts(i) {
        let point = [...selectedPoints];

        if (board.length <= 0 || throwsLeft > 0) {
                setStatus('Throw 3 times before setting points.')
            return;
        } else if (point[i] === true) {
            setStatus('You have already selected points for ' + (i + 1));
            return;
        }

        point[i] = true;
        setSelectedPoints(point);
        countPoints(i);
        unSelectDices();
        setThrowsLeft(NBR_OF_THROWS);  
    }

    function receivedBonus() {
        if (total < BONUS) {
            return ('You are ' + (BONUS - total) + ' points away from bonus.')
        }
        else {
            return ('You got the bonus!')
        }
    }

    function ResetGame() {
        setThrowsLeft(NBR_OF_THROWS);
        selectedPoints.fill(false);
        setTotal(0);
        points.fill(0);
        checkBonus = true;
    }

    useEffect(() => {
        if (throwsLeft > 0) {
            if (selectedPoints.every((value) => value === true)) {
                setStatus('Game over. Throw dice to start a new game.');
            }
            else {
                setStatus('You may throw dice.');
            }
        }

        if (throwsLeft == 0) {
            setStatus('Select your dice before next throw.');
        }
        if (throwsLeft < 0) {
            setThrowsLeft(NBR_OF_THROWS - 1);
        }
    }, [throwsLeft])

    return(
        <View style={StyleSheet.gameboard}>
            <View style={StyleSheet.dice}>{diceRow}</View>
            <Text style={StyleSheet.text}>Throws left: {throwsLeft}</Text>
            <Text style={StyleSheet.text}>{status}</Text>
            <Pressable style={StyleSheet.button} onPress={throwDice}>
                <Text style={StyleSheet.buttonText}>Throw dice!</Text>
            </Pressable>
            <Text style={StyleSheet.boxu}>Total: {total}</Text>
            <Text style={StyleSheet.boxu}>{receivedBonus()}</Text>
            <Grid><Row>{points}</Row></Grid>
        </View>
    );    
}