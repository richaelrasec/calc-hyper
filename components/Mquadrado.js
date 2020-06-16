import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button } from 'react-native';


export default function Mquadrado() {
 class Metro2 extends React.Component{
constructor(props){
  super(props);
  this.state = {largura: ''};
  this.state = {comprimento: ''};
  this.state = {muMulti: ''}

}
    myLargura = (event) =>{
      this.setState ({largura: event.target.value});
    }


  myComprimento = (event) =>{
      this.setState ({comprimento: event.target.value});
    }

    myQuadrado = () =>{
      const largura = this.state.largura;
      const comprimento = this.state.comprimento;
      const myMulti = largura * comprimento;
      this.setState({myMulti: myMulti})

    }

   render(){
     return(
<View>
<Text>Largura:</Text>
<TextInput onChange={this.myLargura} style={styles.campo}></TextInput> 
<Text>Comprimento:</Text>
<TextInput onChange={this.myComprimento} style={styles.campo}></TextInput> 
<Text>Resultado:</Text>

<TextInput value={this.state.myMulti}  style={styles.campo}></TextInput> 
<Button onPress={this.myQuadrado}
title= "Calcular"
></Button>
</View>
    );
  }
 }
const styles = StyleSheet.create({
  campo:{
    borderWidth: 1,
    borderColor: "black",
  }
});




    return (
<View>
<Metro2/>
</View>
    );
}