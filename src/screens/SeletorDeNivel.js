import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Modal
} from 'react-native';

export default (props) => {
    return (
        <Modal onRequestClose={props.cancelar}
            visible={props.visivel}
            animationType='slide'
            transparent={true}>
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.titulo}>Selecione o nível</Text>
                    <TouchableOpacity style={styles.botao, styles.facil} onPress={() => props.selecionarNivel(0.1)}>
                        <Text style={styles.tituloDoBotao}>Fácil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao, styles.normal} onPress={() => props.selecionarNivel(0.2)}>
                        <Text style={styles.tituloDoBotao}>Intermediario</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao, styles.dificil} onPress={() => props.selecionarNivel(0.3)}>
                        <Text style={styles.tituloDoBotao}>Dificil</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    container: {
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    botao: {
        marginTop: 10,
        padding: 5
    },
    tituloDoBotao: {
        fontSize: 20,
        color:'#EEE',
        fontWeight: 'bold'
    },
    facil: {
        backgroundColor: '#49b65d',
        padding: 5
    },
    normal: {
        backgroundColor: '#2765F7',
        padding: 5
    },
    dificil: {
        backgroundColor: '#F26337',
        padding: 5
    }
});