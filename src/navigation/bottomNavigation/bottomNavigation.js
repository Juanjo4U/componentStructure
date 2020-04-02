import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import record from "../../screens/bottomScreens/record/record";
import more from "../../screens/bottomScreens/more/more";
import another from "../../screens/another/another";

const Tab = createBottomTabNavigator();

export default () =>
    <Tab.Navigator>
        <Tab.Screen
            name="record"
            component={record}
            options={{ tabBarIcon: (props) => <Icon name='file-alt' {...props} /> }} />
        <Tab.Screen
            name="another"
            component={another}
            options={{ tabBarIcon: (props) => <Icon name='bolt' {...props} /> }} />
        <Tab.Screen
            name="more"
            component={more}
            options={{ tabBarIcon: (props) => <Icon name='ellipsis-h' {...props} /> }} />
    </Tab.Navigator>