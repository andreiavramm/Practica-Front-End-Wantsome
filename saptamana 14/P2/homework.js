//Folosind fetch() prima data returnam userii cu id-ul mai mare ca 5
//.then - returnam user names si city
//hint nu uitati sa transformati primul raspuns ca si json
const url = "https://jsonplaceholder.typicode.com/users"

fetch(url)
 .then(response => response.json())
 .then(myJson => myJson.map(user => ({user: user.username, id: user.id})))
 .then(myJson => myJson.filter(user => user.id > 5))
 .then(response => console.log(response))
 
 fetch(url)
 .then(response => response.json())
 .then(myJson => myJson.map(user => ({user: user.username, city: user.address.city})))
 .then(response => console.log(response))

 //Ex1. 
//Setati 3 cookie-uri cu numele, profesia si varsta voastra
//Stocatile in 3 variabile dupa si afisatile in consola
//Setati 2 cookie-uri (cu ce valori vreti voi) care sa expire la un momendat
// Stocatile si pe astea in alte 2 variabile
// La final vrem sa vedem 5 cookieuri in console.log

document.cookie1 = "name=Andrei Avram"
document.cookie2 = "ocupation-berar"
document.cookie3 = "age=30"
document.cookie4 = "day=Th ; expires= Th, 15 June 2020 00:00:00 GMT"
document.cookie5 = "year=2020 ; expires= Th, 15 June 2020 00:00:00 GMT"

const myCookie1 = document.cookie1;
const myCookie2 = document.cookie2;
const myCookie3 = document.cookie3;
const myCookieExpire4 = document.cookie4;
const myCookieExpire5 = document.cookie5;

console.log(myCookie1);
console.log(myCookie2);
console.log(myCookie3);
console.log(myCookieExpire4);
console.log(myCookieExpire5);

//Ex2. 
//Stocati in localStorage urmatoarele chei si valori ("width" "100px") ("height" "100px") ("background-color" "green")
//stocatile in 3 variabile diferite
// folositile pentru a construi un patrat cu ele

localStorage.setItem("width", "100px");
localStorage.setItem("background-color", "green");
localStorage.setItem("height", "100px");
const width = localStorage.getItem("width");
const background = localStorage.getItem("background-color");
const height = localStorage.getItem("height");
const div = document.createElement('div');
div.style.width = width
div.style.height = height
div.style.background = background
document.body.appendChild(div)
