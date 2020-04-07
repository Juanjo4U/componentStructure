import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerComponent from "../navgationComponents/drawer/drawer";
import HomeBottom from "./homeNavigation";

const Drawer = createDrawerNavigator();

export default () =>
    <Drawer.Navigator drawerContent={DrawerComponent} drawerStyle={{ width: '65%' }}>
        <Drawer.Screen name="homeBottom" >
            {() => <HomeBottom />}
        </Drawer.Screen>
    </Drawer.Navigator>