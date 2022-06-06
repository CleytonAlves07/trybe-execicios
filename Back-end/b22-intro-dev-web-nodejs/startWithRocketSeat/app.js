const express = require('express');
const { randomUUID } = require('crypto');


const app = express();

app.use(express.json());

// app.get("/primeira-rota", (request, response) => {
//   return response.json({
//     message: "Acessou a primeira rota com nodemon",
//   });
// });

const products = [];
// POST => Inserir um dado
// GET => Buscar um ou mais dados
// PUT => Alterar um dado
// DELETE => Remover um dado

// Body => Semrpe que eu quiser enviar dados para minha aplicação
// Params => /product/21345646721 <= Isso é um parametro de rota
// Query => /product?id=21314654653123134&value=123145646584

app.post("/products", (request, response) => {

  const { name, price } = request.body;
  
  const product = {
    name,
    price,
    id: randomUUID(),
  }

  products.push(product);

  return response.json(product);
})

app.get("/products", (request, response) => {
  return response.json(products);
});

app.get("/products/:id", (request, response) => {
  const { id } = request.params;
  const product = products.find(product => product.id === id);
  return response.json(product);
})

app.listen(4002, () => console.log('Servidor está rodando noa porta 4002'));