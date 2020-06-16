import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button } from 'react-native';


export default function Imc() {


class Calcs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { peso: '' };
     this.state = { metro: '' };
      this.state = { centimetro: '' };
       this.state = { imcs: '' };
  }
  myGetPeso = (event) => {
    this.setState({peso: event.target.value});
  }
    myGetMetro = (event) => {
    this.setState({metro: event.target.value});
  }

      myGetCentimetro = (event) => {
    this.setState({centimetro: event.target.value});
  }
  
  myImc = () =>{
    const peso = this.state.peso;
    const metro = this.state.metro;
    const centimetros = this.state.centimetro;
    const concat = metro + "." + centimetros;
    const alturaAoQuadrado = concat * concat;
    const imc = peso / alturaAoQuadrado;
    this.setState({imc: imc});
    
   //alert(result);


  }


  render() {
    return (
  <View>

   
  
<Text>Peso:</Text>
<TextInput onChange={this.myGetPeso} style={styles.input}/>
<Text>Metro:</Text> 
<TextInput onChange={this.myGetMetro} style={styles.input}/>
<Text>Centimetro:</Text>
<TextInput onChange={this.myGetCentimetro} style={styles.input}/>
<Text>Resultado:</Text>
<h2>{this.state.imc} </h2>
<br />
   <Button onPress={this.myImc}  style={styles.bnt}
   title= "Calcular"
   ></Button>

      
      </View>

    );
  }
}

const styles = StyleSheet.create({
  input:{
    borderWidth: 1,
    borderColor: "black",
  }
 
});


  return (
  
    <View >
    <Calcs />

    </View>
  );
}



