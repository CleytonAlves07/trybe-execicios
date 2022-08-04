// const getMultiplier = multiplier => aNumber => multiplier * aNumber;
// const randomNumber = getMultiplier(Math.floor(Math.random() * 1000 )+1);
// console.log(randomNumber(2));
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


// console.log(vovoGreeting('Rafael'));


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

const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];

//   function authorBornIn1947() {
//     return books.find(book => book.author.birthYear === 1947).author.name;
//   };

//   console.log(authorBornIn1947());

function smallerName() {
    let nameBook;
    books.forEach((book) => {
        if (!nameBook || book.name.length < nameBook.length){
            nameBook = book.name;
        }
    });
    return nameBook;
  }

console.log(smallerName());
