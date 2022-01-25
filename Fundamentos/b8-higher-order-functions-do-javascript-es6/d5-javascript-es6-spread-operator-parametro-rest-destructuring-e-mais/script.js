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