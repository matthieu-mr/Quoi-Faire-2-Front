
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "@react-native-material/core";


//import HomeActivityList from '../ActivityList/HomeActivityList'




export default function App(props) {
return (
  <View>
  <Text>Hello Home</Text>
  <Button title="Next events" onPress={() =>props.navigation.navigate("Evenemts")}/>
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
});