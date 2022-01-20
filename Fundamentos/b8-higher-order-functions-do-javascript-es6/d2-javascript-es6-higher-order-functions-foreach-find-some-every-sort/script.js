// const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
// arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
//   console.log('Cada elemento do array:', element);
//   console.log('Index, posição do elemento:', indexOfTheArray);
//   console.log('Array percorrido:', theEntireArray);
// });

// => ---------------
//   Cada elemento do array: josé
//   Index, posição do elemento: 0
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: 50
//   Index, posição do elemento: 1
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: 0.25
//   Index, posição do elemento: 2
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: { comida: 'Chocolate' }
//   Index, posição do elemento: 3
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]

// let listaDeAprovados = [
//   'joao@exemplo.com',
//   'maria@exemplo.com',
//   'joana@exemplo.com',
//   'roberto@exemplo.com'
// ];

// const enviarEmail = (email) => {
//   console.log(`Email para ${email} foi enviado com sucesso`);
// };
// listaDeAprovados.forEach((item, posicao, array) => {
//   enviarEmail(item);
//   console.log(`Sua posição na lista de aprovados é: ${posicao}`);
//   console.log(`A quantida de aprovados nessa turma: ${array.length}`);
// })

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.forEach((number) => {console.log(`${number} x 2 = ${number*2}`);});

// const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];
// names.forEach((name) => {console.log(name.toUpperCase());});

// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// const showEmailList = (email, i, array) => {
//   console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
//   console.log(`Usuário número ${i}`);
//   console.log(`Existem ${array.length} emails cadastrados!`);
// };

// emailListInData.forEach(showEmailList);

//Refatorado
// emailListInData.forEach((email) => {console.log(`O email ${email} está cadastrado em nosso banco de dados!`);});

// const numbers = [50, 40, 30, 80, 90];

// const firstBigger80 = numbers.find(number => number > 80);

// console.log(firstBigger80);

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const isEven = number => number % 2 === 0;

// console.log(isEven(22));

// const numbers = [19, 21, 30, 3, 45, 22, 15];
// const findDivisibleBy3And5 = numbers.find(number => number % 3 === 0 && number % 5 === 0);
// console.log(findDivisibleBy3And5);

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = names.find((name) => name.length === 5); 

// console.log(findNameWithFiveLetters);


// const musicas = [
//   { id: '31031685', title: 'Partita in C moll BWV 997' },
//   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ]
// function findMusic(id) {
//   // Adicione seu código aqui
//   return musicas.find((musica) => musica.id === id);
// }

// console.log(findMusic('31031685'))
// console.log(musicas.find((id) => id.id === '31031685'));
// const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

// console.log(verifyFirstLetter('J', listNames)); // true
// console.log(verifyFirstLetter('x', listNames)); // false

// const grades = {
//   portugues: 'Aprovado',
//   matematica: 'Reprovado',
//   ingles: 'Aprovado',
// };

// const verifyGrades = (studentGrades) => (
//   Object.values(studentGrades).every((grade) => grade === 'Aprovado')
// );

// console.log(verifyGrades(grades));

// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//   return names.some((key) => key === name);
// }

// console.log(hasName(names, 'Ana'));

// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// const verifyAges = (arr, minimumAge) => {
//   return people.every((key) => key.age <= minimumAge);
// }

// console.log(verifyAges(people, 18));

// const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
// food.sort();
// console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

// const points = [40, 100, 1, 5, 25, 10];
// points.sort((a, b) => a - b);
// console.log(points); // [1, 5, 10, 25, 40, 100]

// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// // people.sort((a, b) => a.age - b.age);
// people.sort((a, b) => b.age - a.age);

// console.log(people);
