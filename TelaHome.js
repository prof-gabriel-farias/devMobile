import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView, TextInput, Alert, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Saudacao from './Componentes';
import {database} from './firebase';
import {ref,set,onValue,get} from 'firebase/database';
 
export default function TelaHome() {
  const varlogin = '';

  const [endereco,setEndereco] = useState({});
  const [cep,setCEP] = useState({});
  const [pessoa,setPessoa] = useState({});
  const [carro,setCarro] = useState({});

function salvarCarro() {
  set(ref(database,'carros/001'),{
    carro:carro
  });
  console.log('criei o carro ->' + carro);
  //const data = snapshot.val();
  //if (data)
  //{
    //console.log('criei o carro ->' + data);
  //}
}

  useEffect(()=> {
      //localizarCEP();
  },[]);

  function buscarPessoas(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setPessoa(data))
    .catch(error => console.log(error));

    console.log(pessoa);
  }

  function localizarCEP(){
       fetch('https://viacep.com.br/ws/' + cep + '/json/')
          .then(response => response)
          .then(data => data.json())
          .then(result => setEndereco(result))
          .catch(error => console.log('Falha ao conectar, você está sem internet'));
  }
     return(
    <View>
      <Text>Aqui é a tela de Home</Text>
      <TextInput placeholder='DIGITE O CEP' onChangeText={text=> setCEP(text)}></TextInput>
      <Button onPress={()=> localizarCEP()} title='Consultar CEP'></Button>
      <Text>Endereço:{endereco.logradouro}</Text>
      <Text>Bairro:{endereco.bairro}</Text>
      <Text>Cidade:{endereco.localidade}</Text>
      <Text>Estado:{endereco.estado}</Text>
      <Text>UF:{endereco.uf}</Text>
      
      <Button onPress={()=> buscarPessoas()} title='Buscar Pessoas'></Button>
      <FlatList data={pessoa} renderItem={({item}) => 
       (<Text>Nome da Pessoa: {item.name} </Text>)

      }>

      </FlatList>
      <Saudacao nome={varlogin}></Saudacao>

    <Text>Digite o nome do Carro:</Text>
    <TextInput onChangeText={setCarro}></TextInput>
    <Button title="Inserir Carro" onPress={salvarCarro}></Button>
    </View>
  );
}