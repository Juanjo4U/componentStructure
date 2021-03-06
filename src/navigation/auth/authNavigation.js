import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import walkthrough from "../../screens/walkthrough/walkthrough";
import login from "../../screens/auth/login";
import register from "../../screens/auth/register";
import restorePassword from "../../screens/auth/restorePassword";

const Stack = createStackNavigator();

export default () =>
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name="walkthrough" component={walkthrough} />
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="register" component={register} />
        <Stack.Screen name="restorePassword" component={restorePassword} />
    </Stack.Navigator>