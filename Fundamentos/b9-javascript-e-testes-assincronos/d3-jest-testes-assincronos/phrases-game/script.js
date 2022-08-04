const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];

const retornoMap = nomes.map((nomeAtual) => {
    // console.log(nomeAtual);
    return nomeAtual.toUpperCase();
})
console.log(retornoMap);



const retornoMapLow = nomes.map((nomeAtual) =>  nomeAtual.toLowerCase())
    .filter((element) => element === 'Maria' ? 'Maria esta aqui' : 'Maria não está aqui!');
console.log(retornoMapLow);