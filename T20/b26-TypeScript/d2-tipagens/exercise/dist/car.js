"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = __importDefault(require("./colors"));
const turn_1 = __importDefault(require("./turn"));
const doors_1 = __importDefault(require("./doors"));
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    //médotos
    honk() {
        console.log('Buzina acionada ... Biiiibiiiitch!');
    }
    openTheDoor(door) {
        console.log(`A porta ${door} abriu`);
    }
    closeTheDoor(door) {
        console.log(`A porta ${door} fechou`);
    }
    turnOn() {
        console.log("O carro foi ligado");
    }
    turnOff() {
        console.log("O carro foi desligado");
    }
    speedUp() {
        console.log("O carro está acelerando");
    }
    speedDown() {
        console.log("O carro está reduzindo a velocidade");
    }
    stop() {
        console.log("O carro está parado");
    }
    turn(turn) {
        console.log(`O carro virou a ${turn}`);
    }
}
// Instâncias da classe 
const car1 = new Car("Gol", colors_1.default.PRATA, 4);
car1.openTheDoor(doors_1.default.MOTORISTA);
car1.closeTheDoor(doors_1.default.MOTORISTA);
car1.turnOn();
car1.speedUp();
car1.turn(turn_1.default.ESQUERDA);
car1.turn(turn_1.default.DIREITA);
car1.speedUp();
car1.speedDown();
car1.turn(turn_1.default.DIREITA);
car1.speedDown();
car1.stop();
car1.openTheDoor(doors_1.default.CARONA);
car1.closeTheDoor(doors_1.default.CARONA);
