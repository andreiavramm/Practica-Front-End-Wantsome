//Ex1: Creati un array care sa aiba length-ul 5. Demonstrati ca length-ul este 5.
var arrayOfFive = ["one", "two", "three", "four", "five"];
console.log(arrayOfFive.length);
//Ex2: Din cele 2 arrayuri de mai jos, folositi o metoda sa avem unul singur
var array1 = ['Car', 'Vehicle'];
var array2 = ['House', 'Job'];
var result = array1.concat(array2);
console.log(result);
//Ex3: Creati 2 variabile, una care sa dea true si una care sa dea false atunci cand folosim metoda isArray()
var arrayTrue = [1, 2, 3];
var arrayFalse = [2, 5, "bla"];
console.log(Array.isArray(arrayTrue));
console.log(Array.isArray(arrayFalse));
//Ex4: Folositi o metoda pe arrayuri avand in vedere variabila de mai jos, sa obtinem rezultatul "one and two and three and four and five" 
// fara sa modificati variabila initiala
var numbers = ['one', 'two', 'three', 'four', 'five'];
var result = numbers.join(" and ");
console.log(result);
//Ex5: Adaugati 2 elemente noi in arrayul de mai jos
var cars = ['Tesla', 'Dacia'];
cars.push('BMW', 'Audi');
console.log(cars);
//Ex6: Avand rezultatul de la exercitiul anterior, scoateti ultimul element intrat.
cars.pop();
console.log(cars);
//Ex7: Avand rezultatul exercitiului anterior, adaugati elementul 'Dodge' la inceputul arrayului
cars.unshift("Dodge");
console.log(cars);
//Ex8: Avand rezultatul exercitiului anterior, inversati ordinea elementelor din array
cars.reverse();
console.log(cars);
//Ex9: Avand in vedere rezultatul anterior Folositi o metoda pe arrayuri care sa inlocuiasca incepand de la elementul 'Tesla' si sa adauge alte 2 elemente noi - splice();
console.log(cars.indexOf("Tesla"));
cars.splice(2, 2, "Seat", "Ford");
console.log(cars);
//Ex10: Sortati urmatorul array de la mic la mare si de la mare la mic 
var arrayNumbers = [1, 5, 20 ,30, 100];
arrayNumbers.sort(function(a,b){
  return a - b;
});
console.log(arrayNumbers);
arrayNumbers.sort(function(a,b){
  return b - a;
});
console.log(arrayNumbers);
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Ex1
// Creati un obiect "car"
// Adaugati proprietatea name si valoarea Tesla
// Adaugat proprietatea wheels si valoarea 4
// Schimbati valoarea name sa fie Mercedes
// Stergeti proprietatea name
var car = {
    name: "Tesla",
    wheels: 4,
    };
    car.name = 'Mercedes';
    delete car.name;

//Ex3
// Creati un obiect  cu 3 proprietati si una dintre ele sa reprezinte o  metoda
// Metoda din obiect vreau sa returneze sau sa printeze (console.log()) prima valoare impreuna cu a doua valoare.
var hello = {
    text1: "Hi, my name is ",
    text2: "Andrei and I like Mia",
    sayIt: function() {return console.log(this.text1 + this.text2)}
    };


