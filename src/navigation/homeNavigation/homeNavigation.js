import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import customizeGoal from "../../screens/customizeGoal/customizeGoal";
import bottom from "../bottomNavigation/bottomNavigation";

const Stack = createStackNavigator();

export default () =>
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name="customizeGoal" component={customizeGoal} />
        <Stack.Screen name="bottom" component={bottom} />
    </Stack.Navigator>