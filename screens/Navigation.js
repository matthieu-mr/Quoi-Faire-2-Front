// In App.js in a new project
import 'react-native-gesture-handler';

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import Ionicons from '@expo/vector-icons/Ionicons';

//<Ionicons name="add-circle-sharp" size={24} color="black" />

import {
    DrawerContentScrollView,
    DrawerItem,
  } from '@react-navigation/drawer';



import HomeGroup from './Groups/HomeGroups'
import HomeActivityList from './ActivityList/HomeActivityList'
import NextEventList from "./NextEvents/NextEventList"
import EventDetails from "./NextEvents/EventDetails"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


  function CustomTab() {
    return (
    <Drawer.Navigator >
            <Drawer.Screen name="Home" component={HomeGroup} />
            <Drawer.Screen name="Activités" component={HomeActivityList} />
            <Drawer.Screen name="Evenemts" component={NextEventList} />
    </Drawer.Navigator>

    );
  }


  function App() {
    return (

        <Stack.Navigator>
          <Stack.Screen
            name="Accueil"
            component={CustomTab}
            options={{ headerShown: false }}
          />
                <Stack.Screen name="Home" component={HomeGroup} />
                <Stack.Screen name="Activity" component={HomeActivityList} />
                <Stack.Screen name="Agenda" component={NextEventList} />
                <Stack.Screen name="Event Details" component={EventDetails} />
        </Stack.Navigator>

    );
  }



export default App;