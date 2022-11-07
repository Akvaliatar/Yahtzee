import React from "react";
import { Text, View } from "react-native";
import StyleSheet from "../styles/styles.js";

export default function Header() {
    return(
        <View style={StyleSheet.header}>
            <Text style={StyleSheet.jatsi}>Mini Yahtzee</Text>
        </View>
    )
}