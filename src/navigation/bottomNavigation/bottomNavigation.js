import React from "react";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";
import styled from "styled-components/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import record from "../../screens/bottomScreens/record/record";
import more from "../../screens/bottomScreens/more/more";
import another from "../../screens/another/another";
import profile from "../../screens/user/profile";
import constants from "../../utils/constants";
import { sizeNormalize } from "../../utils/adaptSizes";

const Icon = styled(FontAwesomeIcon)`
    fontSize: ${sizeNormalize(18)}px;
`;

const tabBarOptions = {
    activeTintColor: constants.primaryColor,
    inactiveTintColor: 'gray',
}

const Tab = createBottomTabNavigator();

export default () =>
    <Tab.Navigator tabBarOptions={tabBarOptions}>
        <Tab.Screen
            name="record"
            component={record}
            options={{ tabBarIcon: props => <Icon name='file-alt' {...props} /> }} />
        <Tab.Screen
            name="another"
            component={another}
            options={{ tabBarIcon: props => <Icon name='bolt' {...props} /> }} />
        <Tab.Screen
            name="profile"
            component={profile}
            options={{ tabBarIcon: props => <Icon name='user' {...props} /> }} />
        <Tab.Screen
            name="more"
            component={more}
            options={{ tabBarIcon: props => <Icon name='ellipsis-h' {...props} /> }} />
    </Tab.Navigator>