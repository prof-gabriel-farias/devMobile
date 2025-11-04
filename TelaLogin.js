import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView, TextInput, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Saudacao from './Componentes';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import TelaHome from './TelaHome';

export default function TelaLogin() {
   const navigation = useNavigation();
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const validarLogin = ()=> {
    /*signInWithEmailAndPassword(auth, login, senha)*/
    signInWithEmailAndPassword(auth,login,senha)
      .then(userCredential => {
        const user = userCredential.user;
        console.log('Usuário criado:', user.email);
        navigation.navigate("Home");
      })
      .catch(error => {
        alert('Erro no login: ' + error.message);
      });
  }
  return (
  <View style={styles.container}>
      <Saudacao nome={'gabriel'}></Saudacao>
      <Image style={styles.logo} source={{uri:'https://santacruz.br/wp-content/uploads/2024/08/logo-slogan-white.png'}}></Image>
      <Text style={styles.text}>Login</Text>
      <TextInput onChangeText={text=> setLogin(text)} placeholder='Insira seu login'></TextInput>
      <Text style={styles.text}>Senha</Text>
      <TextInput onChangeText={text=> setSenha(text)} secureTextEntry={true} placeholder='Insira sua senha'></TextInput>
      <Button style={styles.btn} onPress={()=> {validarLogin();}} color= '#ff457d' title="Entrar"></Button>
      <Button onPress={()=> somar(10 )} title='contador'></Button>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    color:'#000',
    fontFamily: 'Helvetica',
    fontSize: 20,
    margin: 5
  },
  btn: {
    margin:5
  },
  logo:{
    width: 250,
    height: 150
  }
  
});