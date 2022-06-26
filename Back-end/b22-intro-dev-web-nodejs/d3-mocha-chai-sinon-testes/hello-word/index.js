const readline = require('readline-sync');
const calc = require('./calculadora');

console.log('Calculadora Simples');

const num1 = readline.questionInt('Digite um número:')
const op = readline.question('Informe a operação:')
const num2 = readline.questionInt('Digite outro número:') 

switch (op) {
  case '+':
    calc.sum(num1,num2)
    break;
  case '-':
    calc.sub(num1, num2)
    break;
  case '*':
    calc.mul(num1, num2)
    break;
  case '/':
    calc.div(num1, num2)
    break;
  default:
    console.log('Volta e faz de novo... algo deu errado ! ')
}
// console.log("Hello world!");

// const name = readline.question('Qual o seu nome?')
// const age = readline.questionInt('Qual sua idade?')
// const mail = readline.questionEMail('Qual seu email?')

// console.log(`Olá, ${name}! Você tem ${age} anos e seu email é ${mail}`);
