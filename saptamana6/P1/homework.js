//arrays
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

//objects
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
  function Girl(eyes, hair, nails){
    this.eyes = eyes.toUpperCase();
    this.hair = hair.toUpperCase();
    this.nails = nails.toUpperCase()
  }
  var blonde = new Girl('green', 'blonde', 'red');
  var brunette = new Girl('brown', 'dark', 'black');
  var ginger = new Girl('blue', 'red', 'turqoise');