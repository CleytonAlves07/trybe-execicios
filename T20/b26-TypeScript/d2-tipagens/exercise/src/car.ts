import Colors from './colors';
import Turn from './turn';
import Doors from './doors';

class Car {
  brand: string;
  color: Colors;
  doors: number;
  constructor(brand: string, color: Colors, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
    
  }
  //médotos
  honk(): void {
    console.log('Buzina acionada ... Biiiibiiiitch!');
    
  }
  openTheDoor(door: Doors): void {
    console.log(`A porta ${door} abriu`);
    
  }
  closeTheDoor(door: Doors): void {
    console.log(`A porta ${ door } fechou`);
    
  }
  turnOn(): void {
    console.log("O carro foi ligado");
    
  }
  turnOff(): void {
    console.log("O carro foi desligado");
    
  }
  speedUp(): void {
    console.log("O carro está acelerando");
    
  }
  speedDown(): void {
    console.log("O carro está reduzindo a velocidade");
    
  }
  stop(): void {
    console.log("O carro está parado");
    
  }
  turn(turn: Turn): void {
    console.log(`O carro virou a ${turn}`);
    
  }
}

// Instâncias da classe 
const car1 = new Car("Gol", Colors.PRATA, 4)

car1.openTheDoor(Doors.MOTORISTA)
car1.closeTheDoor(Doors.MOTORISTA)
car1.turnOn()
car1.speedUp()
car1.turn(Turn.ESQUERDA)
car1.turn(Turn.DIREITA)
car1.speedUp()
car1.speedDown()
car1.turn(Turn.DIREITA)
car1.speedDown()
car1.stop()
car1.openTheDoor(Doors.CARONA)
car1.closeTheDoor(Doors.CARONA)

