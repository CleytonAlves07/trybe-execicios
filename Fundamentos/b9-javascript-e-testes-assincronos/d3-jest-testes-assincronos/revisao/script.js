const section = document.querySelector('.hero');
const button = document.querySelector('.button');
const fullName = document.createElement('name');
const image = document.createElement('img');
fullName.className = 'fullName'
section.appendChild(fullName);
section.appendChild(image);

arrayIds = []

const getId = () => {
    const randomId = Math.floor((Math.random() * 731 + 1));
    const randomToString = randomId.toString();
    arrayIds.push(randomToString);
    localStorage.setItem('ids', arrayIds);
    return randomToString;
}
button.addEventListener('click', () => hero(getId()));


const hero = async (id) => {
    const url = `https://www.superheroapi.com/api.php/4192484924171229/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    const src = data.image.url;
    image.src = src;
    const nameHero = data.name;
    fullName.nameHero = nameHero;
    fullName.innerText = nameHero;
    image.innerHTML = src;
}

modules.export = getId;

