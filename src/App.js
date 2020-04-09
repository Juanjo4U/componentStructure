import 'react-native-gesture-handler';
import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from "./navigation/navigationContainer";

export default () =>
    <SafeAreaProvider>
        <StatusBar hidden />
        <Navigation />
    </SafeAreaProvider>