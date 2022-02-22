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

// const greenting = (user = 'usuário esquecido') => console.log(`Welcome, ${user}!`);

// greenting();

// const multiply = (number, value = 1) => {
//     return number * value;
//   };
  
//   console.log(multiply(8));


//9.1

// setTimeout(() => {
//     console.log('Comprar parafusos') // Comprar parafusos
//     console.log('Adicionar ao estoque') // Adicionar ao estoque
//   }, 2000);
  
//   console.log('1 - Receber roda'); // 1 - Receber roda
//   console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
//   console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro

// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// pushNumber(numbers, 1);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// console.log(numbers);


// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// setTimeout(() => pushNumber(numbers, 1), 3000);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// console.log(numbers); // O retorno é [2, 3]

// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// setTimeout(() => pushNumber(numbers, 1), 3000);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// setTimeout(() => console.log(numbers), 3000);

// const despesasMensal = (renda, despesas, callback) => {
//     const despesaTotal = callback(despesas);
//     const saldoFinal = renda - despesaTotal;

//     console.log(`Balaço do mês:
//     Recebido: R$${renda},00
//     Gastos: R$${despesaTotal},00
//     Saldo: R$${saldoFinal}`);
// };

// const somaDespesas = (despesas) => {
//     const custoItem = despesas.map((item) => Object.values(item));
//     const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
//     return despesaTotal;
//   };
  
//   // acc é a sigla para accumulator (acumulador)
//   // curr é a sigla para current (valor atual)
  
//   despesaMensal(renda, despesas, somaDespesas);

// // Declaramos nossa variável de despesas
// const despesas = [
//     {
//       gym: 99,
//     },
//     {
//       ifood: 200,
//     },
//     {
//       phone: 60,
//     },
//     {
//       internet: 100,
//     },
//   ];
  
//   // Declaramos nossa renda
//   const renda = 1000;
  
//   const despesaMensal = (renda, despesas, callback) => {
//     // Definimos que a despesa total é igual ao valor retornado pela função callback (que é o parâmetro da nossa função)
//     // que vai receber nosso parâmetro/variável "despesas"
//     const despesaTotal = callback(despesas);
//     // Definimos nosso saldo final, que é nossa renda - nossa despesa total
//     const saldoFinal = renda - despesaTotal;
  
//     console.log(`Balanço do mês:
//       Recebido: R$${renda},00
//       Gasto: R$${despesaTotal},00
//       Saldo: R$${saldoFinal},00 `);
//   };
  
//   // Definimos nossa função que será passada como parâmetro
//   // essa função recebe o parâmetro despesas a partir da função principal despesaMensal
//   const somaDespesas = (despesas) => {
//     // Separamos cada item do nosso array de despesas
//     // e fazemos um reduce para somar os valores
//     const custoItem = despesas.map((item) => Object.values(item));
//     const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
//     return despesaTotal;
//   };
  
//   // Executamos a função principal com as variáveis renda, despesas
//   // e a nossa função somaDespesas
//   // callback = somaDespesas
//   despesaMensal(renda, despesas, somaDespesas);
  
//   // Balanço do mês:
//   //     Recebido: R$1000,00
//   //     Gasto: R$459,00
//   //     Saldo: R$541,00

// Definição da função userFullName
// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;

// // Definição da função getUser
// const getUser = (param) => {
//   const userToReturn = {
//     firstName: "Ivan",
//     lastName: "Ivanovich",
//     nationality: "Russian"
//   };
//   // Retornamos nosso parâmetro, que será uma função (callback)
//   return param(userToReturn);
// };

// // Chamada/execução da função getUser, que vai receber como parâmetro nossa função userFullName.
// getUser(userFullName);

// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
// const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const getUser = (getSomething) => {
//   const userToReturn = {
//     firstName: "Ivan",
//     lastName: "Ivanovich",
//     nationality: "Russian"
//   };
//   // Insira o retorno da função `getUser`
//   return getSomething(userToReturn);
//   +
// };

// console.log(getUser(userFullName)); // complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich"
// console.log(getUser(userNationality)); // complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian"

// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
// const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

// const getUser = (callback) => {
//   setTimeout(() => {
//     const user = {
//       firstName: "Ivan",
//       lastName: "Ivanovich",
//       nationality: "Russian",
//     };
//     // Retorne a `callback` passada como parâmetro na função `getUser`
//     // Dica: você pode manter o `console.log()`
    
//     console.log(callback(user));
//   }, delay());
// };

// console.log(getUser(userFullName)); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
// console.log(getUser(userNationality)); // deve imprimir "Ivan is Russian" depois de um certo tempo

// const countryName = ({ name }) => console.log(`Returned country is ${name}`);
// const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

// const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

// const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

// const getCountry = (onSuccess, callback) => {
//   setTimeout(() => {
//     const didOperationSucceed = Math.random() >= 0.5;
//     if(didOperationSucceed) {
//       const country = {
//         name: "Brazil",
//         hdi: 0.759,
//         currency: "Real",
//       };
//       onSuccess(country);
//     } else {
//       const errorMessage = "Country could not be found";
//       return callback(errorMessage);
//     }
//   }, delay());
// };

// // Deve imprimir "Returned country is Brazil" no sucesso ou "Error getting country: Country could not be found" em caso de falha
// getCountry(countryName, printErrorMessage);

// // Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em caso de falha
// getCountry(countryCurrency, printErrorMessage);

// const people = [
//   {id: 3, nome: 'Luiz' , age:24},
//   {id: 2, nome: 'Maria' , age:26},
//   {id: 1, nome: 'Helena' , age:28},
// ];

// const newPeople = new Map();
// for (const pessoa of people) {
//   const { id } = pessoa;
//   newPeople.set(id, {...pessoa});
// }

// console.log(newPeople.get(1));

// 9.2

const jsonInfo = `{
    "muitasEmpresasUsam": [
      "Google",
      "Twitter",
      "Facebook",
      "etc..."
    ],
    "temVariasVantagens": [
      "Legível",
      "Fácil de usar",
      "Leve",
      "Popular",
      "Versátil"
    ],
    "muitasLinguagensDaoSuporte": [
      "Python",
      "C",
      "C++",
      "Java",
      "PHP"
    ]
  }`;
  
  const usoJSONPorque = JSON.parse(jsonInfo);
  
  const corporationsList = document.getElementById('corporations-used-by');
  const advantagesList = document.getElementById('advantages');
  const languagesList = document.getElementById('languages-used-by');
  
  usoJSONPorque.muitasEmpresasUsam.map((empresa) => {
    const newLi = document.createElement('li');
    newLi.innerText = empresa;
    corporationsList.appendChild(newLi);
  });
  
  usoJSONPorque.temVariasVantagens.map((vantagens) => {
    const newLi = document.createElement('li');
    newLi.innerText = vantagens;
    advantagesList.appendChild(newLi);
  });
  
  usoJSONPorque.muitasLinguagensDaoSuporte.map((linguagens) => {
    const newLi = document.createElement('li');
    newLi.innerText = linguagens;
    languagesList.appendChild(newLi);
  });

