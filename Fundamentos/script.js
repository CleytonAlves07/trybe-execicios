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

// 8.4

// const carros = ['Gol', 'HB20', 'Focus'];
// const motos = ['Biz', 'R1'];

// const veiculos = ['Uno', 'Jeep', ...carros, ...motos];
// const veiculos2 = [...motos, ...carros];
// console.log(veiculos);
// console.log(veiculos2);

// const pessoa = {
//   nome:'Cleyton',
//   idade: '32',
//   cidade: 'PE',
// };
// const conhecimentosTrybe = {
//   softSkills: true,
//   hardSkills: true,
//   trabalho: true,
// };

// const pessoaTrybe = {
//   ...pessoa,
//   ...conhecimentosTrybe,
//   esporte: 'Natação',
// };
// console.log(pessoaTrybe);

// const numbers = [1, 2, 3];

// const newArray = [ 4, 5, 6, 7, 8, 9, 10, ...numbers];
// console.log(numbers);
// console.log(newArray);

// const spring = ['OUT', 'NOV', 'DEZ'];
// const summer = ['JAN', 'FEV', 'MAR'];
// const fall = ['ABR','MAI', 'JUN'];
// const winter = ['JUL', 'AGO', 'SET'];

// const months = [...summer, ... fall, ...winter, ...spring];

// console.log(months);

// const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);

// const patientCleyton = [90, 1.85];
// const patientEli = [70, 1.65];

// console.log(`IMC Paciente Cleyton : ${imc(...patientCleyton)}`);
// console.log(`IMC Paciente Eli ${imc(...patientEli)}`);

// const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

// console.log(Math.max(...randomNumbers));
// console.log(Math.min(...randomNumbers));

// const people = {
//   id: 101,
//   name: 'Alysson',
//   age: 25,
// };

// const about = {
//   address: 'Av. Getúlio Vargas, 1000',
//   occupation: 'Developer',
// };

// const customer = {...people, ...about};
// console.log(customer);

// Faça uma lista com as suas frutas favoritas
// const specialFruit = ['kiwi', 'maçã', 'morango', 'melão', 'banana'];

// Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['leite', 'chocolate derretido', 'paçoca'];

// const fruitSalad = (fruit, additional) => {
//   const allInSalad = [...fruit, ...additional];
//   return allInSalad;
// };

// console.log(fruitSalad(specialFruit, additionalItens));

// function quantosParams(...args) {
//   console.log('parâmetros:', args);
//   return `Você passou ${args.length} parâmetros para a função.`;
// }
// console.log(quantosParams(0, 1, 2, 3, 4, 5));

// const sum = (...args) => args.reduce((accumalator, current) => accumalator + current, 0);
// console.log(sum(4, 7, 8, 9, 60));

// const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 44);
// console.log(sum(136, 7, 8, 9, 60));


// const product = {
//   name: 'Smart TV Crystal UHD',
//   price: 1899.05,
//   seller: 'Casas de Minas',
// };

// const { name, seller, price } = product;
// console.log(`Nome do produto:${name}`); 
// console.log(`Valor R$ ${price}`);
// console.log(`Nome do vendedor: ${seller}`);
// console.log(`A comissão: ${(price * 0.10).toFixed(2)} `);


// definindo o objeto
// const character = {
//   name: 'Luke SkyWalker',
//   age: '53',
//   description: {
//     specieName: 'Human',
//     jedi: true,
//   },
//   homeWorld: {
//     name: 'Tatooine',
//     population: '200000',
//   },
// };

// const { name, age, description: {specieName: raça}, homeWorld: {name: planet, population}} = character;

// console.log(`O nome do cidadão é ${name}, a idade do cidadão é ${age}, a espécie do cidadão é ${raça}, o planeta do cidadão é ${planet}, a população onde o cidadão mora: ${population} pessoas`);

// const {name, age, homeWorld: {name: planetName}, description: {jedi}} = character;

// console.log(`Nome: ${name}, idade: ${age}, planeta: ${planetName}, é um Jedi? ${jedi}`);


// const daysOfWeek = {
//   workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
//   weekend: ['Saturday', 'Sunday'],
// };

// const {workDays, weekend} = daysOfWeek;
// console.log(`Dias de trabalho: ${workDays}`);
// console.log(`Dias de descanso: ${weekend}`);
// console.log('Ou será que não?');

// const weekdays = [...workDays,...weekend];

// console.log(`Dias que realmente você trabalha: ${weekdays}`);

// const student = {
//   a: 'Maria',
//   b: 'Turma B',
//   c: 'Matematica',
// };

// const {a:name, b:turma, c:matéria} = student;

// console.log(`Nome: ${name}, Turma: ${turma}, Matéria: ${matéria}`);

// const product = {
//   name: 'Smart TV Crystal UHD',
//   price: '1899.05',
//   seller: 'Casas de Minas',
// };

// const combo = ({name, price, seller}) => {
//   console.log(`Superpromoção: ${name}, por apenas R$ ${price}, só aqui nas ${seller}`);
// };

// combo(product);


// const user = {
//   name: 'Maria',
//   age: 21,
//   nationality: 'Brazilian',
// };

// const jobInfos = {
//   profession: 'Software engineer',
//   squad: 'Rocket Landing Logic',
//   squadInitials: 'RLL',
// };
 
// const allInfos = {...user, ...jobInfos};
// const {name, age, nationality} = user;
// const {profession, squad, squadInitials} = jobInfos;

// console.log(`Nome: ${name}, idade: ${age}, nacionalidade: ${nationality}, Profissão: ${profession}, Empresa: ${squad}, Turma: ${squadInitials}`);

// const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
// const [firstCountry, secondCountry, thirdCountry, fourCountry] = arrayCountries;

// console.log(`1 - ${firstCountry}; 2 - ${secondCountry}; 3 - ${thirdCountry}; 4 - ${fourCountry};`);

// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
// const [saudacao, efetivacao] = saudacoes;

// console.log(efetivacao(saudacao));

// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// [comida, animal, bebida] = [bebida, comida, animal];
// console.log(comida, animal, bebida);

// let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// [,,, ...numerosPares] = numerosPares;
// console.log(numerosPares);