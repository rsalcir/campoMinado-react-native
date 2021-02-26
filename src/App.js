
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert
} from 'react-native';

import parametros from './parametros';
import CampoMinado from './components/CampoMinado';
import Cabecalho from './components/Cabecalho';
import SeletorDeNivel from './screens/SeletorDeNivel';
import { 
    criarTabuleiroComMinas,
    clonarTabuleiro,
    abrirCampo,
    temExplosao,
    ganhouOJogo,
    exibirMinas,
    inverterABandeira,
    bandeirasJaUtilizadas
} from './logicaDoJogo';

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
        perdeu: false,
        exibeSeletorDeNivel: false 
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

  selecionarCampoDoTabuleiro = (linha, coluna) => {
    const tabuleiro = clonarTabuleiro(this.state.tabuleiro);
    inverterABandeira(tabuleiro, linha, coluna);
    const ganhou = ganhouOJogo(tabuleiro);

    if(ganhou){
      Alert.alert('Parabéns você ganhou o jogo!!!');
    }

    this.setState({ tabuleiro, ganhou });
  }

  calcularQuantidadeDeBandeirasQueFaltamParaMarcar = () => {
    return this.obterQuantidadeDeMinas() - bandeirasJaUtilizadas(this.state.tabuleiro);
  }

  nivelSelecionado = nivel => {
    parametros.nivelDeDificuldade = nivel;
    this.setState(this.criarEstado());
  }

  render(){
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Campo Minado</Text>
            <SeletorDeNivel 
              visivel={this.state.exibeSeletorDeNivel}
              selecionarNivel={this.nivelSelecionado}
              fecharModal={() => this.setState({ exibeSeletorDeNivel: false })}
            /> 
            <Cabecalho 
              bandeirasQueFaltam = {this.calcularQuantidadeDeBandeirasQueFaltamParaMarcar()}
              novoJogo={() => this.setState(this.criarEstado())}
              exibirModal={() => this.setState({ exibeSeletorDeNivel: true })}
            />
            <View style={styles.tabuleiro}>
              <CampoMinado 
                tabuleiro={this.state.tabuleiro} 
                abrirCampo={this.abrirCampoDoTabuleiro}
                selecionarCampo={this.selecionarCampoDoTabuleiro}
              />
            </View>
        </View>
    )
  }
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-end',
  },
  tabuleiro:{
    alignItems: 'center',
    backgroundColor: '#AAA'
  },
  titulo: {
    backgroundColor: '#EEE',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  }
});
