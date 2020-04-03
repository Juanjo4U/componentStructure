import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Header from "../navgationComponents/header/header";
import customizeGoal from "../../screens/customizeGoal/customizeGoal";
import Bottom from "../bottomNavigation/bottomNavigation";
import { SafeArea as Wrapper } from "../../components/commonStyledComponents/commonStyledComponents";
import constants from "../../utils/constants";

const WithoutHeader = () => <Wrapper bg={constants.primaryColor} />

const Stack = createStackNavigator();

export default ({ withHeader, bottomBG, moreOption }) =>
    <Stack.Navigator
        screenOptions={{ header: withHeader ? Header : WithoutHeader }}>
        <Stack.Screen name="bottom">
            {() => <Bottom bg={bottomBG} moreOption={moreOption} />}
        </Stack.Screen>
        <Stack.Screen name="customizeGoal" component={customizeGoal} />
    </Stack.Navigator>