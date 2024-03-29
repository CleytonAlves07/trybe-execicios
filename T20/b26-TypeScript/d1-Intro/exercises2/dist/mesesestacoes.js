"use strict";
// ./index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const meses_1 = __importDefault(require("./meses"));
const estacoes_1 = __importDefault(require("./estacoes"));
const monthsNames = Object.values(meses_1.default);
const choiceMonth = readline_sync_1.default.keyInSelect(monthsNames, "Escolha um mês do ano");
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária
const seasonsSouth = {
    [estacoes_1.default.OUTONO]: [meses_1.default.MARCO, meses_1.default.ABRIL, meses_1.default.MAIO, meses_1.default.JUNHO],
    [estacoes_1.default.INVERNO]: [meses_1.default.JUNHO, meses_1.default.JULHO, meses_1.default.AGOSTO, meses_1.default.SETEMBRO],
    [estacoes_1.default.PRIMAVERA]: [meses_1.default.SETEMBRO, meses_1.default.OUTUBRO, meses_1.default.NOVEMBRO, meses_1.default.DEZEMBRO],
    [estacoes_1.default.VERAO]: [meses_1.default.DEZEMBRO, meses_1.default.JANEIRO, meses_1.default.FEVEREIRO, meses_1.default.MARCO],
};
// Criamos um objeto onde suas chaves são as estações
// e seus valores são os meses. Note abaixo um segundo
// objeto onde, sendo do hemisfério oposto, as estações
// são opostas também
const seasonsNorth = {
    [estacoes_1.default.PRIMAVERA]: seasonsSouth[estacoes_1.default.OUTONO],
    [estacoes_1.default.VERAO]: seasonsSouth[estacoes_1.default.INVERNO],
    [estacoes_1.default.OUTONO]: seasonsSouth[estacoes_1.default.PRIMAVERA],
    [estacoes_1.default.INVERNO]: seasonsSouth[estacoes_1.default.VERAO],
};
const hemispheres = {
    "Norte": seasonsNorth,
    "Sul": seasonsSouth
};
const choiceHemisphere = readline_sync_1.default.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária
const month = Object.values(meses_1.default)[choiceMonth];
const hemisphere = Object.keys(hemispheres)[choiceHemisphere];
console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n${hemisphere}`);
console.log(`Estações:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    // São os meses de cada estação. Caso esteja
    // incluído em mais de uma estação, o console
    // abaixo irá adicionar
    if (months.includes(month))
        console.log(seasons);
});
