// const test = (escopo) => {
//     if (escopo === true) {
//       let ifScope = `Não devo ser utilizada fora do meu escopo (if)ótimo, fui utilizada no escopo !`;
//       console.log(ifScope);
//     } else {
//       let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
//       console.log(elseScope);
//     }
//     console.log(`O que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
//   }

//   test(true);


// const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// const orderNumbers = () => {
//   oddsAndEvens[0] = 2;
//   oddsAndEvens[1] = 3;
//   oddsAndEvens[2] = 4;
//   oddsAndEvens[3] = 7;
//   oddsAndEvens[4] = 10;
//   oddsAndEvens[5] = 13;

//   return oddsAndEvens;
// }



// const sortedNumbers = orderNumbers(); //😉
// console.log(`Os números ${sortedNumbers} estão em ordem crescente!`);

let fatorialNumber = (number) => {
  let count = 1;
  for(let i = 2;i <= number; i += 1){
    count *= i;  
  }
  return count;
}
console.log(fatorialNumber(6));