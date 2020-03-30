/**Scrieti o functie care accepta ca argument o valoare numerica si afiseaza de atatea ori pe ecran textul: “Sunt la iteratia
numarul [index]” - Scrieti codul in doua variante */
var imAt = function (count) {
  for (var i = 0; i <= count; i++) {
    console.log('sunt la iteratia ' + i)
  }
}
imAt(15)

/**Scrieti o functie care accepta ca argument un array si afiseaza in consola elementele acestuia prin parcurgerea sa -
Scrieti codul in doua variante */
var arr = ['unu', 'doi', 'trei']
function goThr(arr) {
  for (var value in arr) {
    console.log(arr)
  }
}
goThr(arr)

/**Scrieti o functie care accepta ca argument un obiect si afiseaza in consola elementele acestuia prin parcurgerea sa -
scrieti codul in doua variante */
var arr = {
  name: 'Andrei',
  age: 30,
  location: 'Iasi'
}
function read(arr) {
  for (var values in arr) {
    console.log(arr[values])
  }
}
read(arr)



