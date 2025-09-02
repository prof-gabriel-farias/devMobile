import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView, TextInput, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function TelaLogin (){
  const navigation = useNavigation();
  const [login, setLogin] = useState('');
  const [loginFinal, setLoginFinal] = useState('');
  const validarLogin = ()=> {
      if (login === 'gabriel')
      {
        navigation.navigate("Home");
      }
      else 
      {
        console.log("usuário ou senha inválidos");
      }
  }

  return (
  <View style={styles.container}>
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

function TelaHome (){
  return(
    <View>
      <Text>Aqui é a tela de Home</Text>
    </View>
  );
}

export default function App() {
  const [contador, setContador] = useState(0);

  const [senha, setSenha] = useState('');
  const [senhaFinal, setSenhaFinal] = useState('');

  const somar = (valor) => {
    setContador(contador + valor);
  }
useEffect(()=> {console.log('valor do contador ' + contador),[contador]});
  //useEffect(()=> {console.log('login digitado: ' + loginFinal + ' - senha digitada: ' + senhaFinal)},[loginFinal,senhaFinal]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={TelaLogin} />
      <Stack.Screen name="Home" component={TelaHome}/>
      </Stack.Navigator>
    </NavigationContainer>
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
