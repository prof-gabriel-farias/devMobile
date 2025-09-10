import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView, TextInput, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './TelaLogin';
import TelaHome  from './TelaHome';

const Stack = createNativeStackNavigator();

export default function App() {
  //useEffect(()=> {console.log('valor do contador ' + contador),[contador]});
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={TelaLogin} />
      <Stack.Screen name="Home" component={TelaHome}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
