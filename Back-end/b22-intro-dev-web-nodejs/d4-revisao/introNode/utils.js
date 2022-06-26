// const operacoes = require('./soma');

// console.log(operacoes.soma(10, 15));

// console.log(operacoes.media(22, 66));

const fs = require('fs/promises');

//1 Forma readFile

// const leitura = () => {
//   const data = fs.readFile('arquivo.json', 'utf8', (error, data) => {
//     if (error) {
//       console.log(error.message)
//       return;
//     }
//     console.log(data);
//   });
// }

// 2 Forma readFile
// const leitura = () => {
//   try {
//   const data = fs.readFileSync('arquivo.json', 'utf8');
//   console.log(data);
// } catch (err) {
//   console.error(err);
// }
// }

// 3 Forma assíncrona readFile

async function leitura() {
  try {
    const data = await fs.readFile('arquivo.json', { encoding: 'utf8' })
    return JSON.parse(data);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  leitura,
}

// xablau();

// Write síncrono

// const newUser = 'novo usuário 2'; 

// const escrita = () => {
//   try {
//     fs.writeFileSync('arquivo.json', newUser)
//     console.log('Incluido com sucesso!');
//   } catch (err) {
//     console.error(err);
//   }
// }

// escrita();


// Write assíncrono

// async function escrita() {
//   try {
//     const content = 'Teste write assíncrono';
//     await fs.writeFile('arquivo.json', content) 
//   } catch (err) {
//     console.log(err);
//   }
// }

// escrita();