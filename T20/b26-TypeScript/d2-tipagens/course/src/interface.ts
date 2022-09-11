import { table } from 'console';

interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

let employee: Employee = {
  firstName: 'Cleyton',
  lastName: 'Alves',
  fullName: function (): string {
    return (`${this.firstName} ${this.lastName}`)
  }
}

console.log(employee.fullName());
console.info(employee.fullName());
console.table(employee)

// Para extender uma interface em outra

interface Teacher extends Employee {
  firstName: string;
  lastName: string;
  subject: string;
  fullName(): string;
  sayHello(): string;
}

let teacher: Teacher = {
  firstName: 'Felipe',
  lastName: 'Mafra',
  subject: 'Banco de dados',
  fullName: function (): string {
    return (` O ${this.firstName} ${ this.lastName} é professor de ${ this.subject}`);
  },
  sayHello: function (): string {
    return (` O ${this.firstName} ${ this.lastName} é professor de ${ this.subject} e diz olá!`);
  }
}

console.log(teacher.fullName())
console.log(teacher.sayHello())
