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
    activeTintColor: 'white',
    style: {
        backgroundColor: constants.primaryColor
    }
}

const withoutBackground = {
    activeTintColor: constants.primaryColor,
    inactiveTintColor: 'gray',
}

const moreOpenDrawer = ({ navigation }) => {
    navigation.openDrawer()
    navigation.goBack()
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('tabPress', e => {
            // Prevent default behavior
            e.preventDefault();
            navigation.openDrawer()
        });
        return unsubscribe;
    }, [navigation])
    return <></>
}

export default ({ bg, moreOption }) =>
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
            name="profile"
            component={profile}
            options={{ tabBarIcon: (props) => <Icon name='user' {...props} /> }} />
        <Tab.Screen
            name="more"
            component={moreOption ? more : moreOpenDrawer}
            options={{ tabBarIcon: (props) => <Icon name='ellipsis-h' {...props} /> }} />
    </Tab.Navigator>