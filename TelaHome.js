import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView, TextInput, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function TelaHome() {
     return(
    <View>
      <Text>Aqui é a tela de Home</Text>
    </View>
  );
}