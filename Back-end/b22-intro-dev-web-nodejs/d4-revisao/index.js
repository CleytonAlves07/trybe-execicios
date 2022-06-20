// const operacoes = require('./soma');

// console.log(operacoes.soma(10, 15));

// console.log(operacoes.media(22, 66));

const fs = require('fs');

//1 Forma

// const leitura = () => {
//   const data = fs.readFile('arquivo.json', 'utf8', (error, data) => {
//     if (error) {
//       console.log(error.message)
//       return;
//     }
//     console.log(data);
//   });
// }

// 2 Forma
// const leitura = () => {
//   try {
//   const data = fs.readFileSync('arquivo.json', 'utf8');
//   console.log(data);
// } catch (err) {
//   console.error(err);
// }
// }

// 3 Forma assíncrona 

// async function xablau() {
//   try {
//     const data = await fs.readFile('arquivo.json', { encoding: 'utf8' })
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// xablau();
