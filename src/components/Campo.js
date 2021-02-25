import React from 'react'
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import parametros from '../parametros'

import Mina from './Mina'
import Bandeira from './Bandeira'

export default (props) => {
    const { minado, aberto, minasAoRedor, explodida, marcadoComBandeira } = props;
    
    const estiloDoCampo = [styles.campo];
    if (aberto) estiloDoCampo.push(styles.aberto);
    if (explodida) estiloDoCampo.push(styles.explodida);
    if (marcadoComBandeira) estiloDoCampo.push(styles.marcadoComBandeira);
    if (!aberto && !explodida) estiloDoCampo.push(styles.regular);

    return (
        <TouchableWithoutFeedback onPress={props.onOpen}>
            <View style={estiloDoCampo}>
                { !minado && aberto && minasAoRedor > 0 ? 
                    <Text style={ styles.label, {color: getCorQuandotiverMinasAoRedor(minasAoRedor)} }>
                        {minasAoRedor}
                    </Text> 
                :false }
                { minado && aberto ? <Mina/> : false }
                { marcadoComBandeira && !aberto ? <Bandeira/> : false}
            </View>
        </TouchableWithoutFeedback>
    )
}

function getCorQuandotiverMinasAoRedor(minasAoRedor) {
    switch(minasAoRedor && minasAoRedor > 0) {   
        case minasAoRedor == 1: return '#2A28D7';
        case minasAoRedor == 2: return '#2B520F';
        case minasAoRedor > 2 && minasAoRedor < 6: return '#F9060A';
        case minasAoRedor >= 6: return '#F221A9';
        default: return null;      
    }
}

const styles = StyleSheet.create({
    campo:{
        height: parametros.blockSize,
        width: parametros.blockSize,
    },
    regular:{
        backgroundColor: '#999',
        borderWidth: 5, 
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333'
    },
    aberto:{
        backgroundColor: '#999',
        borderWidth: 5, 
        borderColor: '#777',
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    label:{
        fontWeight: 'bold',
        fontSize: parametros.fontSize
    },
    explodida:{
        backgroundColor: 'red',
        borderColor: 'red'
    }
});