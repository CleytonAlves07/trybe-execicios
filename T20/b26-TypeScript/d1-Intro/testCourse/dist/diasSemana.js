"use strict";
var diasSemana;
(function (diasSemana) {
    diasSemana[diasSemana["domingo"] = 1] = "domingo";
    diasSemana[diasSemana["segunda"] = 2] = "segunda";
    diasSemana[diasSemana["terca"] = 3] = "terca";
    diasSemana[diasSemana["quarta"] = 4] = "quarta";
    diasSemana[diasSemana["quinta"] = 5] = "quinta";
    diasSemana[diasSemana["sexta"] = 6] = "sexta";
})(diasSemana || (diasSemana = {}));
console.log(diasSemana.sexta);
