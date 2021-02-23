
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import parametros from './parametros'
import Campo from './components/Campo';

export default class App extends Component {
  render (){
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.texto}>Iniciando projeto campo minado!!!</Text>
          <Text style={styles.texto}>
            Tamanho da grade: {parametros.getRowsAmount()}x{parametros.getColumnsAmount()}
          </Text>
          <Campo/>
          <Campo aberto/>
          <Campo aberto minasAoRedor={1}/>
          <Campo aberto minasAoRedor={2}/>
          <Campo aberto minasAoRedor={3}/>
          <Campo aberto minasAoRedor={6}/>
          <Campo minado />
          <Campo minado aberto/>
          <Campo minado aberto explodida/>
        </View>
      </SafeAreaView>
    )
  }
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 200
  },
  texto:{
    fontSize: 20,
    textAlign:'center'
  }  
});
