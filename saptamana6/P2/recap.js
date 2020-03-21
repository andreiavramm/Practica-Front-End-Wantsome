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
    return "Eu voi fi " + job + " in " + when + " ani la compania " +  company + " si voi face " + revenue + " euro pe ora";
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
 
  
  
  
  
  
  