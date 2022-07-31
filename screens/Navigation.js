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


let CustomStackNavigator=({navigation})=>{
    return (

            <Stack.Navigator
            screenOptions={{
            headerStyle: {
            backgroundColor: '#0077c2',
            },
            headerTintColor:'#fff',
            }} >

                <Stack.Screen name="Home" component={HomeGroup} />
                <Stack.Screen name="Activity" component={HomeActivityList} />
                <Stack.Screen name="Agenda" component={NextEventList} />
            </Stack.Navigator>

    )

}


function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props} screenOptions ={{
            headerStyle:{
              backgroundColor:"#5c6bc0"
            },
            headerTintColor:"white"
          }} >
      
      
                <DrawerItem 
                label ="Home"
                labelStyle={{color:"#0077c2"}}
                onPress={()=>{props.navigation.navigate("Activity");}}
                icon ={()=>  <Ionicons name="md-checkmark-circle" size={32} color="green" />
                }
                />

                <DrawerItem 
                label ="Vos adresses"
                labelStyle={{color:"#0077c2"}}
                onPress={()=>{props.navigation.navigate("Activity");}}
                icon ={()=> <Ionicons name="md-checkmark-circle" size={32} color="green" />
                }
                />

                <DrawerItem 
                label ="Agenda"
                labelStyle={{color:"#0077c2"}}
                onPress={()=>{props.navigation.navigate("Agenda");}}
                icon ={()=> <Ionicons name="md-checkmark-circle" size={32} color="green" />
                }
                />

          </DrawerContentScrollView>
    
    );
  }
  





  function App() {
    return (
    <Drawer.Navigator initialRouteName="Home"  >
            <Drawer.Screen name="Home" component={HomeGroup} />
            <Drawer.Screen name="Activités" component={HomeActivityList} />
            <Drawer.Screen name="Evenemts" component={NextEventList} />
    </Drawer.Navigator>

    );
  }




export default App;