//ex.1.
// Scrieti o functie care sa mute literele cu o litera mai incolo folosind .map
// de exemplu movels('hello') // => 'ifmmp'
// movels('abcxy') // => "bcdyz"
//hint : String.fromCharCode() String.charCodeAt()

const movels = function (string) {
    return string
        .toLowerCase()
        .split('')
        .map(l => {
            if (String.fromCharCode(l.charCodeAt()) === 'Z') {
                return String.fromCharCode(65)
            } else if (String.fromCharCode(l.charCodeAt()) === 'z') {
                return String.fromCharCode(97)
            }
            return l.replace(/[a-zA-Z]/g, String.fromCharCode(l.charCodeAt(0) + 1))
        })
        .join('')
};
movels('Wantsome');

// ex2
// Vreau sa am o functie care sa faca uppercase la cuvinte in functie ca in exemplu de mai jos
// changeWordCase('hey ppl, lets learn javascript together') // => "HEY ppl, LETS learn JAVASCRIPT together SOMETIME"
let changeWordCase = function (string) {
    return string
        .split(' ')
        .map((firstWord, index) => {
            if (index % 2 == 0) {
                return firstWord.toUpperCase()
            } return firstWord.toLowerCase()
        })
        .join(' ') + ' SOMETIME';
};
changeWordCase('hey ppl, lets learn javascript together');

// ex3
// Faceti asftel incat toate variabilele de mai jois sa returneze ceea ce zice numele
const arr = [
    { name: 'sasha', sex: 'f', age: 7, species: 'cat' },
    { name: 'john', sex: 'm', age: 133, species: 'human' },
    { name: 'titus', sex: 'm', age: 62, species: 'human' },
    { name: 'kalifa', sex: 'f', age: 255, species: 'human' },
    { name: 'oreo', sex: 'm', age: 21, species: 'cat' },
];

let allCats = arr.filter(l => l.species === 'cat');
console.log(allCats);

let allHumans = arr.filter(l => l.species === 'human');
console.log(allHumans);

let allFemales = arr.filter(l => l.sex === 'f');
console.log(allFemales);

let totalOfAllAges = arr.reduce((acc, ageSum) => {
    return acc + ageSum.age
}, 0);
console.log(totalOfAllAges);

let averageAgeOfCats = arr
    .filter(l => l.species === 'cat')
    .reduce((acc, ageAverage) => {
        return acc + ageAverage.age / 2;
    }, 0);
console.log(averageAgeOfCats);

let averageAgeOfHumans = arr
    .filter(l => l.species === 'human')
    .reduce((acc, ageAverage) => {
        return acc + ageAverage.age / 3;
    }, 0);
console.log(averageAgeOfHumans);

let avgLengthOfNames = arr.map(l => ({
    name: l.name
}))
    .reduce((acc, nameLength) => {
        return acc + nameLength.name.length / arr.length;
    }, 0);
console.log(avgLengthOfNames);


//ex 1.
// Faceti o functie numita composedValue care ia ca argumente 2 functii si returneaza valoarea lor - // f1(f2(value))
//ex composedValue(square, double, 5);  // 100
// functia square returneaza patratul numarului iar double - dublul numarului

const fnOne = (num) => {
    return num * 2;
};

const fnTwo = (num) => {
    return num * num;
};

const composedValue = (f1, f2, value) => {
    return f1(f2(value));
};

composedValue(fnTwo, fnOne, 5);

//ex.2
//faceti o functie 'compose' care atunci cand va fi apleata returneaza rezultatul altor 2 functii;
//exemplu const myFunction = compose(square, double) 
// myFunction(5)  --> 100
// myFunction(10) --> 400  ...etc

const double = (num) => {
    return num * 2;
};

const square = (num) => {
    return num * num;
};

const myFunction = (num) => {
    return square(double(num));
};

myFunction(5);
myFunction(10);

//ex.3
//faceti o functie find care ia ca parametrii un array si o functie care testeaza arrayul si returneaza doar elmentele care trec testele.
// find([1,2,3,4,5], isOdd); returneaza 1 3 5

const isOdd = num => {
    if (num % 2 !== 0) {
        console.log(num);
    }
};

const find = (array) => {
    for (i = 0; i < array.length; i++) {
        isOdd(array[i]);
    }
};

find([1, 2, 3, 4, 5], isOdd);      
