import React from 'react'
import { View, StyleSheet } from 'react-native'

export default (props) =>{
    return (
        <View style={styles.container}>
            <View style={[styles.mastro, props.maior ? styles.mastroMaior : null]}></View>
            <View style={[styles.bandeira, props.maior ? styles.bandeiraMaior : null]}></View>
            <View style={[styles.base1, props.maior ? styles.base1Maior : null]}></View>
            <View style={[styles.base2, props.maior ? styles.base2Maior : null]}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 2
    },
    mastro: {
        position: 'absolute',
        height: 14,
        width: 2,
        backgroundColor: '#222',
        marginLeft: 9
    },
    bandeira: {
        position: 'absolute',
        height: 5,
        width: 6,
        backgroundColor: '#F22',
        marginLeft: 3
    },
    base1: {
        position: 'absolute',
        height: 2,
        width: 6,
        backgroundColor: '#222',
        marginLeft: 7,
        marginTop: 10
    },
    base2: {
        position: 'absolute',
        height: 2,
        width: 10,
        backgroundColor: '#222',
        marginLeft: 5,
        marginTop: 12
    },
    mastroMaior: {
        height: 28,
        width: 4,
        marginLeft: 16,
    },
    bandeiraMaior: {
        height: 10,
        width: 14,
        marginLeft: 3
    }, 
    base1Maior: {
        height: 4,
        width: 12,
        marginTop: 20,
        marginLeft: 12
    },
    base2Maior: {
        height: 4,
        width: 20,
        marginLeft: 8,
        marginTop: 24
    }
});