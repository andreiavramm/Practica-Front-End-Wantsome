//Ex1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
//ex myFunction(10, 5) - output 15 // myFunction(10,10) - output 100
const myFunction = (num1, num2) => {
    if (num1 === num2) {
        return num1 * num2;
    } else return num1 + num2;
}

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
}

testFunction(22, 8);
testFunction(30, 30);
testFunction(10, 15)
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
}

checkString('JSisAwesome')
checkString('isAwesome')
checkString(null)
//Ex4
//Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
//removeDuplicates('aabcdeef') - 'abcdef'
//removeDuplicates(122334) - 1234
const removeDuplicates = (aString) => {
    //let toCheck = aString.split()
    let unique = [...new Set(aString)]
    console.log(unique)
}

removeDuplicates('111aasdad23')
//V2 cu for
const removeDuplicates = (aString) => {
    let noDuplicates = ''
    for (let i = 0; i < aString.length; i++) {
        if (noDuplicates.indexOf(aString[i]) !== -1) continue;
        noDuplicates += aString[i];
    }
    return noDuplicates;
}

removeDuplicates('asadadsss')
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
}

findLongestString('this is the longest string')
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
}

multiplyStars(5)
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
}
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
}

dividedBy(45)
dividedBy(9)
dividedBy(7)
//ex10
// ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
// validPin("1234") => true
// validPin("12345") => false
// validPin("z23f") => false
const validPin = (pin) => {
    return pin.length === 4 && !isNaN(pin);
}

validPin('1234')
validPin('12345')
validPin('z23f')
//ex11 
//Folosind regex vreau sa scot toate vocalele dintr-un string
// removeVowels("Hey I am developer") => "Hy m dvlpr"
const removeVowels = (aString) => {
    let noVowels = aString.toLowerCase().replace(/a|e|i|o|u/g, '');
    return noVowels.charAt(0).toUpperCase() + noVowels.slice(1);
}

removeVowels('Hey I am developer')
//ex12
//Vreau sa am o functie care sa verifice daca un numar este patrat
// isSquareNumber(-1) => false
// isSquareNumber(25) => true
// isSquareNumber(3) => false
const isSquareNumber = (num) => {
    return num > 0 && Math.sqrt(num) % 1 === 0;
}

isSquareNumber(-1)
isSquareNumber(25)
isSquareNumber(3)
//ex13
// Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele din primul string se regasesc in al doilea
// isAnagram("School master", "The class room") => true
// isAnagram("silent", "listen") => true
const isAnagram = (stringA, stringB) => {
    let checkStringA = stringA.toLowerCase().replace(/\W+/g, '').split('').sort().join('');
    let checkStringB = stringB.toLowerCase().replace(/\W+/g).split('').sort().join('');
    if (checkStringA === checkStringB) return true;
    return false;
}
isAnagram("silent", "listen")
isAnagram("School master", "The class room")
