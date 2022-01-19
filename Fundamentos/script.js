// var age;

// console.log(age); // undefined

// age = 20;

// const verifyIsNumber = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       throw new Error('Os valores devem ser numéricos');
//     }
//   };
  
//   const sum = (value1, value2) => {
//     try {
//       verifyIsNumber(value1, value2);
//       return value1 + value2;
//     } catch (error) {
//       throw error.message;
//     }
//   };
  
//   console.log(sum(2, '3'));

// const customer = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// let newKey = 'lastName';
// const lastName = 'Ferreira';
// customer[newKey] = lastName;
// newKey = 'fullName';
// const fullName = `${customer.firstName} ${customer.lastName}`;
// customer[newKey] = fullName;
// console.log(customer);

// const estruturaEmpresa = {
//   rh: 'Fulana',
//   financeiro: 'Ciclano',
//   vendas: 'Beltrano',
// };

// let newKey = 'contabilidade';
// const contabilidade = 'Ferreira';
// estruturaEmpresa[newKey] = contabilidade;
// newKey = 'contabilidade';
// const finacas = `${estruturaEmpresa.financeiro} e ${estruturaEmpresa.contabilidade}`;
// console.log(estruturaEmpresa);

// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };

// const student2 = {
//   Html: 'Bom',
//   Css: 'Ótimo',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Ótimo',
//   Git: 'Bom', // chave adicionada
// };

// console.log(`${Object.keys(student1)}: ${Object.values(student1)}`);

// const listSkills = (student) => {
//   const arrayOfSkills = Object.keys(student);
//   for(index in arrayOfSkills){
//     console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
//   }
// };

// console.log('Estudante 1');
// listSkills(student1);

// console.log('Estudante 2');
// listSkills(student2);

// const student = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkill: 'Ótimo',
// };

// const listSkillsValuesWithFor = (student) => {
//   const skills = [];
//   for(skill in student) {
//     skills.push(student[skill]);
//   }

//   return skills;
// };

// const listSkillsValuesWithValues = (student) => Object.values(student);

// const coolestTvShow = {
//   name: "BoJack Horseman",
//   genre: "adult animation",
//   createdBy: "Raphael Bob-Waksberg",
//   favoriteCharacter: "Princess Carolyn",
//   quote: "Princess Carolyn always lands on her feet.",
//   seasons: 6,
// };

// console.log(Object.entries(coolestTvShow));

// [
//   [ 'name', 'BoJack Horseman' ],
//   [ 'genre', 'adult animation' ],
//   [ 'createdBy', 'Raphael Bob-Waksberg' ],
//   [ 'favoriteCharacter', 'Princess Carolyn' ],
//   [ 'quote', 'Princess Carolyn always lands on her feet.' ],
//   [ 'seasons', 6 ]
// ]

// // Sem Object.values
// console.log(listSkillsValuesWithFor(student));

// // Com Object.values
// console.log(listSkillsValuesWithValues(student));

// const países = {
//   França: 'Paris',
//   Brasil: 'Brasília',
//   Espanha: 'Madrid',
//   Portugal: 'Lisboa',
// };
// const pairKeyValue = Object.entries(países);
// console.log(pairKeyValue);
// for(index in pairKeyValue) {
//   console.log('--------');
//   console.log('País:', pairKeyValue[index][0]);
//   console.log('Capital:', pairKeyValue[index][1]);
// };

// // A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino!

// Object.assign(destino, objeto1);
// Object.assign(destino, objeto1, objeto2);
// Object.assign(destino, objeto1, objeto2, objeto3, objeto4);

// const person = {
//   name: 'Alberto',
//   lastName: 'Gomes',
//   age: 20,
// };

// const info = {
//   age: 23,
//   job: 'engenheiro',
// };

// const family = {
//   children: ['Maria', 'João'],
//   wife: 'Ana',
// };

// Object.assign(person, info, family)
// console.log(person)

/* Output
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  children: [ 'Maria', 'João' ],
  wife: 'Ana'
  } */

//   const person = {
//     name: 'Roberto',
//   };
  
//   const lastName = {
//     lastName: 'Silva',
//   };
  
//   const clone = Object.assign(person, lastName);
  
//   console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
//   console.log(person); // { name: 'Roberto', lastName: 'Silva' }

//   clone.name = 'Maria';

// console.log('Mudando a propriedade name através do objeto clone')
// console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log('--------------');

// person.lastName = 'Ferreira';

// console.log('Mudando a propriedade lastName através do objeto person');
// console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }


// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };
// const student2 = {
//   Html: 'Bom',
//   Css: 'Ótimo',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Ótimo',
//   Git: 'Bom', // chave adicionada
// };

// student2.Redux = 'Muito ruim... sabe de nada';

// console.log(`Estudante 1`);
// for (let key of Object.entries(student1)) {
//   console.log(` ${key[0]} : ${key[1]}`)
// };
// console.log(`Estudante 2`);
// for(let key of Object.keys(student2)){
//   console.log(`${key} : ${student2[key]}`)
// }

// const assert = require('assert');

// assert.strictEqual(50, 50);
// assert.strictEqual(50, 80);

//Arrow function 
// const getMultiplier = multiplier => aNumber => aNumber * multiplier;
//Function simple
// function getMultiplier (multiplier) {
//   return (aNumber) => {
//     return aNumber * multiplier;
//   }
// }
// const double = getMultiplier(2);
// const triple = getMultiplier(3);
// const quadruple = getMultiplier(4);

// console.log(triple(12));

// const someGreeting = greeting => name => `Olá, ${name}! ${greeting}`;

// const loveGreeting = someGreeting('Bonitão do meu coração');
// const manoGreeting = someGreeting('firmeza, mano?');
// const countryGreeting = someGreeting('cê tá bão?');

// console.log(countryGreeting('Cleyton'));


//Exercise 1
// const newEmployees = (ids) => {
//   const employees = {
//     id1: ids('Pedro Guerra'), 
//     id2: ids('Luiza Drumond'), 
//     id3: ids('Carla Paiva'), 
//   }
//   return employees;
// };

// const workerGenerator = name => {
//   const email = name.toLowerCase().split(' ').join('');
//   return {name, email: `${email}@trybe.com`};
// }

// console.log(newEmployees(workerGenerator));

//Exercise 2
// const testNumber = (myNumber, number) => myNumber === number;
// const randomNumber = (myNumber, result) => {
//   const numberRandom = Math.floor(Math.random() * 5) + 1;
//   return result(myNumber, numberRandom) ? 'Parabéns você ganhou' : 'Tente novamente';
// }
// console.log(randomNumber(5, testNumber));,

//Exercise 3 

// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
// const compareAnswers = (rightAnswer, studentAnswer) => {
//   if (rightAnswer === studentAnswer) {
//     return 1;
//   } if (studentAnswer === 'N.A') {
//     return 0;
//   }
//   return -0.5;
// };

// const countPoints = (rightAnswers, studentAnswers, action) => {
//   let contador = 0;
//   for (let index = 0; index < rightAnswers.length; index += 1) {
//     const actionReturn = action(rightAnswers[index], studentAnswers[index]);
//     contador += actionReturn;
//   }
//   return `Resultado final: ${contador} pontos`;
// };

// console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));

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
