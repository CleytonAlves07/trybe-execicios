/* let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado',
};
diasDaSemana[1];
console.log(diasDaSemana['1']); */ 
//Exercise 1
// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: {
//         golden: 2, 
//         silver: 3
//     },
//     bestInTheWorld:[
//         2006,
//         2007,
//         2008,
//         2009,
//         2010,
//         2018,
//     ],
// };
// //Exercise 2 
// console.log(`A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade`);
// //Exercise 3 ok
// //Exercise 4
// console.log(`A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por 6 vezes em ${player.bestInTheWorld}.`);
// //Exercise 5
// console.log(`A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata.`);

// let cars =['Saab','Volvo', 'BMW'];
// for(let key in cars){
//     console.log(key,cars[key]);
// }

// let carros = {
//     type: 'Fiat',
//     model: '500',
//     color: 'white',
// };
// for(let key in carros){
//     console.log(key, carros[key]);
// }
// let food = ['hamburguer', 'bife', 'acarajé'];
// for(let key of food) {
//     console.log(key);
// };
//Exercicio 1 de fixação
// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge'
// };
// for(key in names){
//     console.log(`Olá, ${names[key]}`);
// };
//Exercicio 2 de fixação
// let carros = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
// };
// for(key in carros){
//     console.log(`${key} - ${carros[key]}`);
// };
// var statusCarro = 'desligado'
// var aceleracao = 0;
// var rotacaoDoVolante = 0;
// function ligarDesligar(){
//     if(statusCarro === 'desligado'){
//         statusCarro = 'ligado';
//     }else {
//         statusCarro = 'desligado';
//     }
//     return statusCarro;
// }
// function acelerar(incremento){
//     aceleracao += incremento;

//     return 'Acelerando a ' + aceleracao + 'm/s²';
// }
// function frear(decremento){
//     aceleracao += - decremento;

//     return 'Desacelerando para ' + aceleracao + 'm/s²';
// }
// function girarVolate(anguloRotacao){
//     rotacaoDoVolante = anguloRotacao;

//     return rotacaoDoVolante + 'º';
// }
// function bomDiaTryber(nome){
//     console.log(`Bom dia, ${nome}!`);
// }
// bomDiaTryber('Roberval');
// bomDiaTryber('Rubem');
// bomDiaTryber('Beth');
// 
// function soma(a, b){
//     return a+b;
// }

// console.log(soma(57,938));
// function maiorNum(primeiroNum,segundoNum){
//     if(primeiroNum>segundoNum){
//         return primeiroNum + ' é maior que ' + segundoNum;
//     }else if (segundoNum> primeiroNum) {
//         return segundoNum + ' é maior que ' + primeiroNum;
//     }else {
//         return 'Os números são iguais!';
//     }
// }
// console.log(maiorNum(9**3,12**2));

// Exercise Course - Part 1 - Object and For/In
let info = [
{
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota:'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
},
{
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'último MacPatinhas',
    recorrente: 'Sim'
}
];
//Print Welcome, Margarida
// console.log(`Welcome, ${info.personagem}!`);
// Insert new object 'recorrente' and value 'sim' and print all object
// console.log(info);
//Do a for/in that show all keys of the object.
// for(key in info){
//     console.log(key);
// }
//Do a new for/in tha show all values of the object
// for(key in info){
//     console.log(info[key]);
// }
// Include Tio Patinhas and print together Margarida
// let margarida = info[0];
// let patinhas = info[1];
// console.log(`${margarida['personagem']} e `);
// console.log(`${patinhas['personagem']}`);
// console.log(`${margarida['origem']} e`);
// console.log(`${patinhas['origem']}`);
// console.log(`${margarida['nota']} e `);
// console.log(`${patinhas['nota']}`);
// console.log(`${margarida['recorrente']} e `);
// console.log(`${patinhas['recorrente']}`);

// New object 
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};
// Acess the keys nome, sobrenome e titulo and print ...
let favoritos = leitor['livrosFavoritos'];
console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama ${favoritos.['titulo']} `);


