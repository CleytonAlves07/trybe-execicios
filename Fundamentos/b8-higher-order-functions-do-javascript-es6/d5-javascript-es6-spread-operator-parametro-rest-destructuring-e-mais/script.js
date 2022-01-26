// 8.5

// const carros = ['Gol', 'HB20', 'Focus'];
// const motos = ['Biz', 'R1'];

// const veiculos = ['Uno', 'Jeep', ...carros, ...motos];
// const veiculosGrandes = ['Caminhão', 'Jeep', 'ônibus', ...carros, ...motos];
// const veiculos2 = [...motos, ...carros];
// console.log(veiculos);
// console.log(veiculos2);
// console.log(veiculosGrandes);

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
//     ...pessoa,
//     ...conhecimentosTrybe,
//     esporte: 'Musculação',
// };
// // const pessoaTrybe = {
// //   ...pessoa,
// //   ...conhecimentosTrybe,
// //   esporte: 'Natação',
// // };
// console.log(pessoaTrybe);

// const numbers = [1, 2, 3];

// const newArray = [...numbers, 4, 5, 6, 7, 8, 9, 10,];
// // console.log(numbers);
// console.log(newArray);

// const spring = ['OUT', 'NOV', 'DEZ'];
// const summer = ['JAN', 'FEV', 'MAR'];
// const fall = ['ABR','MAI', 'JUN'];
// const winter = ['JUL', 'AGO', 'SET'];

// const monthsGoodToDive = [...summer, ...spring];
// // const months = [...summer, ... fall, ...winter, ...spring];
// // console.log(monthsGoodToDive);
// // console.log(months);
// console.log(...summer, ...spring);

// const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
// const imc = (peso, altura) => (peso/ (altura*altura)).toPrecision([1]);
// const patientCharles = [93, 1.70];
// const patientCleyton = [90, 1.85];
// const patientEli = [70, 1.65];

// console.log(`IMC Paciente Cleyton : ${imc(...patientCleyton)}`);
// console.log(`IMC Paciente Chales : ${imc(...patientCharles)}`);


// const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];
// console.log(Math.max(...randomNumbers));
// console.log(Math.min(...randomNumbers));
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
// const {address, occupation} = about;
// console.log(`Charles mora na: ${address}; e trabalha como: ${occupation}`);
// const customer = {...people,...about};
// console.log({...people,...about});
// console.log(people, about);
// const customer = {...people, ...about};
// console.log(customer);

// Faça uma lista com as suas frutas favoritas
// const specialFruit = ['Maçã', 'Melancia', 'Abacaxi', 'Hortelã' ];

// //Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['Leite condensado', 'Paçoca', 'Nutella'];

// const fruitSalad = (fruit, additional) => {
//     const allSalad = [...fruit, ...additional];
//     return allSalad;
// };
// console.log(fruitSalad(specialFruit, additionalItens));
// const fruitSalad = (fruit, additional) => {
//   const allInSalad = [...fruit, ...additional];
//   return allInSalad;
// };

// console.log(fruitSalad(specialFruit, additionalItens));

// function params(...args) {
//     console.log('parâmetros:', args);
//     return `Você passou ${args.length} parâmetros para a função.`;
// };
// console.log((params(10, 20, 30, 40, 50, 60)));
// const sum = (args) => args.reduce((accumulator, current) => accumulator * current, );
// console.log(sum([10, 20, 30, 40, 50, 60]));
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
//   seller: 'Casas Bahia',
// };
// const {name, price: precin, seller: ladrao} = product;
// console.log(`Venha conferir nossa ${name}, que custa apenas R$ ${precin}. Isso é preço de atacado no seu varejo. Você só encontra aqui nas ${ladrao}`);

// const { name, seller, price } = product;
// console.log(`Nome do produto:${name}`); 
// console.log(`Valor R$ ${price}`);
// console.log(`Nome do vendedor: ${seller}`);
// console.log(`A comissão: ${(price * 0.10).toFixed(2)} `);


// //definindo o objeto
// const character = {
//   name: 'Luke SkyWalker',
//   age: '53',
//   description: {
//     specieName: 'Human',
//     jedi: 'Não',
//   },
//   homeWorld: {
//     name: 'Tatooine',
//     population: '200000',
//   },
// };
// const {name: citizen, age: type, description: {specieName: race, jedi: sith}, homeWorld: {name: planet, population: census}} = character;

// console.log(`O cidadão ${citizen}, que tem ${type} anos é da raça ${race}, é um jedi? ${sith}. O ${citizen} mora no planeta ${planet} que tem ${census} habitantes`);
// const { name, age, description: {specieName: raça}, homeWorld: {name: planet, population}} = character;

// console.log(`O nome do cidadão é ${name}, a idade do cidadão é ${age}, a espécie do cidadão é ${raça}, o planeta do cidadão é ${planet}, a população onde o cidadão mora: ${population} pessoas`);

// const {name, age, homeWorld: {name: planetName}, description: {jedi}} = character;

// console.log(`Nome: ${name}, idade: ${age}, planeta: ${planetName}, é um Jedi? ${jedi}`);


// const daysOfWeek = {
//   workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
//   weekend: ['Saturday', 'Sunday'],
// };
// const {workDays, weekend} = daysOfWeek;
// const weekAllDays = [...workDays, ...weekend];
// console.log(`Os dias da semana são ${workDays}`);
// console.log(`Os dias que eu deveria estudar ${[workDays, weekend]}`);
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
// const [n1, n2, n3, n4, n5] = arrayCountries;

// console.log(`1 -${n1},2 -${n2}, O que vai dar ? ${n5}`);
// const [firstCountry, secondCountry, thirdCountry, fourCountry] = arrayCountries;

// console.log(`1 - ${firstCountry}; 2 - ${secondCountry}; 3 - ${thirdCountry}; 4 - ${fourCountry};`);
//                  [0]               [1]
// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
// const [saudacao, efetivacao = 'Chales === 10 no projeto!'] = saudacoes;

// console.log(efetivacao(saudacao));

// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// [comida, animal, bebida] = [bebida, comida, animal];
// console.log(comida, animal, bebida);

// let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// [,,, ...numerosPares] = numerosPares;
// console.log(numerosPares);

// const person = {
//     name: 'Chales',
//     lastName: 'Jr',
//     age: 34,
// };

// const {nationality = 'Brazilian'} = person;

// console.log(nationality);

// const position2d = [1.0, 2.0];
// const [x, y, z = 4, w = 5] = position2d;
// console.log(`A posição em 3D é: ${[...position2d, z]}`);
// console.log(x, y, z, w);

// const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

// const person = {
//   firstName: 'João',
//   lastName: 'Jr II',
// };

// const otherPerson = {
//   firstName: 'Ivan',
//   lastName: 'Ivanovich',
//   nationality: 'Russian',
// };

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));

// const newUser = (id, name, email) => {
//     return {
//         id,
//         name,
//         email,
//     };
// };
// console.log(newUser(54, 'isabella', 'isabela@exemplo.com'));

// const getPosition = (latitude, longitude) => ({latitude,longitude,});
  
//   console.log(getPosition(-19.8157, -43.9542));

// const greeting = (user) => console.log((`Welcome ${user}!`));
// const greeting = (user => {
//     const userDisplay = typeof user  === 'undefined' ? 'usuário' : user ;
//     console.log(`Welcome, ${userDisplay} !`);
// });
// greeting();