// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function nothingHappens(e){
    e.preventDefault()
}
HREF_LINK.addEventListener('click', nothingHappens);

function againNothing(e){
    e.preventDefault()
}
INPUT_CHECKBOX.addEventListener('click', againNothing);
function addKeypress(e){
    const letter = e.key;
    if(letter !== 'a'){
    e.preventDefault()
    }
}
INPUT_TEXT.addEventListener('keypress', addKeypress);