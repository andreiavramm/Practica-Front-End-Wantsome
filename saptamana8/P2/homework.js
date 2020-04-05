//Ex1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
//ex myFunction(10, 5) - output 15 // myFunction(10,10) - output 100
const myFunction = (num1, num2) => {
    if (num1 === num2) {
        return num1 * num2;
    } else return num1 + num2;
};

myFunction(10, 5);
myFunction(10, 10);

//Ex2
//Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
//ex testFunction(30, 30) - true 
//testFunction(15,15) - true
//testFunction(10, 15) - false
const testFunction = (num1, num2) => {
    if (num1 === 30 && num2 === 30) {
        return true;
    } else if ((num1 + num2) === 30) {
        return true;
    } else return false;
};

testFunction(22, 8);
testFunction(30, 30);
testFunction(10, 15);

//Ex3
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS
const checkString = (aString) => {
    for (let i = 0; i < aString.length; i++) {
        if (aString.charAt(0) === 'J' && aString.charAt(1) === 'S') return aString;
        else if (typeof aString !== 'string') return 'JS'
        else return `JS ${aString}`
    }
};

checkString('JSisAwesome');
checkString('isAwesome');
checkString(null);

//Ex4
//Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
//removeDuplicates('aabcdeef') - 'abcdef'
//removeDuplicates(122334) - 1234
const removeDuplicates = (aString) => {
    //let toCheck = aString.split()
    let unique = [...new Set(aString)]
    console.log(unique)
};

removeDuplicates('111aasdad23');

//V2 with for

const removeDuplicates = (aString) => {
    let noDuplicates = ''
    for (let i = 0; i < aString.length; i++) {
        if (noDuplicates.indexOf(aString[i]) !== -1) continue;
        noDuplicates += aString[i];
    }
    return noDuplicates;
}

removeDuplicates('asadadsss');
//Ex5
// Gasiti cel mai lung string intr-o fraza
//findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'

const findLongestString = (aString) => {
    let strSplit = aString.split(' ');
    let result = '';
    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > result.length)
            result = strSplit[i];
    } return result
};

findLongestString('Wantsome is Awsomeeee today');

//Ex6
//Scrieti o functie care sa aiba output-ul asta
// *  
// * *  
// * * *  
// * * * *  
// * * * * * 

const multiplyStars = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log('* '.repeat(i));
    }
};

multiplyStars(5);

//V2

const multiplyStars = (num, index = 0) => {
    if (num === index) return;
    const newIndex = index + 1;
    console.log('*'.repeat(newIndex));
    return multiplyStars(num, newIndex);
};

multiplyStars(5);

//ex7
// append any negative numbers found in the numbers array 
// into the negativeNumbers array constant variable above

const negativeNumbers = [];
const extractNegativeNumbers = (numbers) => {
    numbers.forEach((number) => {
        if (number < 0) {
            negativeNumbers.push(number);
        }
    })
    return negativeNumbers;
};
extractNegativeNumbers([1, 2, -5, 4, -6]);

//ex8
//Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
//ex calculate(2, 5, "add") => 7
//calculate(10, 8, "substract") => 2
//object look-up

const calculateByOperation = (operatorA, operatorB, operationType) => {
    const operations = {
        add: (a, b) => a + b,
        substract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b,
    };
    return operations[operationType](operatorA, operatorB);
};

calculateByOperation(2, 5, 'add');
calculateByOperation(10, 2, 'divide');
calculateByOperation(10, 2, 'multiply');
calculateByOperation(10, 8, 'substract');

//Ex9
// Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
// isDiv(15) => "BOTH"
// isDiv(9)=> "THREE"
// isDiv(7)=> 7

const dividedBy = (num) => {
    if (num % 3 === 0 && num % 5 === 0) return 'Both';
    else if (num % 3 === 0) return 'Three';
    else if (num % 5 === 0) return 'Five';
    return num;
};

dividedBy(45);
dividedBy(9);
dividedBy(7);

//ex10
// ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
// validPin("1234") => true
// validPin("12345") => false
// validPin("z23f") => false

const validPin = (pin) => {
    return pin.length === 4 && !isNaN(pin);
};

validPin('1234');
validPin('12345');
validPin('z23f');

//ex11 
//Folosind regex vreau sa scot toate vocalele dintr-un string
// removeVowels("Hey I am developer") => "Hy m dvlpr"

const removeVowels = (aString) => {
    let noVowels = aString.toLowerCase().replace(/a|e|i|o|u/g, '');
    return noVowels.charAt(0).toUpperCase() + noVowels.slice(1);
};

removeVowels('Hey I am developer');

//ex12
//Vreau sa am o functie care sa verifice daca un numar este patrat
// isSquareNumber(-1) => false
// isSquareNumber(25) => true
// isSquareNumber(3) => false

const isSquareNumber = (num) => {
    return num > 0 && Math.sqrt(num) % 1 === 0;
};

isSquareNumber(-1);
isSquareNumber(25);
isSquareNumber(3);

//ex13
// Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele din primul string se regasesc in al doilea
// isAnagram("School master", "The class room") => true
// isAnagram("silent", "listen") => true

const isAnagram = (str1, str2) => {
    const noMatchLetters = [];
    const str1Split = str1.split('').map(l => l.toLowerCase());
    const str2Split = str2.split('').map(l => l.toLowerCase());
    str1Split.forEach((letter) => {
        if (!str2Split.includes(letter)) {
            noMatchLetters.push(letter);
        }
    })
    return noMatchLetters.length > 0 ? false : true;
};

isAnagram("School master", "The class room");
isAnagram("silent", "listen");

//V2 
const isAnagram = (strA, strB) => {
    const strAasWord = strA.split('').map(l => l.toLowerCase()).sort().join('').trim();
    const strBasWord = strB.split('').map(l => l.toLowerCase()).sort().join('').trim();
    return strAasWord === strBasWord;
};

isAnagram("School master", "The class room");
isAnagram("silent", "listen");

//Implementati toate exercitiile folosind sintaxa ES6
//Toate denumirile de variabile si functii trebuie sa fie in EN
//Folositi nume sugestive si aveti grija la indentare

//Week 8 Part 2 exercises

/*
1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata
*/
const sumFromOne = (num) => {
    let result = 0;
    for (let i = 0; i <= num; i++) {
        result += i;
    } return result;
};

sumFromOne(10);

/*
2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.
*/
const findLongestWord = (aString) => {
    let strSplit = aString.split(' ');
    let result = '';
    for (let i = 0; i < strSplit.length; i++) {
        while (strSplit[i].length > result.length) result = strSplit[i];
    } return result;
};

findLongestWord('This might be the longest word!');

//V2
const findLongestWord = (aString) => {
    return aString.split(' ').sort((a, b) => b.length - a.length)[0];
};
findLongestWord('This might be the longest word!');

/*
3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'
*/
const reverseString = (aString) => {
    return aString.split('').reverse().join('');
};

reverseString('This string will be reversed.');

/*
4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta cu urmatoarea litera din alfabet
*/
const nextLetter = (word) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const wordLetters = word.split('').map(l => l.toLowerCase());
    return wordLetters.map((letter, index) => {
        const nextLetterIndex = alphabet.indexOf(letter) + 1;
        if (nextLetterIndex === alphabet.length) {
            return alphabet[0];
        }
        return alphabet[nextLetterIndex];
    }).join('');
};

nextLetter('nextletter');
/*
5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste la numarul de ore si minute corespunzatoare.
Exemplu: input: 64  ->  output: 1:4
*/
const minutesToHours = (minutes) => {
    if (minutes <= 60) return minutes;
    return Math.floor(minutes / 60) + ':' + minutes % 60;
};

minutesToHours(64);
minutesToHours(930);
/*
6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic
*/
const sortLetters = (toBeSorted) => {
    return toBeSorted.toLowerCase().split('').sort().join('').trim();
};

sortLetters('zZSoabcDErfa has been sorted');
/*
7. Implementati o functie care accepta ca parametru un string si verifica daca inainte si dupa fiecare litera din cadrul sau se afla caracterul '+'
Exemplu: input: "+a+b+c+"   ->   output: true
Exemply: input: "+ab+c+d+"  ->   output: false
*/
const checkString = (toBeChecked) => {
    for (let i = 0; i < toBeChecked.length; ++i) {
        if (i % 2 === 0 && toBeChecked[i] !== "+") {
            return false;
        } else if (i % 2 === 1 && toBeChecked[i] === "+") {
            return false;
        } else if (i === 0 && toBeChecked[i] !== '+') {
            return false;
        } else if (i === toBeChecked.length - 1 && toBeChecked[i] !== '+') {
            return false;
        }
    }
    return true;
};

checkString('+a+b+c+');
checkString('+ab+b+c+');
checkString('+a+b+c');
