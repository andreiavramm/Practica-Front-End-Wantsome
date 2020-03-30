//Ex1
//Scrieti o functie care sa protejeze emailul unui user
// de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"

function emailProtect(mail) {
    var arond = mail.split('@');
    var secondArond = arond[1].split('.');
    var result = arond[0] + '...' + secondArond[1];
    console.log(result);
    return result;
}
emailProtect('ovidu.grigoras@test.com')

//Ex2
//Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
// de ex: myFunction("i am superman") sa printeze "I Am Superman"
function myFunction(test) {
    var res = test.split(' ');
    for (var i = 0; i < res.length; i++) {
        res[i] = res[i].charAt(0).toUpperCase() + res[i].slice(1);
    }
    console.log(res.join(' '));
}
myFunction('i am superman and batman and spooderman')

//Ex3
// Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers
// ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"
function letterSwitch(text) {
    var str = '';
    for (i = 0; i < text.length; i++) {
        if (/[A-Z]/.test(text[i])) { str += text[i].toLowerCase() }
        else { str += text[i].toUpperCase() };
    }
    console.log(str);
    return str;
}
letterSwitch('xxXyYzZZ')

//Ex4
// Scrieti o functie care sa concateneze un string de cate ori ii zicem
// de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"

function addString(string, num) {
    var result = string.repeat(num);
    console.log(result);
    return result;
}
addString('Andrei', 3)

//V2
function addString(string, num) {
    var result = '';
    for (var i = 0; i < num; i++) {
        result += string
    }
    console.log(result)
}
addString('andrei', 3)

//Ex5
// A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word 'level'.
// Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante
function palindromeCheck(text) {
    if (text.split('').reverse().join('') === text) {
        return text + ' is palindrome';
    }
    return text + ' is not a palindrome';
}
console.log(palindromeCheck('level'))

//Ex 6
/**Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si
returneaza un array care contine ca si elemente cele mai mari numere din fiecare array */

function sortedArrays(multiArray) {
    var result = [];
    for (var i = 0; i < multiArray.length; i++) {
        var bigger = 0;
        for (var j = 0; j < multiArray[i].length; j++) {
            if (bigger < multiArray[i][j]) {
                bigger = multiArray[i][j]
            }
        } result[i] = bigger;
    } return result
}
var multiArray = [[2, 5, 1, 10], [11, 88, 1, 4], [133, 66, 89]];
sortedArrays(multiArray)

//Ex 7
/**Implementati o functie care face reverse la un string */

function reverseString(text) {
    return text.split('').reverse().join('');
}
reverseString('Andrei Avram, Wantsome FE student.')

//Ex 8
/**Implementati o functie care calculeaza factorialul unui numar */

function factorial(num) {
    var result = 1;
    for (var i = 1; i <= num; i++) {
        result *= i;
    }
    return result
}
factorial(8)

//Ex 9
/**Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma */

function checkEnd(origString, checkString) {
    if (origString.endsWith(checkString)) {
        return true
    } else return false
}
checkEnd('Ana are mere', 'mere')

//Ex 10
/**Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul
element din array care trece testul specificat */
// ma bate exercitiul asta, ori nu inteleg bine cerinta
function checkIf(paramArray, paramBoo) {

    function paramBoo(paramArray) {
        if (paramArray[i] > 0) {
            return true;
        }
        return false
    }
    for (var i = 0; i < paramArray; i++) {
        if (parambBoo(paramArray[i])) {
            return paramArray[i] + ' passed'
        }
    } return 'error'
}
checkIf([1, 55, -7], 100)

//Ex 11
/**Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele
celui de-al doilea string */
function checkLetters(firstString, secondString) {
    if (firstString.includes(secondString, 0)) {
        return true;
    } return false;
}
checkLetters('Wantsome Front-End', 'some')
//Ex 12
/**Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare
element al array-ului pana cand intalneste elementul cu valoarea specificata */
function stopAtValue(array, value) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            break;
        }
        result[i] = array[i];
    }
    return result;
}

console.log(stopAtValue([8, 16, 32, 64, 128, 256, 512, 1024], 256));
//Ex 13
/**Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN */
function removeFalse(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== 'string' || array[i] !== 'number' || array[i] === "" || array[i] === NaN) {
            array.splice(i, 1)
        }
    } return array
}
removeFalse([false, 64, null, "", undefined, NaN])
//Ex 14
/**Scrieti o functie care repeta un string de n ori specificate */
function stringRepeat(string, num) {
    return string.repeat(num);
}

stringRepeat("Wantsome is awesome. ", 2)