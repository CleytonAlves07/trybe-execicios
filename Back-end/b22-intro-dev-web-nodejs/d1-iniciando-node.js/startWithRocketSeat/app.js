const express = require('express');
const { randomUUID } = require('crypto');
const fs = require('fs');

const app = express();

app.use(express.json());

// app.get("/primeira-rota", (request, response) => {
//   return response.json({
//     message: "Acessou a primeira rota com nodemon",
//   });
// });

let products = [];

fs.readFile("products.json", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    products = JSON.parse(data);
  }
});
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
    id: randomUUID(16),
  }

  products.push(product);

  productFile();

  return response.json(product);
})

app.get("/products", (request, response) => {
  return response.json(products);
});

app.get("/products/:id", (request, response) => {
  const { id } = request.params;
  const product = products.find(product => product.id === id);
  return response.json(product);
});

app.put("/products/:id", (request, response) => {
  const { id } = request.params;
  const { name, price } = request.body;

  const productIndex = products.findIndex((product) => product.id === id);
  products[productIndex] = {
    ...products[productIndex],
    name,
    price,
  };

  productFile();

  return response.json({ message: "Produto alterado com sucesso" });

});

app.delete("/products/:id", (request, response) => {
  const { id } = request.params;

  const productIndex = products.findIndex((product) => product.id === id);

  products.splice(productIndex, 1);

  productFile();

  return response.json({ message: "Produto removido com sucesso" });
});

function productFile() {
  fs.writeFile("products.json", JSON.stringify(products), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Produto inserido!")
    }
  });
}

app.listen(4002, () => console.log('Servidor está rodando noa porta 4002'));