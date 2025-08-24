import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { ScrollView, TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={stylebtn.container}>
      <ScrollView>
      <Image style={{width:'150px',height:'150px', alignSelf:'center'}} source={uri='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDJpdWgyZWhoanZsdWZsdjZlZHRlcXM3cm91Y3pjdXZ4bXZ1dnoyZiZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/FoH28ucxZFJZu/giphy.webp'}></Image>
      <Text style={styles.text}>Bem vindo a SantaCruz</Text>
      <Text style={styles.text}>Hoje é terça-feira</Text>
      <TextInput secureTextEntry={true} style={{fontSize: '50px', color:'rgba(255, 34, 34, 1)'}} placeholder='Insira seu nome'></TextInput>
      <Button color="#ffc800ff" borderColor="#fff" title="clique aqui"></Button>
      <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color:'#fff',
    fontFamily: 'Helvetica',
    fontSize: '30px'
  },
  
});
const stylebtn = StyleSheet.create(
  {
    container: {
    flex: 1,
    backgroundColor: '#4dff00ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#ffb701ff',
    borderColor: '#000000',
    color: '#000000'
  }
});
