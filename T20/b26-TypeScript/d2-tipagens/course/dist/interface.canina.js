"use strict";
var sexo;
(function (sexo) {
    sexo["femea"] = "F";
    sexo["macho"] = "M";
})(sexo || (sexo = {}));
let dog = {
    nome: 'Maya',
    raca: 'Beagle',
    sexo: sexo.femea,
    pedigree: true,
    proprietario: 'Eli'
};
console.table(dog);
