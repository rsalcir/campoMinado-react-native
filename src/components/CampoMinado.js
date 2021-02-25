import React from 'react'
import { View, StyleSheet } from 'react-native'
import Campo from './Campo'

export default (props) => {
    const linhas = props.tabuleiro.map((linha, indiceDaLinha) =>{
        const colunas = linha.map((coluna, indiceDaColuna) => {
            return (
                <Campo {...coluna} key={indiceDaColuna} 
                    onOpen={() => props.abrirCampo(indiceDaLinha, indiceDaColuna)}/>
            );
        });
        return (
            <View key={indiceDaLinha} style={{flexDirection: 'row'}}>
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
