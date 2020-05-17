// ex. 3 Creati o functie care primeste un singur parametru si returneaza un Promise. Folosind setTimeout, dupa 500ms,
// acest Promise fie va face resolve, fie va face reject, in functie de urmatoarele cazuri: daca input-ul este un string,
// Promise-ul se va rezolva cu rezultatul avand valoarea string-ului uppercased; daca input-ul nu este un string,
// Promise-ul va face reject cu rezultatul avand valoarea string-ului fara nicio modificare.
// Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri.

const promiseForString = (inputStr) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof inputStr === 'string') {
                resolve(inputStr.toUpperCase());
            } else {
                reject(inputStr);
            }
        }, 500);
    });
};

const returnedPromiseCorectly = promiseForString('myString');
const returnedPromiseIncorectly = promiseForString(4);

promiseForString('myString')
    .then((result) => {
        console.log(`String-ul uppercased este: ${result}`);
    })
    .catch((error) => {
        console.log(`Stringul pentru cazul de eroare este: ${error}`);
    });


// Ex 1. Creati o functie care primeste un numar ca si argument si returneaza un Promise care testeaza daca valoarea este
// mai mica sau mai mare decat 10 - se va face reject / resolve in functie de valoarea de adevar a conditiei de
// comparatie.
// Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri.

const biggerThanTen = (num) => {
    return new Promise((resolve, reject) => {
        if (num >= 10) {
            resolve(num);
        } else {
            reject(num);
        };
    });
};

biggerThanTen(11)
    .then((result) => {
        console.log(`${result} a trecut conditia.`);
    })
    .catch((error) => {
        console.log(`${error} nu a trecut conditia.`);
    });


// Ex 2. Creati o functie care primeste un string ca si argument si returneaza un Promise care testeaza daca acesta contine
// sau nu cuvantul “promise” - se va face reject / resolve in functie de valoarea de adevar a conditiei specificate.
// Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri

const includesPromise = (aString) => {
    return new Promise((resolve, reject) => {
        if (aString.includes('promise')) {
            resolve(aString);
        } else {
            reject(aString);
        };
    });
};

includesPromise('what is a promise?')
    .then((result) => {
        console.log(`${result} contine 'promise'.`);
    })
    .catch((error) => {
        console.log(`${error} nu contine 'promise'.`);
    });


// Ex 4. Creati doua functii care folosesc Promises pentru a putea face o inlantuire (Promise chain). Prima functie,
// capitalizeWords(), va primi ca si argument un array de cuvinte si va aplica o operatiune de capitalize pe acestea.
// A doua functie, sortWords(), va primi ca si argument rezultatul primului Promise si va sorta cuvintele in ordine
// alfabetica. In cazul in care array-ul initial contine un element cu o valoare diferita de tipul string, se va face reject.

