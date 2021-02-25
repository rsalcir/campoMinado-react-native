import React from 'react'
import { View, StyleSheet } from 'react-native'
import Campo from './Campo'

export default (props) => {
    const linhas = props.tabuleiro.map((conteudoDaLinha, linha) =>{
        const colunas = conteudoDaLinha.map((conteudoDaColuna, coluna) => {
            return (
                <Campo {...conteudoDaColuna} key={coluna} 
                    onOpen={() => props.abrirCampo(linha, coluna)}
                    onSelect={() => props.selecionarCampo(linha, coluna)}
                />
            );
        });
        return (
            <View key={linha} style={{flexDirection: 'row'}}>
                {colunas}
            </View>
        );
    });

    return (
        <View style={styles.container}>{linhas}</View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE'
    }
});
