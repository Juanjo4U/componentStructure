import React from "react";
import { StatusBar } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import customizeGoal from "../../screens/customizeGoal/customizeGoal";
import Bottom from "../bottomNavigation/bottomNavigation";
import { SafeArea as Wrapper } from "../../components/commonStyledComponents/commonStyledComponents";
import constants from "../../utils/constants";

const header = () =>
    <Wrapper bg={constants.primaryColor} >
        <StatusBar barStyle='light-content' backgroundColor={constants.primaryColor} hidden={false} />
    </Wrapper>

const Stack = createStackNavigator();

export default () =>
    <Stack.Navigator screenOptions={{ header }}>
        <Stack.Screen name="customizeGoal" component={customizeGoal} />
        <Stack.Screen name="bottom" component={Bottom} />
    </Stack.Navigator>