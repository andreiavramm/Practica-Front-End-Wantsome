// Adaugati un tag script la final
// Schimbati stilul body-ului sa aiba font-family "Arial, sans-serif"
// Schimbati fiecare span(name, fav-drink, born-place) cu informatiile despre voi
// Iterati prin fiecare "li" si puneti clasa "listitem". 
// Adaugati un tag style(in head) care seteaza o regula pentru .listitem sa aiba culoarea rosie
// Creati un element img si setati atributul src sa aiba o poza cu voi sau ceva random de pe net. 
// Puneti acest element(append) la pagina noastra

const bodyStyle = document.querySelector('body');
bodyStyle.style.fontFamily = 'Arial, sans-serif';

const spanName = document.querySelector('#name');
spanName.textContent = 'Andrei Avram';

const spanFavDrink = document.querySelector('#fav-drink');
spanFavDrink.textContent = 'Cuba Libre';

const spanBornPlace = document.querySelector('#born-place');
spanBornPlace.textContent = 'Piatra-Neamt';

const list = document.querySelector('ul').children;
for (i = 0; i < list.length; i++) {
    list[i].classList.add('listitem');
}

const head = document.querySelector('head');
const headStyle = document.createElement('style');
headStyle.textContent = '.listitem {color : red}';
head.appendChild(headStyle);

const image = document.createElement('img');
image.setAttribute('src', 'https://smartcitymagazine.ro/wp-content/uploads/2018/07/piatra-neamt_romania.jpg');
bodyStyle.appendChild(image)