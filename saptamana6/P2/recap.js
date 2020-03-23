// RECAP JS Functions
//Ex1
//Scrieti o functie multiplyByTen care atunci cand o apelam cu console.log(multiplyByTen(6)) sa avem 60 rezultat.
function multiplyByTen(a) {
  return a * 10;
}
multiplyByTen(19)
//Ex2
//Scrieti o functie myNameIs care sa ia un singur parametru si cand o apelam cu numele nostru sa returneze "Numele meu este ___"
function myNameIs(name) {
  return "Numele meu este " + name;
}
myNameIs("Andrei")
//Ex3 
//Scrieti o functie care sa transforme un numar in string.
function numberToString(number) {
  return number.toString();
}
numberToString(33)
//Ex4 
//Scrieti o functie care sa returneze patratul numarului pe care-l dam ca si argument.
function numberToSquare(number, power) {
  return Math.pow(number, power);
}
numberToSquare(2, 10)
//Ex5
//Scrieti o functie numita aflaViitorul care sa aiba 4 parametrii -  numele jobului, compania, in cati ani, si cati //bani - ar trebui sa returnam "Eu voi fi job in x ani la compania y si voi face z bani pe ora"
//Chemati/invocati/apelati acea functie de 3 ori cu diferite argumente.
function aflaViitorul(job, company, when, revenue) {
  return "Eu voi fi " + job + " in " + when + " ani la compania " + company + " si voi face " + revenue + " euro pe ora";
}
aflaViitorul("FE Developer", "Powered By Mia", "2", "100")
//Ex6
//Scrieti o functie care sa calculeze cati ani are o pisica in ani pisicesti avand in vedere ca 1 an de om = 7 ani de pisica.
// functia are 1 singur parametru - deci va accepta 1 singur argument.
// Rezultatul trebuie sa fie "Pisica mea are xx ani in ani pisicesti"
//BONUS - adaugati un alt parametru care reprezinta varsta noastra si obtinem la final varsta pisciii relatata la varsta noastra.
function catAge(age, humanAge) {
  age = age * 7;
  humanAge = humanAge / 7;
  return "Pisica mea are " + age + " ani in ani pisicesti iar eu am " + humanAge.toFixed(2) + " ani in ani pisicesti";
}
catAge(3, 30)
//Ex7
// Vreau sa scriu o functie ce sa calculeze pentru urmatorii X ani cate cani de cafea voi bea
// Functia accepta ca parametrii years si coffePerDay.
// Rezultatul va fi "In urmatorii X ani voi bea in total Y cani de cafea"
function howMuchCoffe(years, coffePerDay) {
  coffePerDay = coffePerDay * 365;
  var result = coffePerDay * years;
  return "In urmatorii " + years + " ani voi bea in total " + result + " cani de cafea.";
}
howMuchCoffe(3, 4)
//EX8 BONUS 
// Faceti 2 functii una calculateCelsiusToFarenheit() si una calculateFarenheitToCelsius() unde sa facem conversia dintre celsius si farenhite.
// rezultatul trebuie sa fie "X grade Celsius reprezinta Y grade Farenhite"
// folositi https://www.mathsisfun.com/temperature-conversion.html ca si referinta pentru calcul.
function calculateCelsiusToFarenheit(celsius) {
  var farenhite = ((celsius / 5) * 9) + 32;
  return celsius + " grade Celsius reprezinta " + farenhite + " grade Farenhite";
}
calculateCelsiusToFarenheit(30)

function calculateFarenheitToCelsius(farenhite) {
  var celsius = (farenhite - 32) * 5 / 9;
  return farenhite + " grade Farenhite reprezinta " + celsius + " grade Celsius";
}
calculateFarenheitToCelsius(86)
/////////////////////////////////////////////////


///////////////////////////////////////////////////
//RECAP JS Strings
///////////////////////////
//Ex1 : La ce index intalnim cuvantul 'trece', dar cuvantul 'javascript'? Scrieti si metodele folosite.
var str = "Daca te simti bine, nu te ingrijora, trece!";
//Raspuns: 37, -1;
str.indexOf("trece");
str.indexOf("javascript");
// Ex2.0: Returnati stringul Kiwi folosind metoda slice() cu indexi pozitivi si apoi negativi.
// Ex 2.1: Returnati toate fructele incepand de la 'Lemon'.
var fruits = "Apple, Lemon, Plum, Kiwi";
fruits.indexOf("Kiwi");
fruits.slice(20);
fruits.slice(-4);
fruits.slice(7);
// Ex 3: Returnati stringul 'Plum' folosind metoda substr()
var moreFruits = "Apple, Lemon, Plum, Kiwi";
fruits.indexOf("Plum");
moreFruits.substr(14, 4);
// Ex 4: Inlocuiti 'Mia Kalifa' cu numele vostru folosind o metoda pe stringuri
// bonus: Inlocuiti "Sasha" cu numele vostru in tot stringul de mai jos.
var replaceName = "Eu sunt Mia Kalifa, doctor docent in matematica";
replaceName.replace("Mia Kalifa", "Andrei Avram");
var bonusName =
  "Sasha este o persoana de nota 10, Sasha invata javascript(mai nou)";
bonusName.replace(/Sasha/g, "Andrei Avram");
// Ex5: Vreau ca toate literele sa fie intai cu caractere mici si apoi cu caractere mari
var text = "24 de orE intr-o zi, 24 de beRi intr-o lAda. Vreo coincidenta?";
var textToUpper = text.toUpperCase();
textToUpper;
var textToLower = text.toLowerCase();
textToLower;
// Ex6: Vreau sa am la final un singur string cu toate celalte stringuri (indentati calumea, cu spatii unde e nevoie)
var text1 = "Când ai un";
var text2 = "ciocan";
var text3 = "in mana toate lucrurile ti se par";
var text4 = "cuie";
var combined = text1 + " " + text2 + " " + text3 + " " + text4;
combined;
// Ex7: Vreau sa stiu intai ce litera se afla pentru indexul 6, apoi ce unicode are aceasta litera, si apoi vreau sa o accesez cu 'property access'
var word = "Mamaliga";
word.charAt(6); //g
word.charCodeAt(6); //103
word[6]; //g
// Ex8: Vreau sa am o noua variabla care sa cotina un array format din toate stringurile de mai jos care sunt despartite de '|'
var cars = "Toyota|Mazda|Tesla|Hyundai|Dacia";
var cars2 = cars.split("|");
cars2;
//Big BONUS 
// Se dau variabilele de mai jos, vreau sa ajung la rezultatul "NU EXISTA INTREBARI PROASTE" fara sa modific valorile celor 2 variabile;
var firstWord = 'Nu exista';
var secondWord = 'raspunsuri proaste';
var result = firstWord.concat(secondWord);
var final = result.replace("raspunsuri", " intrebari").toUpperCase();
final;

//week 5 p2 homework redone;

///////////////////////////////////////////////
//RECAP ARRAYS, OBJECTS
///////////////////
//Ex1: Creati un array care sa aiba length-ul 5. Demonstrati ca length-ul este 5.
var cat = ["cute", "fluffy", "loveable", "crazy", "fun"];
cat.length
//Ex2: Din cele 2 arrayuri de mai jos, folositi o metoda sa avem unul singur
var array1 = ['Car', 'Vehicle'];
var array2 = ['House', 'Job'];
var array3 = array1.concat(array2);
array3
//Ex3: Creati 2 variabile, una care sa dea true si una care sa dea false atunci cand folosim metoda isArray()
var isTrue = ["car", "home"];
Array.isArray(isTrue);
var isFalse = 3;
Array.isArray(isFalse);
//Ex4: Folositi o metoda pe arrayuri avand in vedere variabila de mai jos, sa obtinem rezultatul "one and two and three and four and five" 
// fara sa modificati variabila initiala
var numbers = ['one', 'two', 'three', 'four', 'five'];
numbers.join(" and ");
//Ex5: Adaugati 2 elemente noi in arrayul de mai jos
var cars = ['Tesla', 'Dacia'];
cars.push("BMW", "Volvo");
cars
//Ex6: Avand rezultatul de la exercitiul anterior, scoateti ultimul element intrat.
var cars = ['Tesla', 'Dacia'];
cars.push("BMW", "Volvo");
cars.pop();
//Ex7: Avand rezultatul exercitiului anterior, adaugati elementul 'Dodge' la inceputul arrayului
var cars = ['Tesla', 'Dacia'];
cars.push("BMW", "Volvo");
cars.unshift("Dodge");
cars
//Ex8: Avand rezultatul exercitiului anterior, inversati ordinea elementelor din array
var cars = ['Tesla', 'Dacia'];
cars.push("BMW", "Volvo");
cars.unshift("Dodge");
cars.reverse();
//Ex9: Avand in vedere rezultatul anterior Folositi o metoda pe arrayuri care sa inlocuiasca incepand de la elementul 'Tesla' si sa adauge alte 2 elemente noi - splice();
var cars = ['Tesla', 'Dacia'];
cars.push("BMW", "Volvo");
cars.unshift("Dodge");
cars.splice(1, 3, "Audi", "Bugatti");
cars
//Ex10: Sortati urmatorul array de la mic la mare si de la mare la mic 
var arrayNumbers = [1, 5, 20, 30, 100];
arrayNumbers.sort(function (a, b) {
  return a - b;
});
//Ex11 : Aveti urmatorul array - folositi o functie care sa ia arrayul ca argument si sa-l returneze ordonat
var fruitsArray = ["Apple", "Lemon", "Banana", "Orange", "Bere", "Mici"];
function toBeSorted() {
  return fruitsArray.sort();
}
toBeSorted()
////////////////////////////////////////////////////////////////////
//Objects Recap
// Ex1
// Creati un obiect "car"
// Adaugati proprietatea name si valoarea Tesla
// Adaugat proprietatea wheels si valoarea 4
// Schimbati valoarea name sa fie Mercedes
// Stergeti proprietatea name
var car = {
  name: 'Tesla',
  wheels: 4,
}
car.name = "Mercedes";
delete car.name;
//Ex2
// Creati un obiect cu 4 proprietati
// Stocati "key"-urile intr-o variabila noua
// intr-o alta variabila vreau sa am toate key-urile cu litere mari
// Stocati valorile intr-o variabila noua
// intr-o alta variabila vreau sa am toate valorile cu litere mici
// vreau la final sa ma rezultatul un singur string care sa contina o fraza de genul "proprietatea1 proprietatea2 proprietatea3 proprietatea4 reprezinta ceva"
var fridge = {
  color: 'White',
  doors: 2,
  iceCubes: 'None',
  beer: 'a lot'
}
var fridgeMambo = Object.keys(fridge);
var fridgeJumbo = fridgeMambo.join(" ").toUpperCase();
var fridgeValues = Object.values(fridge);
var fridgeValuesLower = fridgeValues.join(" ").toLowerCase();
fridgeValuesLower

//Ex3
// Creati un obiect  cu 3 proprietati si una dintre ele sa reprezinte o  metoda
// Metoda din obiect vreau sa returneze sau sa printeze (console.log()) prima valoare impreuna cu a doua valoare.
var car = {
  name: 'Tesla',
  color: "Blue",
  say: function () { console.log("This " + this.name + " is " + this.color) }
};
car.say();
//Ex4 
// Creati un obiect cu cateva proprietati
// "Copiati" obiectul printr-o metoda specifica obiectelor(vedeti pe google) si stocatil intr-o alta variabila
// Pe obiectul nou adaugam 2 noi proprietati
// Avem obiectul de mai jos, folosind o metoda pe obiecte faceti "merge" intre cele 2 obiecte si salvati-l sub un nume nou.
myHouse = {
  rooms: 3,
  zone: "Bucium",
  animals: 1
}
var relax = {
  beach: 'sunny',
  view: 'mesmerizing',
  cocktails: 'mojitos',
}
var copiedRelax = Object.assign(relax);
copiedRelax.location = 'Somewhere warm';
copiedRelax.weather = 'calm';
var myHouse = {
  rooms: 3,
  zone: "Bucium",
  animals: 1
}
var niceDream = Object.assign(relax, myHouse);
niceDream;
// Ex5 
// Creati un obiect care sa contina un alt obiect in interorul lui cu 2 proprietati
// Accesati proprietatile acelui obiect si stocati key-le intr-o variabila separata.
// transformati arrayul intr-un singur string care sa rezulte "proprietatea1 si proprietatea2 apartin obiectului x"
var deep = {
  name: {
    fullname: 'Andrei Avram',
    username: 'andreiavramm'
  },
}
var stocked = Object.keys(deep.name);
console.log(stocked.join(" si ") + " apartin obiectului name");
//Ex6
// Avem obiectul : 
var myObject = {
  name: "John",
  surname: "Applegate",
}
//Adaugati o metoda care sa sorteze cele 2 valori ale numelui.
var valuesSorted = Object.values(myObject).sort();
valuesSorted
//Ex7 
//Faceti o functie constructor
// Cu functia constructor creati 3 obiecte cu valori diferite
// Pentru toate valorile din acele obiecte transformatile in litere mari.
function Girl(eyes, hair, nails) {
  this.eyes = eyes.toUpperCase();
  this.hair = hair.toUpperCase();
  this.nails = nails.toUpperCase()
}
var blonde = new Girl('green', 'blonde', 'red');
var brunette = new Girl('brown', 'dark', 'black');
var ginger = new Girl('blue', 'red', 'turqoise');

///////////////////////////////
//CONDITIONALS RECAP (W6P2)
///////////////////////////////
/**Scrieti o functie de tip named function denumita greatestNrBetween care:
- Primeste ca argumente doua numere
- Returneaza numarul care este mai mare
Apelati functia de doua ori si afisati pe ecran textul: “Numarul mai mare dintre 5 si 10 este 10“ */
function greatestNrBetween(num1, num2) {
  if (num1 > num2) {
    return "Numarul mai mare dintre  " + num1 + " si " + num2 + " este " + num1;
  } else { return "Numarul mai mare dintre " + num1 + " si " + num2 + " este " + num2; }
}
greatestNrBetween(52, 50)

/**2. Scrieti o functie de tip function expression asociata cu numele helloWorldInLang care:
- Primeste ca argument codul unei limbi: “en”, “es”, “de”
- Returneaza “Hello World” pentru limba corespunzatoare ( cel putin 3 limbi )
- Daca limba nu este specificata, trebuie sa returneze textul pentru limba engleza
Apelati functia pentru fiecare caz in parte. */
var helloWorldInLang = function (lang) {
  if (lang === "en") { return "Hello World!" }
  else if (lang === "es") { return "Hablas Mojitos?" }
  else if (lang === "de") { return "Rammstein!" }
  else { return "Hello World!" }
}
helloWorldInLang('es')
helloWorldInLang('en')
helloWorldInLang('de')
helloWorldInLang('ro')

/**Scrieti o functie numita pluralizeWord care:
- accepta doua argumente: un substantiv in engleza si un numar
- returneaza numarul si forma de plural corespunzatoare substantivului, precum: “5 cats”, “1 dog”
- adaugati cateva cazuri particulare pentru cuvinte precum “sheep” sau “geese” */
function pluralizeWord(nom, nr) {
  if (nom === "sheep") {
    return nom;
    return
  }

  if (nom === "goose") {
    return nr + " geese";
    return;
  }
  if (nr > 1) { return nr + " " + nom + "s" }
  else { return nr + " " + nom }
}

pluralizeWord('cat', 2)

/**4. Scrieti o functie care accepta ca argument venitul anual al unui angajat in dolari (ex: $30,000) si calculeaza taxa
corespunzatoare considerand urmatoarele criterii:
- daca angajatul castiga anual o suma mai mica de $30,000, taxa este 0%
- daca venitul anual se situeaza intre $50,000 - $99,999, taxa calculata trebuie sa fie 35%
- pentru venit mai mare de $100,000, taxa se calculeaza ca procentaj de 40%
Returnati un text care sa aiba un format asemanator: “Pentru un venit anual de x, aveti de platit taxe in valoare de y” */
function taxCalculator(income) {
  if (income < 30000) {
    return 'Pentru un venit anual de $' + income + ', aveti de platit taxe in valoare de $0';
  } else if (income >= 50000 && income <= 99999) {
    return 'Pentru un venit anual de $' + income + ', aveti de platit taxe in valoare de $' + income * 0.35;
  } else if (income >= 100000) {
    return 'Pentru un venit anual de $' + income + ', aveti de platit taxe in valoare de $' + income * 0.4;
  }
}
taxCalculator(24900)
taxCalculator(51000)
taxCalculator(120000)

/**Scrieti in doua variante o functie care accepta ca argument o valoare numerica pentru un parametru numit points si
afiseaza: */
//V1
function comparison(points) {
  if (points > 90) { return "AA" }
  else if (points > 80 && points <= 90) { return 'AB' }
  else if (points > 70 && points <= 80) { return 'BB' }
  else if (points > 60 && points <= 70) { return 'BC' }
  else if (points > 50 && points <= 60) { return 'CC' }
  else if (points > 40 && points <= 50) { return 'CD' }
  else if (points > 30 && points <= 40) { return 'DD' }
  else (points <= 30); { return 'FF' }
}
comparison(29)
//V2
function assignValor(points) {
  switch (points !== 0) {
    case (points > 90): return 'AA';
    case (points > 80 && points <= 90): return 'AB';
    case (points > 70 && points <= 80): return 'BB';
    case (points > 60 && points <= 70): return 'BC';
    case (points > 50 && points <= 60): return 'CC';
    case (points > 40 && points <= 50): return 'CD';
    case (points > 30 && points <= 40): return 'DD';
    case (points > 1 && points <= 30): return 'FF';
    default: return 'Number not in range';
  }
}
assignValor(40)

/**6. Scrieti o functie care testeaza daca o anumita data introdusa este in weekend: */
function isWeekend(date) {
  var today = new Date(date);
  if (today.getDay() == 6 || today.getDay() == 0) {
    return "weekend";
  }
  return 'not weekend'
}
isWeekend('nov 16, 2014')