import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import more from "../../../screens/bottomScreens/more/more";
import profile from "../../../screens/user/profile";

const Stack = createStackNavigator();

export default () =>
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name="more" component={more} />
        <Stack.Screen name="profile" component={profile} />
    </Stack.Navigator>