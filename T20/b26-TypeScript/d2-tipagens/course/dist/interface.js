"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let employee = {
    firstName: 'Cleyton',
    lastName: 'Alves',
    fullName: function () {
        return (`${this.firstName} ${this.lastName}`);
    }
};
console.log(employee.fullName());
console.info(employee.fullName());
console.table(employee);
let teacher = {
    firstName: 'Felipe',
    lastName: 'Mafra',
    subject: 'Banco de dados',
    fullName: function () {
        return (` O ${this.firstName} ${this.lastName} é professor de ${this.subject}`);
    },
    sayHello: function () {
        return (` O ${this.firstName} ${this.lastName} é professor de ${this.subject} e diz olá!`);
    }
};
console.log(teacher.fullName());
console.log(teacher.sayHello());
