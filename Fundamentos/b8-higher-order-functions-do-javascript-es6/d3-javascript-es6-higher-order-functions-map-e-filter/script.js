//Dia 8.3

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const isOdd = numbers.filter((number) => number % 2 !== 0);
// console.log(`Números ímpares: ${isOdd}`)


// const isEven = numbers.filter((number) => number % 2 === 0);
// console.log(`Números pares: ${isEven}`);

// const objPeople = [
//   {name: 'José', age: 21},
//   {name: 'Lucas', age: 19},
//   {name: 'Maria', age: 16},
//   {name: 'Gilberto', age: 18},
//   {name: 'Victor', age: 15},
// ];

// const verifyAgeDrive = (arrayofPeople) => (
//   arrayofPeople.filter((people) => (people.age < 18))
// );

// console.log(verifyAgeDrive(objPeople));


// let listDePessoasAprovadas = [
//     'ada@exemplo.com',
//     'joao@exemplo.com',
//     'guilherme@exemplo.com',
//     'breno@exemplo.com',
//     'rafael@exemplo.com',
//     'diogo@exemplo.com',
// ];

// const enviarEmail = (objetoEmail) => {
//     console.log(`Email para ${objetoEmail.email} com a nota ${objetoEmail.nota} enviado com sucesso!`);
// };

// let listaDeEmails = listDePessoasAprovadas.map((email) => {
//     return { email: email, nota: 10};
// });

// listaDeEmails.forEach((objetoEmail) => enviarEmail(objetoEmail));

// const persons = [
//     { firstName: 'Maria', lastName: 'Ferreira' },
//     { firstName: 'João', lastName: 'Silva' },
//     { firstName: 'Antonio', lastName: 'Cabral' },
// ];

// const fullNames = persons.map((person, i) => `${i+1} - ${person.firstName} ${person.lastName}`);
// console.log(fullNames);

// const numbers = [1, 2, 3, 4, -5];

// const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

// console.log(negativeNumbers);


// const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
// const prices = [2.99, 3.99, 1.5, 2];

// const listProducts = products.map((product, i) => `${product}: ${prices[i]}`);

// console.log(listProducts);

// const estudantes = [
//     {
//       nome: 'Jorge',
//       sobrenome: 'Silva',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: 67 },
//         { name: 'Português', nota: 79 },
//         { name: 'Química', nota: 70 },
//         { name: 'Biologia', nota: 65 },
//       ],
//     },
//     {
//       nome: 'Mario',
//       sobrenome: 'Ferreira',
//       idade: 15,
//       turno: 'Tarde',
//       materias: [
//         { name: 'Matemática', nota: '59' },
//         { name: 'Português', nota: '80' },
//         { name: 'Química', nota: '78' },
//         { name: 'Biologia', nota: '92' },
//       ],
//     },
//     {
//       nome: 'Jorge',
//       sobrenome: 'Santos',
//       idade: 15,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: '76' },
//         { name: 'Português', nota: '90' },
//         { name: 'Química', nota: '70' },
//         { name: 'Biologia', nota: '80' },
//       ],
//     },
//     {
//       nome: 'Maria',
//       sobrenome: 'Silveira',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: '91' },
//         { name: 'Português', nota: '85' },
//         { name: 'Química', nota: '92' },
//         { name: 'Biologia', nota: '90' },
//       ],
//     },
//     {
//       nome: 'Natalia',
//       sobrenome: 'Castro',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: '70' },
//         { name: 'Português', nota: '70' },
//         { name: 'Química', nota: '60' },
//         { name: 'Biologia', nota: '50' },
//       ],
//     },
//     {
//       nome: 'Wilson',
//       sobrenome: 'Martins',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: '80' },
//         { name: 'Português', nota: '82' },
//         { name: 'Química', nota: '79' },
//         { name: 'Biologia', nota: '75' },
//       ],
//     },
//   ];

//   const allNameStudents = estudantes.filter((estudante) =>(estudante.turno == 'Manhã')).map((estudante) => `${estudante.nome} ${estudante.sobrenome}`);

//   console.log(allNameStudents);




  