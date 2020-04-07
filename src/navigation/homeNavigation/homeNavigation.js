import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import customizeGoal from "../../screens/customizeGoal/customizeGoal";
import Bottom from "../bottomNavigation/bottomNavigation";
import { SafeArea as Wrapper } from "../../components/commonStyledComponents/commonStyledComponents";
import constants from "../../utils/constants";

const header = () => <Wrapper bg={constants.primaryColor} />

const Stack = createStackNavigator();

export default () =>
    <Stack.Navigator screenOptions={{ header }}>
        <Stack.Screen name="customizeGoal" component={customizeGoal} />
        <Stack.Screen name="bottom" component={Bottom} />
    </Stack.Navigator>