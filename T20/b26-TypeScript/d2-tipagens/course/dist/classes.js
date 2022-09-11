"use strict";
var EyeColor;
(function (EyeColor) {
    EyeColor["Black"] = "Preto";
    EyeColor["Blue"] = "Azul";
    EyeColor["Green"] = "Verde";
    EyeColor["Brown"] = "Marrom";
})(EyeColor || (EyeColor = {}));
class Person {
    constructor(name, birthDate, eyeColor) {
        this.name = name;
        this.birthDate = birthDate;
        this.eyeColor = eyeColor;
    }
    speak() {
        console.log(`${this.name} está falando.`);
    }
    eat() {
        console.log(`${this.name} está comendo.`);
    }
    walk() {
        console.log(`${this.name} está andando.`);
    }
}
// Instâncias da classe
const person1 = new Person("Jonny Deppy", new Date('1972-05-12'), EyeColor.Green);
const person2 = new Person("Papa Chico", new Date('1915-09-25'), EyeColor.Black);
const person3 = new Person("Cleyton Alves", new Date('1995-09-25'), EyeColor.Blue);
console.log(person1);
person1.walk();
console.log(person2);
person2.speak();
