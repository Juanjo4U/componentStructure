import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import record from "../../screens/bottomScreens/record/record";
import more from "../../screens/bottomScreens/more/more";
import another from "../../screens/another/another";
import profile from "../../screens/user/profile";
import constants from "../../utils/constants";

const Tab = createBottomTabNavigator();

const background = {
    inactiveBackgroundColor: constants.primaryColor,
    activeBackgroundColor: '#BD0E54',
    inactiveTintColor: 'white',
    activeTintColor: 'white'
}

const withoutBackground = {
    activeTintColor: constants.primaryColor,
    inactiveTintColor: 'gray',
}

export default ({ bg }) =>
    <Tab.Navigator tabBarOptions={bg ? background : withoutBackground}>
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
        <Tab.Screen
            name="profile"
            component={profile}
            options={{ tabBarIcon: (props) => <Icon name='user' {...props} /> }} />
    </Tab.Navigator>