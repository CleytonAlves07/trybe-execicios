enum EyeColor {
  Black = "Preto",
  Blue = "Azul",
  Green = "Verde",
  Brown = "Marrom",
}

interface Person {
  name: string,
  birthDate: Date,
  eyeColor?: EyeColor;
}

class Person {
  //Pode ser substituído pela interface
  name: string;
  birthDate: Date;
  eyeColor?: EyeColor;

  constructor(name: string, birthDate: Date, eyeColor: EyeColor) {
    this.name = name;
    this.birthDate = birthDate;
    this.eyeColor = eyeColor;
  }

// métodos
  speak(): void {
    console.log(`${this.name} está falando.`)
  }

  eat(): void {
    console.log(`${this.name} está comendo.`)
  }

  walk(): void {
    console.log(`${this.name} está andando.`)
  
  }
}
// Instâncias da classe
const person1 = new Person("Jonny Deppy", new Date('1972-05-12'), EyeColor.Green);
const person2 = new Person("Papa Chico", new Date('1915-09-25'), EyeColor.Black);
const person3 = new Person("Cleyton Alves", new Date('1995-09-25'), EyeColor.Blue);

console.log(person1);
person1.walk()

console.log(person2);
person2.speak()

