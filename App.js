import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
//import Imc from './components/Imc';
import Mquadrado from './components/Mquadrado';

// or any pure javascript modules available in npm


export default function App() {
  return (
    <View>

 
        <Mquadrado />
    </View>
  );
}

const styles = StyleSheet.create({

});
