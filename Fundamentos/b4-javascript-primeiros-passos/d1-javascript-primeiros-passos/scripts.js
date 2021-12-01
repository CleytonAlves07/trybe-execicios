//Exercício 1
const a = 16;
const b = 8;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
//Exercício 2
const a = 10;
const b = 12;
if (a>b) {
    console.log(`O valor de a que é ${a} é maior que o valor de b que é ${b}`);
} else {
    console.log(`O valor de b que é ${b} é maior que o valor de a que é ${a}`);
}
//Exercício 3
const a = 29;
const b = 123;
const c = 234;
if (a>b && a>c) {
    console.log(`O valor de a (${a}) é maior que b e c`);
} else if (b>a && b>c) {
    console.log(`O valor de b (${b} é maior que a e c)`);
} else {
    console.log(`O valor de c (${c}) é maior que a e b`);
}
//Exercício 4
const numero = 34;
if (numero>0) {
    console.log("Positive");
} else if (numero<0) {
    console.log("Negative");
} else {
    console.log("Zero");
}
//Exercício 5
let angulo1 = 50;
let angulo2 = 45;
let angulo3 = 85;
let soma = angulo1+angulo2+angulo3;
if(soma === 180){
    console.log(`É um triângulo, pois a soma dos 3 ângulos (${soma}) é igual a 180!`);
} else {
    console.log(`Não é um triângulo!`);
}
//Exercício 6
let pieceXadrez = 'QUEEN';
let piece = pieceXadrez.toLowerCase();
if(piece == "king"){
    console.log(`The ${piece} can move to left, to right, to forward or backwards (if have space for this!)`);
}else if(piece == 'queen') {
    console.log(`The ${piece} can move in all directions.`);
}else if(piece == 'rock') {
    console.log(`The ${piece} can move from the sideways, to forward or backwards`);
}else if (piece == "bishop") {
    console.log(` The ${piece} can move from diagonal, but not forward or sideways`)
}else if (piece == 'knight') {
    console.log(`The ${piece} move two squares in one direction and then turn and goes one in another direction`)
}else if (pieceXadrez == 'pawn'){
    console.log(`The ${pieceXadrez} move one square forward each move`)
}else {
    console.log(`It's not a piece of Xadrez. Would you mind to tring again? `)
}
//Exercise 7
let note = 65;
if(note>=90){
    console.log(`Your note is ${note}.It's the same A concept!`)
}else if(note>=80){
    console.log(`Your note is ${note}.It's the same B concept!`)
}else if(note>=70){
    console.log(`Your note is ${note}.It's the same C concept!`)
}else if(note>=60){
    console.log(`Your note is ${note}.It's the same D concept!`)
}else if (note>=50){
    console.log(`Your note is ${note}.It's the same E concept!`)
}else {
    console.log(`Your note is ${note}.It's the same F concept!`)
}
//Exercise 8
let numbers = [];
for(let c=0;c<3;c+=1){
    numbers.push(Math.floor(Math.random() * 500));
    if(numbers[c]%2 == 0 && numbers[c+1]%2==0 && numbers[c+2]%2==0){
    console.log(`${numbers} True`);
    }else {
        console.log(`${numbers} False`)
    }
}
//Exercise 9
let numbers = [];
for(let c=0;c<3;c+=1){
    numbers.push(Math.floor(Math.random() * 500));
    if(numbers[c]%2 == 0 && numbers[c+1]%2==0 && numbers[c+2]%2==0){
        console.log(`${numbers} False`);
    }else {
        console.log(`${numbers} True`);
    }
}
//Exercise 10

let custoProduto = prompt("Informe o custo do produto: ", );
let valorVenda = prompt("Informe o valor de venda: ", );
let result = (Number(custoProduto)+(Number(custoProduto)*0.2));
if(custoProduto<=0 || valorVenda<=0){
    alert("Os valores precisam ser maiores que 0!");
}else {
    alert(`O lucro desse produto é de R$${((Number(valorVenda)-Number(result)*1000))} reais`);
}
//Exercise 11
let INSS1 = 0.08;
let INSS2 = 0.09;
let INSS3 = 0.11;
let salarioBruto = prompt("Infome seu salário bruto: ", );
Number(salarioBruto);
let salarioBase = 0;
Number(salarioBase);
let salarioLiquido = 0;
Number(salarioLiquido);
if(salarioBruto <= 1556.94){
    salarioBase = salarioBruto-(salarioBruto*INSS1);
}else if(salarioBruto >=1556.95 && salarioBruto <=2594.92){
    salarioBase = salarioBruto-(salarioBruto*INSS2);
}else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    salarioBase = salarioBruto-(salarioBruto*INSS3);
}else if(salarioBruto > 5189.82){
    salarioBase = salarioBruto-(570.88);
}else if(salarioBase<=0){
    console.log(`[Erro] O salário precisa ser maior que 0!`);
}
let IR1 = 0.075;
let IR2 = 0.15;
let IR3 = 0.225;
let IR4 = 0.275;
if(salarioBase <=1903.98){
    salarioLiquido = salarioBase;
}else if(salarioBase>=1903.99 && salarioBase<=2826.65) {
    salarioLiquido = (salarioBase) - ((salarioBase*IR1)-142.80);
}else if(salarioBase>=2826.66 && salarioBase<=3751.05) {
    salarioLiquido = salarioBase - ((salarioBase*IR2)-354.80);
}else if(salarioBase>=3751.06 && salarioBase<=4664.68) {
    salarioLiquido = salarioBase - ((salarioBase*IR3)-636.13);
}else if(salarioBase>4664.68) {
    salarioLiquido = salarioBase - ((salarioBase*IR4)-869.36);
}
alert(`O Salário base é R$ ${salarioBase}`);
alert(`O Salário liquido é R$ ${salarioLiquido}`);
alert(`A diferença entre o salário bruto R$ ${salarioBruto} e o salário líquido R$ ${salarioLiquido} é de R$ ${salarioBruto-salarioLiquido}`);
