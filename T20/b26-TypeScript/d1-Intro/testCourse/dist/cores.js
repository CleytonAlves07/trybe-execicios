"use strict";
var cores;
(function (cores) {
    cores[cores["azul"] = 1] = "azul";
    cores[cores["amarelo"] = 2] = "amarelo";
    cores[cores["verde"] = 3] = "verde";
    cores[cores["vermelho"] = 4] = "vermelho";
    cores[cores["anil"] = 5] = "anil";
    cores[cores["branco"] = 6] = "branco";
})(cores || (cores = {}));
console.log(cores[5]);
