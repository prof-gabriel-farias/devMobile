import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView, TextInput, Alert } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [contador, setContador] = useState(0);
  const [login, setLogin] = useState('');
  const [loginFinal, setLoginFinal] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaFinal, setSenhaFinal] = useState('');

  useEffect(()=> {console.log('login digitado: ' + loginFinal + ' - senha digitada: ' + senhaFinal)},[loginFinal,senhaFinal]);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{uri:'https://santacruz.br/wp-content/uploads/2024/08/logo-slogan-white.png'}}></Image>
      <Text style={styles.text}>Login</Text>
      <TextInput onChangeText={text=> setLogin(text)} placeholder='Insira seu login'></TextInput>
      <Text style={styles.text}>Senha</Text>
      <TextInput onChangeText={text=> setSenha(text)} secureTextEntry={true} placeholder='Insira sua senha'></TextInput>
      <Button style={styles.btn} onPress={()=> {setLoginFinal(login); setSenhaFinal(senha);}} color= '#ff457d' title="Entrar"></Button>
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
