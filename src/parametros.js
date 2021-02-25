import {
    Dimensions
} from 'react-native'

const parametros = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, // Proporcao do painel superior na tela
    nivelDeDificuldade: 0.1,
    getLinhas() {
        const totalHeight = Dimensions.get('window').height
        const boardHeigth = totalHeight * (1 - this.headerRatio)
        return Math.floor(boardHeigth / this.blockSize)
    },
    getColunas() {
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blockSize)
    }
}

export default parametros