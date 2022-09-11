function getArray<T>(items : T[]) : T[] {
    return new Array<T>().concat(items);
}

let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);
// numberArray.push("This is not a number"); // Isto vai gerar um erro de compilação

let stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits");
// stringArray.push(30); // Isto vai gerar um erro de compilação

// console.table(numberArray);
// console.table(stringArray);

function identity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}

let returnNumber = identity<number, string>(159, "Olá Mundo!");

let returnString = identity<string, boolean>("Cuidado com as pessoas...", false);

// console.log(returnNumber);
console.log(returnString);

// Outra forma de fazer 

class ProcessIdentity<T, U> {
  value: T;
  message: U;
  constructor(value: T, message: U) {
    this.value = value;
    this.message = message;
  }
  getIdentity(): T {
    console.log(this.message, this.value);
    return this.value
    
  }
}

let processor = new ProcessIdentity<number, string>(67, "Agora vai");
processor.getIdentity()