import React from "react";
import { Text, View } from "react-native";
import StyleSheet from "../styles/styles.js";

export default function Header() {
    return(
        <View style={StyleSheet.footer}>
            <Text style={StyleSheet.footerText}>Author: Aureliina Hietamies</Text>
        </View>
    )
}