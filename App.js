import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import Navigation from './screens/Navigation'


const Drawer = createDrawerNavigator();

export default function App() {
  return (
<IconComponentProvider IconComponent={MaterialCommunityIcons}>
<NavigationContainer>

    <Navigation/>
    </NavigationContainer>

</IconComponentProvider>

  );
}