import React from 'react';
import { 
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

import Bandeira from './Bandeira';

export default (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerDaBandeira}>
                <TouchableOpacity style={styles.botaoDaBandeira} onPress={props.exibirModal}>
                    <Bandeira maior/>
                </TouchableOpacity>
                <Text style={styles.bandeiras}>= {props.bandeirasQueFaltam}</Text>
            </View>
            <TouchableOpacity style={styles.botao} onPress={props.novoJogo}>
                <Text style={styles.tituloDoBotao}>Novo Jogo</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingHorizontal: 20
    },
    containerDaBandeira: {
        flexDirection: 'row'
    },
    botaoDaBandeira: {
        marginTop: 10,
        minWidth: 30
    },
    bandeiras: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5,
        marginLeft: 20
    },
    botao: {
        backgroundColor: '#999',
        padding: 5
    },
    tituloDoBotao: {
        fontSize: 20,
        color: '#DDD',
        fontWeight: 'bold'
    }
});