import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from "./auth/authNavigation";
import Home from "./homeNavigation/homeNavigation";

const Stack = createStackNavigator();

export default () =>
    <NavigationContainer>
        <Stack.Navigator headerMode='none' initialRouteName='test'>
            <Stack.Screen name="auth" component={auth} />
            <Stack.Screen name="home" component={Home} />
        </Stack.Navigator>
    </NavigationContainer>