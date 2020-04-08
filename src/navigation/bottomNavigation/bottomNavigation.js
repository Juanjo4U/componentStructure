import React from "react";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";
import styled from "styled-components/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import record from "../../screens/bottomScreens/record/record";
import more from "./moreStacks/more";
import another from "../../screens/another/another";
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
            name="Resumen"
            component={another}
            options={{ tabBarIcon: props => <Icon name='chart-bar' {...props} /> }} />
        <Tab.Screen
            name="Entrenos"
            component={another}
            options={{ tabBarIcon: props => <Icon name='stopwatch' {...props} /> }} />
        <Tab.Screen
            name="Historial"
            component={record}
            options={{ tabBarIcon: props => <Icon name='clipboard' {...props} /> }} />
        <Tab.Screen
            name="Calendario"
            component={another}
            options={{ tabBarIcon: props => <Icon name='calendar-alt' {...props} /> }} />
        <Tab.Screen
            name="more"
            component={more}
            options={{ tabBarIcon: props => <Icon name='ellipsis-h' {...props} /> }} />
    </Tab.Navigator>