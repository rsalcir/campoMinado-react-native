const criarTabuleiro = (linhas, colunas) => {
    return Array(linhas).fill(0).map((_, linha) => {
        return Array(colunas).fill(0).map((_, coluna) => {
            return {
                linha, 
                coluna,
                aberto: false,
                marcadoComBandeira: false,
                minado: false,
                explodida: false,
                minasAoRedor: 0
            };
        });
    });
};

const espalharMinas = (campo, minasParaPlantar) => {
    const linhas = campo.length;
    const colunas = campo[0].length;
    const minasPlantadas = 0;
    while (minasPlantadas < minasParaPlantar) {
        const linhaSelecionada = parseInt(Math.random() * linhas, 10);
        const colunaSelecionada = parseInt(Math.random() * colunas, 10);
        if (!campo[linhaSelecionada][colunaSelecionada].minado) {
            campo[linhaSelecionada][colunaSelecionada].minado = true;
            minasPlantadas++;
        }
    }
};

const criarTabuleiroComMinas = (linhas, colunas, minasParaPlantar) => {
    const tabuleiro = criarTabuleiro(linhas, colunas);
    espalharMinas(tabuleiro, minasParaPlantar);
    return tabuleiro;
};

export { criarTabuleiroComMinas }