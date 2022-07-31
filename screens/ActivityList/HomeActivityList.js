
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "@react-native-material/core";

export default function App(props) {
return (
  <View style={styles.container}>
    <Text>home activity</Text>
    <Button title="Click Me" onPress={() =>props.navigation.navigate("PlaceDetails")}/>

    <StatusBar style="auto" />
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