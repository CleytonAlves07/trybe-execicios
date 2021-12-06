// console.log(document.getElementById('start').nextSibling);
// console.log(document.getElementById('start').nextElementSibling);

// Exercise 2 - Course 
// Item 1
// console.log(document.getElementById('elementoOndeVoceEsta'));
// Item 2
// document.getElementById('elementoOndeVoceEsta').parentNode.style.color="teal";
// Item 3
// document.getElementById('primeiroFilhoDoFilho').innerText = 'Esse é o primeiro filho do filho. Confuso, né ?'
// Item 4
// console.log(document.getElementById('pai').firstElementChild);
// Item 5
// console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);
// Item 6
// console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);
// Item 7
// console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);
// Item 8
// console.log(document.getElementById('pai').nextSibling);
//Dom createElement
// console.log(document.getElementById('primeiroFilhoDoFilhoDoFilho').parentElement.parentElement.nextElementSibling.nextElementSibling);
//Remove elements
document.getElementById('pai').removeChild(primeiroFilho);
console.log(document.getElementById('paiDoPai').children);