import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView, TextInput, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Saudacao from './Componentes';

export default function TelaHome({route}) {
  const {varlogin} = route.params;

     return(
    <View>
      <Text>Aqui é a tela de Home</Text>
      <Saudacao nome={varlogin}></Saudacao>
    </View>
  );
}