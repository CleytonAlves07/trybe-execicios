"use strict";
function getArray(items) {
    return new Array().concat(items);
}
let numberArray = getArray([5, 10, 15, 20]);
numberArray.push(25);
// numberArray.push("This is not a number"); // Isto vai gerar um erro de compilação
let stringArray = getArray(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits");
// stringArray.push(30); // Isto vai gerar um erro de compilação
// console.table(numberArray);
// console.table(stringArray);
function identity(value, message) {
    console.log(message);
    return value;
}
let returnNumber = identity(159, "Olá Mundo!");
let returnString = identity("Cuidado com as pessoas...", false);
// console.log(returnNumber);
console.log(returnString);
// Outra forma de fazer 
class ProcessIdentity {
    constructor(value, message) {
        this.value = value;
        this.message = message;
    }
    getIdentity() {
        console.log(this.message, this.value);
        return this.value;
    }
}
let processor = new ProcessIdentity(67, "Agora vai");
processor.getIdentity();
