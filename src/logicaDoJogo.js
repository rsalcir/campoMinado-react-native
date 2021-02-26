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
    let minasPlantadas = 0;
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

const clonarTabuleiro = tabuleiro => {
    return tabuleiro.map(linhas =>{
        return linhas.map(campo =>{
            return {... campo};
        });
    });
}

const obterVizinhos = (tabuleiro, linhaSelecionada, colunaSelecionada) => {
    const vizinhos = [];
    const linhas = [linhaSelecionada -1, linhaSelecionada, linhaSelecionada + 1];
    const colunas = [colunaSelecionada -1, colunaSelecionada, colunaSelecionada + 1];

    linhas.forEach(linha => {
        colunas.forEach(coluna => {
            const diferente = linha !== linhaSelecionada || coluna !== colunaSelecionada;
            const linhaValida = linha >= 0 && linha < tabuleiro.length;
            const colunaValida = coluna >=0 && coluna < tabuleiro[0].length;
            if(diferente && linhaValida && colunaValida) {
                vizinhos.push(tabuleiro[linha][coluna]);
            }
        });
    });
    return vizinhos;
}

const vizinhancaSegura = (tabuleiro, linha, coluna) => {
    const seguro = (resultado, vizinho) => resultado && !vizinho.minado;
    return obterVizinhos(tabuleiro, linha, coluna).reduce(seguro, true);
}

const abrirCampo = (tabuleiro, linha, coluna) => {
    const campo = tabuleiro[linha][coluna];
    if(!campo.aberto) {
        campo.aberto = true;
        if(campo.minado){
            campo.explodida = true;
        } else if(vizinhancaSegura(tabuleiro, linha, coluna)) {
            obterVizinhos(tabuleiro, linha, coluna)
            .forEach(vizinho => abrirCampo(tabuleiro, vizinho.linha, vizinho.coluna));
        } else {
            const vizinhos = obterVizinhos(tabuleiro, linha, coluna);
            campo.minasAoRedor = vizinhos.filter(vizinho => vizinho.minado).length;
        }
    }
}

const campos = tabuleiro => [].concat(...tabuleiro);

const temExplosao = tabuleiro => campos(tabuleiro).filter(campo => campo.explodida).length > 0;

const pendente = campo => (campo.minado && !campo.marcadoComBandeira) || (!campo.minado && !campo.aberto);

const ganhouOJogo = tabuleiro => campos(tabuleiro).filter(pendente).length === 0;

const exibirMinas = tabuleiro => campos(tabuleiro).filter(campo => campo.minado)
    .forEach(campo => campo.aberto = true);

const inverterABandeira = (tabuleiro, linha, coluna) => {
    const campo = tabuleiro[linha][coluna];
    campo.marcadoComBandeira = !campo.marcadoComBandeira;
}

const bandeirasJaUtilizadas = tabuleiro => campos(tabuleiro).filter(campo => campo.marcadoComBandeira).length;

export { 
    criarTabuleiroComMinas,
    clonarTabuleiro,
    abrirCampo,
    temExplosao,
    ganhouOJogo,
    exibirMinas,
    inverterABandeira,
    bandeirasJaUtilizadas
}
