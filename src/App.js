
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert
} from 'react-native';

import parametros from './parametros'
import CampoMinado from './components/CampoMinado'
import { 
    criarTabuleiroComMinas,
    clonarTabuleiro,
    abrirCampo,
    temExplosao,
    ganhouOJogo,
    exibirMinas
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
        tabuleiro: criarTabuleiroComMinas(linhas, colunas, this.obterQuantidadeDeMinas()),
        ganhou: false,
        perdeu: false  
    }
  }

  abrirCampoDoTabuleiro = (linha, coluna) => {
    const tabuleiro = clonarTabuleiro(this.state.tabuleiro);
    abrirCampo(tabuleiro, linha, coluna);
    const ganhou = ganhouOJogo(tabuleiro);
    const perdeu = temExplosao(tabuleiro);

    if(perdeu) {
      exibirMinas(tabuleiro);
      Alert.alert('Perdeu o jogo, tente novamente!!!');
    }

    if(ganhou){
      Alert.alert('Parabéns você ganhou o jogo!!!');
    }

    this.setState({ tabuleiro, ganhou, perdeu });
  }

  render(){
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.texto}>Campo Minado</Text>
          <View style={styles.tabuleiro}>
            <CampoMinado 
              tabuleiro={this.state.tabuleiro} 
              abrirCampo={this.abrirCampoDoTabuleiro}
            />
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
