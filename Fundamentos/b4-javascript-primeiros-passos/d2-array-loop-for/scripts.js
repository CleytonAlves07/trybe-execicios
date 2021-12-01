//Exercicios do Corse!
let taskList = ['Tomar café','Reunião','Brincar com o cachorro'];
let searchForFirstTask = taskList[0];
let searchForLastTask = taskList[taskList.length -1];
let indexOfTask = taskList.indexOf('Reunião')

taskList.push('Fazer execícios da Trybe')
taskList.unshift('Acordar mais cedo');
taskList.pop();
taskList.shift();

console.log(taskList);
console.log(indexOfTask);

//Exercício 1 - Couser
let menu = ['Home', 'Serviços', 'Portifólio', 'Links'];
let menuServices = menu.indexOf('Serviços');

console.log(menuServices);
//Exercício 2 - Couser
let menu = ['Home','Serviços', 'Portifólios', 'Links'];
let indexOfPortifolio = menu.indexOf('Portifólios');
console.log(indexOfPortifolio);

//Exercício 3 - Couser
let menu = ['Home', 'Serviços', 'Portifólio', 'Links'];
menu.push('Contato');

console.log(menu);

let tabuada = 9;
for(let i=0;i<11;i++) {
    console.log(`${tabuada} x ${i} = ${tabuada*i}`);
}
let listaDeNomes = ['Joana', 'Maria', 'Lucas'];
for(let i=0;i<listaDeNomes.length;i+=1){
    console.log(`Olá, ${listaDeNomes[i]} !! Seja muito bem vindo(a)`);
}

let cars = ['Saab','Volvo', 'BMW'];
for(let i=0;i<cars.length;i+=1){
    console.log(cars[i]);
}
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for(let i=0;i<groceryList.length;i+=1){
    console.log(groceryList[i]);
}
let numeros = [1, 2, 3, 4, 5];
for(let numero of numeros){
    console.log(numero);
}
let word = 'Hello';
for(let letter of word) {
    console.log(letter);
}

let arrOfNumbers =[10, 20, 30];
for(let sum of arrOfNumbers){
    sum +=1;
    console.log(sum);
}
let names = ['João','Maria','Antônio','Margarida'];
for(let name of names){
    console.log(`Olá, ${name}!`);
}



//Exercicio 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//Percorrer o array imprimindo cada elemento
for(let i=0;i<numbers.length;i+=1){
    console.log(numbers[i]);
}
//Exercicio 2
//Somar todo o array e imprimir o resultado
let soma = 0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let i=0;i<numbers.length;i+=1){
    soma += numbers[i];
}
console.log(`A soma dos números do array numbers é:  ${soma}`);
//Exercicio 3
let soma = 0;
let mediaAritmetica = 0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let i=0;i<numbers.length; i+=1){
    soma+=numbers[i];
}
mediaAritmetica = (soma/numbers.length);
console.log(`A média aritmética dos números contidos no array é: ${mediaAritimetica}`);
//Exercicio 4
let soma = 0;
let mediaAritmetica = 0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let i=0;i<numbers.length; i+=1){
    soma+=numbers[i];
}
mediaAritmetica = (soma/numbers.length);
if(mediaAritmetica > 20){
    console.log(`A média aritmética (${mediaAritmetica}) é maior que 20`);
}else {
    console.log(`A média aritmética (${mediaAritmetica}) é menor que 20`);
}
//Exercicio 5
let maiorNumero = 0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let i=0;i<numbers.length;i+=1){
    if(maiorNumero<numbers[i]){
        maiorNumero = numbers[i];
    }
}
console.log(`O maior número desse array é: ${maiorNumero}`);
//Exercicio 6
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let i=0;i<numbers.length;i+=1){
    if(numbers[i]%2==1){
        console.log(numbers[i]);
    }
}
//Exercicio 7
let smallerNumber = 999;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let i=0;i<numbers.length;i+=1){
    if(numbers[i]<smallerNumber){
        smallerNumber = numbers[i];
    }
}
console.log(`The smaller number of this array is: ${smallerNumber}`);
//Exercise 8
let lastNumber = 0;
for(let i=0;i<=25;i+=1){
    lastNumber = i;
}
console.log(`The last number of this array is: ${lastNumber}`);
//Exercise 9
let splitFor2 = 0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let i=0;i<numbers.length;i+=1){
    splitFor2 = (numbers[i]/2);
    console.log(splitFor2);
}

