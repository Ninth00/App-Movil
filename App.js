import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text,View, StyleSheet,Image} from 'react-native-web';

const App = () => {
  return(
    <View style={style.container}>
    <Text style={style.title}>Ya dejeme salir</Text>
    <Image source={{uri:'https://picsum.photos/200/300'}} 
    style={style.image}
    
    />
    
    </View>
  );
};

const style = StyleSheet.create({
  container:{flex:1, justifyContent: 'center' , alignItems: 'center', backgroundColor:'grey'},
    title:{fontSize:30},
    text: { color: 'blue', backgroundColor: 'green', fontsize:16},
    image: {height:200, width:200}
})
export default App;