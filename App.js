import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text,View, StyleSheet,Image, Button, Alert, TouchableOpacity, TextInput} from 'react-native-web';
import image from './assets/art.jpeg'
const App = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  return(
    <View style={style.container}>
    <Text style={style.title}>Hi:)</Text>
    <Image source={image} 
    style={style.image}/>
    <Button
    title= "Presionar aqui"
    color="#841584"
    onPress={()=> alert('Hello World')}/>
      <View style={style.container}>
      <View style={style.countContainer}>
        <Text>Count: {count}</Text>
      </View>
      <TouchableOpacity style={style.button} onPress={onPress}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
    <Text>Texto 1</Text>
    <TextInput placeholder="Hola"></TextInput>
    <Text>Texto 2</Text>
    <TextInput placeholder="Hola"></TextInput>
    </View>
  );
};

const style = StyleSheet.create({
  container:{flex:1, justifyContent: 'center' , alignItems: 'center', backgroundColor:'grey'},
    title:{fontSize:30},
    text: { color: 'blue', backgroundColor: 'green', fontsize:16},
    image: {height:200, width:200},
    button: {backgroundColor:"red", padding: 7, marginTop: 10, borderRadius: 90},
    buttonText: {color:'#fff', fontSize:20},
    countContainer: {
      alignItems: 'center',
      padding: 3,
    }
})
export default App;
