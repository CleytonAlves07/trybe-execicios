const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number);

console.log(`A soma dos números: ${sumNumbers}`);