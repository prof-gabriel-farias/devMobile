import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View, Button, Image, ScrollView, TextInput, Alert, FlatList, ActivityIndicatorBase } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Saudacao from './Componentes';
import {database} from './firebase';
import {ref,set,onValue,get} from 'firebase/database';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
 
export default function TelaHome() {
  const varlogin = '';

  const [endereco,setEndereco] = useState({});
  const [cep,setCEP] = useState({});
  const [pessoa,setPessoa] = useState({});

  const [carro,setCarro] = useState({});
  const [idCarro,setIDCarro] = useState('');
  const [carrosLista,setCarros] = useState({});

  const [location,setLocation] = useState(null);
  const [errors,setErrors] = useState(null);

  const [permission, requestPermission] = useCameraPermissions();
  const [foto, setFoto] = useState(null);
  const cameraRef = useRef(null);

function salvarCarro() {
  set(ref(database,`carros/${idCarro}`),{
    carro:carro
  });
  console.log('criei o carro ->' + carro);
  //const data = snapshot.val();
  //if (data)
  //{
    //console.log('criei o carro ->' + data);
  //}
}

 

useEffect(() => {
  (async ()=> {
    let {status} = await Location.requestForegroundPermissionsAsync();
    console.log(status);
    if (status === 'granted'){
      let location = await Location.getCurrentPositionAsync({});
        setLocation(location.coords);
    
    }
    else{
      setErrors('Permissão negada, pois o usuário não aceitou');
      Alert.alert('Permissão negada, favor aceitar a localização');
    }
  })();
},[])

  useEffect(()=> {
      //localizarCEP();
      const carrosLista = ref(database,'carros');

      const unsubscribe = onValue(carrosLista, (snapshot)=> {
        const data = snapshot.val();

      if (data){
        const todosCarros = Object.keys(data).map((key) => ({
          id: key,
          nome: data[key].carro           
        }));

        setCarros(todosCarros);
      }
      else {
        setCarros([]);
      }
      })

      return () => unsubscribe();

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

const tirarFoto = async() =>{
  if (cameraRef.current){
    const fotoCapturada = await cameraRef.current.takePictureAsync();
    setFoto(fotoCapturada.uri);
  }
}

if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }
if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

     return(
    <View>
      <Text>Aqui é a tela de Home</Text>
      {!foto?(
      <>
      <CameraView facing="back" ref={cameraRef} style={styles.camera} />
      <Button title='Tirar Foto' onPress={tirarFoto}/>
      </>):(
        <>
          <Image source={{uri:foto}} style={styles.imagem}/>
          <Button title='Tirar foto novamente' onPress={()=> setFoto(null)}/>
        </>
      )
      }

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

    <Text>Digite o Identificador do Carro:</Text>
    <TextInput onChangeText={setIDCarro}></TextInput> 
    <Text>Digite o nome do Carro:</Text>
    <TextInput onChangeText={setCarro}></TextInput>
    <Button title="Inserir Carro" onPress={salvarCarro}></Button>
    {!location ? (
      <ActivityIndicator size="large"/>
    ):(
    <MapView 
     style={styles.mapa}
     initialRegion={{
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
     }} >
      <Marker
        coordinate={{
          latitude: location.latitude,
          longitude: location.longitude
        }}
        title='Aqui é sua posição'
      ></Marker>
    </MapView>
    )}

    <FlatList
      data={carrosLista}
      renderItem={({item}) => (
        <Text>
          ID:{item.id} - NomeCarro: {item.nome}
        </Text>
      )}    
      ListEmptyComponent={<Text>Nenhum carro encontrado.</Text>}>
    </FlatList>
    
    </View>
  );
}
const styles = StyleSheet.create({
  mapa:{
    width: 400,
    height: 400,
    marginTop: 10
  },
  camera:{
    width:300, 
    height:300
  },
  imagem:{
    width:300,
    height:300
  }
});