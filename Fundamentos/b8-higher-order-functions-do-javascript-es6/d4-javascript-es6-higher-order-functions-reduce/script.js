// const numbers = [32, 15, 38, 24, 15, 56, 100];

// const sumNumbers = numbers.reduce((result, number) => result + number);

// console.log(`A soma dos números: ${sumNumbers}`);

// const collection = [1, 2, 3, 4, 5];
// const collections = [1, 2, 3, 4, 5];

// const sumCollection = collections.reduce((result, number) => result + number);
// const subCollection = collections.reduce((result, number) => result - number);

// const getSum = (result, number) => {
//     console.log(result);
//     return result + number;
// };

// const sumNumbers = collection.reduce(getSum);
// console.log(sumNumbers);

// console.log(`Soma: ${sumCollection}`);
// console.log(`Subtração: ${subCollection}`);


// const numbers = [32, 15, 3, 2, -5, 56, 10];

// const getSum = (result, number) => {
//     console.log(result);
//     return result + number;
// };

// const sumNumbers = numbers.reduce(getSum, 100);
// console.log(sumNumbers);

// const numbers = [50, 85, -30, 113, 15];

// const biggerNumber = numbers.reduce((bigger, number) => ((bigger > number) ? bigger : number));
// const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

// const bigger = numbers.reduce(getBigger, 0);
// console.log(bigger);

// console.log(biggerNumber);

// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const sumEvens = numbers.reduce((result, number) => ((number % 2 === 0 ? result + number : result + 0)));

// console.log(sumEvens);

const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: 59 },
        { name: 'Português', nota: 80 },
        { name: 'Química', nota: 78 },
        { name: 'Biologia', nota: 92 },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 76 },
        { name: 'Português', nota: 90 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 80 },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 91 },
        { name: 'Português', nota: 85 },
        { name: 'Química', nota: 92 },
        { name: 'Biologia', nota: 90 },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 70 },
        { name: 'Português', nota: 70 },
        { name: 'Química', nota: 60 },
        { name: 'Biologia', nota: 50 },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 80 },
        { name: 'Português', nota: 82 },
        { name: 'Química', nota: 79 },
        { name: 'Biologia', nota: 75 },
      ],
    },
  ];

  const bestOfStudent = estudantes.reduce((result, bestNota) => (()))





