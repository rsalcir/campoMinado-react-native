
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import parametros from './parametros'
import CampoMinado from './components/CampoMinado'
import { 
  criarTabuleiroComMinas 
} from './logicaDoJogo'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = this.criarEstado();
  }

  obterQuantidadeDeMinas = () => {
    const colunas = parametros.getColunas();
    const linhas = parametros.getLinhas();
    return Math.ceil( colunas * linhas * parametros.nivelDeDificuldade);
  }

  criarEstado = () => {
    const colunas = parametros.getColunas();
    const linhas = parametros.getLinhas();
    return {
        tabuleiro: criarTabuleiroComMinas(linhas, colunas, this.obterQuantidadeDeMinas())
    }
  }

  render(){
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.texto}>Campo Minado</Text>
          <View style={styles.tabuleiro}>
            <CampoMinado tabuleiro={this.state.tabuleiro}/>
          </View>
        </View>
      </>
    )
  }
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-end',
  },
  texto:{
    textAlign: 'center'
  },
  tabuleiro:{
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});
