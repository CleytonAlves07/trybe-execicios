const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const myOtherpage = document.getElementById('top3');

//Item 1 
// Ocorre pois foi adicionado o transform: translateY(-20px); na class tech e o primeiro item está contido nessa class.

//Item 2 
firstLi.addEventListener('click', addClassTech);
function addClassTech(){
    firstLi.className = 'tech';
}
//Item 3
function addWriteFirst(event){
    event.target.innerText  = 'A primeira tecnologia que gostei foi Phyton.';  
}
firstLi.addEventListener('click', addWriteFirst);
//Item 4
function addWriteSecond(event){
    event.target.innerText = 'A segunda tecnologia que gostei foi JavaScript.';
}
secondLi.addEventListener('click', addWriteSecond);
// Just to train
function addWriteThird(event){
    event.target.innerText = 'A terceira tecnologia que gostei foi React.';
}
thirdLi.addEventListener('click', addWriteThird);