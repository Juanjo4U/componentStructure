import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerComponent from "../navgationComponents/drawer/drawer";
import homeBottom from "./homeNavigation";

const Drawer = createDrawerNavigator();

export default () =>
    <Drawer.Navigator drawerContent={DrawerComponent} drawerStyle={{ width: '65%' }}>
        <Drawer.Screen name="homeBottom" component={homeBottom} />
    </Drawer.Navigator>