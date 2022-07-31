import 'react-native-gesture-handler';


import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



import { DrawerContent } from './screens/DrawerContent';

import HomeGroup from './screens/Groups/HomeGroups'
import HomeActivityList from './screens/ActivityList/HomeActivityList'
import NextEventList from "./screens/NextEvents/NextEventList"
import EventDetails from "./screens/NextEvents/EventDetails"
import SearchContact from "./screens/Groups/SearchContact"
//import Icon  from 'react-native-paper/lib/typescript/components/Avatar/Avatar';

const Drawer = createDrawerNavigator();

export default function App() {


  return (
  <NavigationContainer >
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/> } screenOptions={{
            headerStyle:{
              backgroundColor:'#38006b'
            },
            headerTintColor:"#FFF",
            headerTitleStyle:{
              fontWeight:'bold'
            }
      }} >



        <Drawer.Screen name="Home" component={HomeGroup}  options={{ title:"Accueil"}}  />
        <Drawer.Screen name="Activites" component={HomeActivityList} options={{ title:"Vos Groupes"}}/>
        <Drawer.Screen name="EvenemtsList" component={NextEventList} options={{ title:"Liste des événements",  headerRight:()=>(<Icon.Button name="search-web" />)       }}/>
        <Drawer.Screen name="EventDetails" component={EventDetails} options={{ title:"Détails de l'événement"}}/>
        <Drawer.Screen name="SearchContact" component={EventDetails} options={{ title:"Rechercher un contact"}}/>

    </Drawer.Navigator>

  </NavigationContainer>


  );
}