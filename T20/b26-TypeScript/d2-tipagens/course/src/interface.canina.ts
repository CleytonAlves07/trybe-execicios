enum sexo {
  femea = "F",
  macho = "M",
}

interface Dogs {
  nome: string;
  raca: string;
  sexo: sexo;
  pedigree: boolean;
  proprietario: string;
}

let dog: Dogs = {
  nome: 'Maya',
  raca: 'Beagle',
  sexo: sexo.femea,
  pedigree: true,
  proprietario: 'Eli'
}

console.table(dog);