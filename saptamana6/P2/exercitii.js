//Scrieti o functie de tip named function denumita greatestNrBetween care:
//- Primeste ca argumente doua numere
//- Returneaza numarul care este mai mare
//Apelati functia de doua ori si afisati pe ecran textul: “Numarul mai mare dintre 5 si 10 este 10“

function greatestNrBetween(a, b) {
    if (a < b) {
      console.log("numarul mai mare dintre " + a + " si " + b + " este " + b);
    }
    else {
      console.log("numarul " + a + " nu este mai mare decat " + b);
    }
  }
  greatestNrBetween(7, 5)

  /**Scrieti o functie de tip function expression asociata cu numele helloWorldInLang care:
- Primeste ca argument codul unei limbi: “en”, “es”, “de”
- Returneaza “Hello World” pentru limba corespunzatoare ( cel putin 3 limbi )
- Daca limba nu este specificata, trebuie sa returneze textul pentru limba engleza
Apelati functia pentru fiecare caz in parte. */
var helloWorldInLang = function(l1) {
    if (l1 === "en") {
      console.log("Hello World!")
    }   else if (l1 === "es") {
      console.log("Hablas Espanol?")
    }   else if (l1 === "de") {
      console.log("Schnitzel!")
    }   else  {
      console.log("Hello World!")
    }
  }
  helloWorldInLang("ro")

  /**Scrieti o functie numita pluralizeWord care:
- accepta doua argumente: un substantiv in engleza si un numar
- returneaza numarul si forma de plural corespunzatoare substantivului, precum: “5 cats”, “1 dog”
- adaugati cateva cazuri particulare pentru cuvinte precum “sheep” sau “geese”  */
function pluralizeWord(a, b) {
    if (a === "sheep") {
      console.log(a);
      return;
    }
    if (a === "goose") {
      console.log(b + " geese");
      return;
    } 
    if (b >1) {
      console.log(b + " " + a + "s");
    } else {
      console.log(b + " " + a);
    }  
  }
  
  pluralizeWord("goose", 2)

  /**Scrieti o functie care accepta ca argument venitul anual al unui angajat in dolari (ex: $30,000) si calculeaza taxa
corespunzatoare considerand urmatoarele criterii:
- daca angajatul castiga anual o suma mai mica de $30,000, taxa este 0%
- daca venitul anual se situeaza intre $50,000 - $99,999, taxa calculata trebuie sa fie 35%
- pentru venit mai mare de $100,000, taxa se calculeaza ca procentaj de 40%
Returnati un text care sa aiba un format asemanator: “Pentru un venit anual de x, aveti de platit taxe in valoare de y” */

/**
 *  6 Scrieti in doua variante o functie care accepta ca argument o valoare numerica pentru un parametru numit points si
afiseaza:
 */

 function cond(points) {
     if(points>90) {
         console.log("AA")
     }
 }