import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import test from "../screens/testingNavigations";
import auth from "./auth/authNavigation";
import Home from "./homeNavigation/homeWidthDrawer";

const Stack = createStackNavigator();

export default () =>
    <NavigationContainer>
        <Stack.Navigator headerMode='none' initialRouteName='test'>
            <Stack.Screen name="test" component={test} />
            <Stack.Screen name="option1">
                {() => <Home widthHeader bottomBG moreOption />}
            </Stack.Screen>
            <Stack.Screen name="option2">
                {() => <Home widthHeader />}
            </Stack.Screen>
            <Stack.Screen name="option3">
                {() => <Home bottomBG />}
            </Stack.Screen>
            <Stack.Screen name="option4">
                {() => <Home bottomBG moreOption />}
            </Stack.Screen>
            <Stack.Screen name="option5">
                {() => <Home />}
            </Stack.Screen>
            <Stack.Screen name="option6">
                {() => <Home moreOption />}
            </Stack.Screen>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="auth" component={auth} />
        </Stack.Navigator>
    </NavigationContainer>