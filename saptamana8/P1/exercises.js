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
    //se face cu split si for
    let strSplit = aString.split(' ');
    let result = 0;
    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > strSplit[result].length)
            return result = strSplit[i];
    }
}
findLongestString('this is a loooooooong word')
