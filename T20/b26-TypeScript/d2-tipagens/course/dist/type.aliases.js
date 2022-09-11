"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.soma = void 0;
function soma(sum) {
    console.log(`A soma de a + b é : ${sum.a + sum.b}`);
}
exports.soma = soma;
soma({ a: 169, b: 131 });
function endereco(end) {
    console.log(`O cidadão mora no ${Object.values(end)}`);
}
endereco({
    pais: "Brasil",
    estado: 'Pernambuco',
    cidade: 'Olinda',
    bairro: 'Casa Caiada',
    rua: 'Marcos Freire',
    numero: '3717',
    complemento: 'prox à praia'
});
