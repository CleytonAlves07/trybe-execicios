//Exercicio 1
let n = 5;
let asteristicos = " ";
let linhasAsteristico = [];
for(let i=0; i<n;i +=1){
    asteristicos += ("*");
}
for(let i=0;i<n;i +=1){
    linhasAsteristico += asteristicos + "                                                         ";
}
console.log(linhasAsteristico);
