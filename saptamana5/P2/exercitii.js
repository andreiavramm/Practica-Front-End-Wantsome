//Ex1
//Scrieti o functie multiplyByTen care atunci cand o apelam cu console.log(multiplyByTen(6)) sa avem 60 rezultat.
function multiplyByTen(a) {
    var result = a * 10;
    console.log(result);
  }
  multiplyByTen(6)

  //Ex2
  //Scrieti o functie myNameIs care sa ia un singur parametru si cand o apelam cu numele nostru sa returneze "Numele meu este ___"
  function myNameIs(a) {  
    result = "Numele meu este " + a;
    return console.log(result);
   }
  myNameIs("Andrei")
  
  //Ex3 
  //Scrieti o functie care sa transforme un numar in string.
  function numberToString() {
    var a = 22; 
    var result = a.toString();  
    return console.log(result);
 }  
    numberToString(22)
  //Ex4 
  //Scrieti o functie care sa returneze patratul numarului pe care-l dam ca si argument.
  function squareNum(num) {
    var num = num * num;  
    return console.log(num);
  }
    squareNum(8)
  
  //Ex5
  //Scrieti o functie numita aflaViitorul care sa aiba 4 parametrii -  numele jobului, compania, in cati ani, si cati bani - ar trebui sa returnam "Eu voi fi job in x ani la compania y si voi face z bani pe ora"
  //Chemati/invocati/apelati acea functie de 3 ori cu diferite argumente.
  function aflaViitorul(a, b, c, d) {
    return console.log("Eu voi fi " + a + " in " + b + " ani la compania " + c + " si voi face " + d + " pe ora.");  
  }
    aflaViitorul("developer", 2, "Mambu", "100euro")
  
  //Ex6
  //Scrieti o functie care sa calculeze cati ani are o pisica in ani pisicesti avand in vedere ca 1 an de om = 7 ani de pisica.
  // functia are 1 singur parametru - deci va accepta 1 singur argument.
  // Rezultatul trebuie sa fie "Pisica mea are xx ani in ani pisicesti"
  //BONUS - adaugati un alt parametru care reprezinta varsta noastra si obtinem la final varsta pisciii relatata la varsta noastra.
  function kittyYears(a, b) {
    var resultA = a * 7;  
    var resultB = (b / 7);  
    return console.log("Pisica mea are " + resultA + " ani in ani pisicesti iar eu am " + resultB.toFixed(2) + "  ani in ani pisiciesti.");
  }
    kittyYears(1.8, 30)
  //Ex7
  // Vreau sa scriu o functie ce sa calculeze pentru urmatorii X ani cate cani de cafea voi bea
  // Functia accepta ca parametrii years si coffePerDay.
  // Rezultatul va fi "In urmatorii X ani voi bea in total Y cani de cafea"
  function coffeCalculator(a, b) {  
    var years = a;
    var yearsToCoffe = (b * 365 * years);
    return console.log("In urmatorii " + years + " ani voi bea in total " + yearsToCoffe + " cani de cafea");
  }
    coffeCalculator(3, 4)
  //EX8 BONUS 
  // Faceti 2 functii una calculateCelsiusToFarenheit() si una calculateFarenheitToCelsius() unde sa facem conversia dintre celsius si farenhite.
  // rezultatul trebuie sa fie "X grade Celsius reprezinta Y grade Farenhite"
  // folositi https://www.mathsisfun.com/temperature-conversion.html ca si referinta pentru calcul.

  function calculateCelsiusToFarenheit(a) {
    var resultC =  ((a / 5) * 9) + 32;
    return console.log(a + " grade celsius reprezinta " + resultC + " grade Farenhite")
  }
    calculateCelsiusToFarenheit(30)
  
  function calculateFarenheitToCelsius(b) {
    var resultF = ((b - 32) *5 ) /9;
    return console.log(b + " grade Farenhite reprezinta " + resultF + " grade celsius")
  }
    calculateFarenheitToCelsius(86)

//Ex1 : La ce index intalnim cuvantul 'trece', dar cuvantul 'javascript'? Scrieti si metodele folosite.
var str = "Daca te simti bine, nu te ingrijora, trece!";
 console.log(str.indexOf("trece")); //37
  console.log(str.indexOf("javascript")); // -1

// Ex2.0: Returnati stringul Kiwi folosind metoda slice() cu indexi pozitivi si apoi negativi.
// Ex 2.1: Returnati toate fructele incepand de la 'Lemon'.
var fruits = "Apple, Lemon, Plum, Kiwi";
console.log(fruits.indexOf("Kiwi")); //20
console.log(fruits.slice(20));
console.log(fruits.slice(-4));
console.log(fruits.slice(7, 12));
console.log(fruits.slice(14, 18));

// Ex 3: Returnati stringul 'Plum' folosind metoda substr()
var moreFruits = "Apple, Lemon, Plum, Kiwi";
console.log(moreFruits.substr(14, 4));

// Ex 4: Inlocuiti 'Mia Kalifa' cu numele vostru folosind o metoda pe stringuri
// bonus: Inlocuiti "Sasha" cu numele vostru in tot stringul de mai jos.
var replaceName = "Eu sunt Mia Kalifa, doctor docent in matematica";
console.log(replaceName.replace("Mia Kalifa", "Andrei Avram"));

var bonusName = "Sasha este o persoana de nota 10, Sasha invata javascript(mai nou)"
console.log(bonusName.replace(/Sasha/g, "Andrei"));

// Ex5: Vreau ca toate literele sa fie intai cu caractere mici si apoi cu caractere mari
var text = "24 de orE intr-o zi, 24 de beRi intr-o lAda. Vreo coincidenta?"
console.log(text.toUpperCase());
console.log(text.toLowerCase());

// Ex6: Vreau sa am la final un singur string cu toate celalte stringuri (indentati calumea, cu spatii unde e nevoie)
var text1 = "Când ai un";
var text2 = "ciocan";
var text3 = "in mana toate lucrurile ti se par";
var text4 = "cuie";
 console.log(text1 + " " + text2 + " "+ text3 + " " + text4);

// Ex7: Vreau sa stiu intai ce litera se afla pentru indexul 6, apoi ce unicode are aceasta litera, si apoi vreau sa o accesez cu 'property access'
var word = "Mamaliga";
console.log(word.charAt(6)) //g
console.log(word.charCodeAt(6)); //103 

// Ex8: Vreau sa am o noua variabla care sa cotina un array format din toate stringurile de mai jos care sunt despartite de '|'
var cars = "Toyota|Mazda|Tesla|Hyundai|Dacia";
console.log(cars.split("|"));

//----------------------------------------------------------------------------------------------------------------------
//some extra fun/practice

var accessory = 88.99;
var bankBalance = 400.00;
var amount = 110.00;
amount = amount * 2;
if (amount < bankBalance) {
  console.log('i`ll take it');
  amount = amount + accessory;
}
else {
  console.log("i can't afford");
}
bankBalance = bankBalance - amount;
console.log(bankBalance.toFixed(2));

//--------------------------------------------------------------------------------------------------------------------
//while loop

var i = 0;
while (true) {
  if (i <= 9) {
    console.log(i);
    i = i + 1;
  }
  else {
    break
  }
} 

//---------------------------------------------------------------------------------------------------------------------
// for
for (var i = 0; i <= 9; i = i + 1) {
  console.log(i);
}

//-----------------------------------------------------------------------------------------------------------------------
//YDKJS practice
var bankBalance = 1000.00;
const tax = 0.09;
const phonePrice = 99.00;
const accessory = 9.99;
const spendingThreshold = 300.99;
var amount = 0;
function calculateTax(amount) {
  return amount * tax;
}
function returnAmount(amount) {
  return '$' + amount.toFixed(2);
}
while (amount < bankBalance) {
  amount = amount + phonePrice;
}
  if (amount < spendingThreshold) {
    amount = amount + accessory;
  }

amount = amount + calculateTax(amount);
console.log("your purchase" + returnAmount(amount));

if (amount > bankBalance) {
  console.log("you can't aford this purchase");
}

//----------------------------------------------------------------------------------------------------------------------


