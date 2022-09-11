type Bird = {
  bird: string;
}

type expressao = {
  a: number;
  b: number;
} 

export function soma(sum: expressao) {
  console.log(`A soma de a + b é : ${sum.a + sum.b}`);
}

soma({ a: 169, b: 131})

type address = {
  pais: string;
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: string;
  complemento: string;
}

function endereco(end: address): void {
  console.log(`O cidadão mora no ${Object.values(end)}`);
}

endereco({
  pais: "Brasil",
  estado: 'Pernambuco',
  cidade: 'Olinda',
  bairro: 'Casa Caiada',
  rua: 'Marcos Freire',
  numero: '3717',
  complemento: 'prox à praia'
})