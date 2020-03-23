/** Ex 1. Scrieti o functie sub forma named function care accepta ca argument un CNP si verifica sexul unei persoane. 
 * In urma apelului acestei functii, * se va returna un text de forma "Persoana verificata este de sexul M/F". */
//vreau sa fac exercitiul prin switch si prin if else folosind charAt(0) si daca este 1 sa fie sex masculin daca este 2 sa fie feminin
//rezolvare switch
function genderVerification(cnp) {
    switch (cnp !== 0) {
        case (cnp.toString().charAt(0) === '1'): return 'Persoana verificata este de sexul Masculin'
        case (cnp.toString().charAt(0) === '2'): return 'Persoana verificata este de sexul Feminin'
        default: return 'Persoana verificata este de alt sex'
    }
}
genderVerification(112)
genderVerification(212)
/// rezolvare if
function genderVerifier(cnp) {
    if (cnp.toString().charAt(0) == '1') {
        return 'Persoana verificata este de genul Masculin';
    }
    else if (cnp.toString().charAt(0) == '2') {
        return 'Persoana verificata este de genul Feminin';
    }
}
genderVerifier(112)
genderVerifier(211

/**Ex 2.  Scrieti o functie sub forma function expression care accepta ca argument o valoare numerica cuprinsa intre 1 si 10 si decide calificativul punctajului. */)
// rezolvare prin metoda switch unde aloc fiecarui caz criteriile corespunzatoare cafilicativului;
var x = function (grade) {
    switch (grade !== 0) {
        case (grade > 1 && grade <= 3): return 'Calificativul corespunzator punctajului ' + grade + ' este E.'
        case (grade > 3 && grade <= 6): return 'Calificativul corespunzator punctajului ' + grade + ' este D.'
        case (grade >= 7 && grade <= 8): return 'Calificativul corespunzator punctajului ' + grade + ' este B.'
        case grade === 9: return 'Calificativul corespunzator punctajului ' + grade + ' este A.'
        case grade === 10: return 'Calificativul corespunzator punctajului ' + grade + ' este A+.'
    }
}
x(10)

/**Ex 3. Scrieti o functie care accepta ca argument numele marcii unei masini si returneaza un text de forma: "Marca [marca] se produce in [tara]". 
 * Trebuie sa aveti macar 6 cazuri. In cazul in care functia nu recunoaste marca, va returna "Marca este necunoscuta. " 
 * Scrieti codul in 3 variante diferite. In declararea functiei trebuie sa se regaseasca o functie anonima. Una dintre implementari trebuie sa fie bazata pe Object Literals */
// pentru prima rezolvare voi folosi o declared function cu if si else if;
// pentru a doua rezolvare voi folosi o functie anonima cu switch
// pentru a treia rezolvare voi folosi Object Literal lookups
//rezolvare 1:
function whereItsMade(brand) {
    if (brand === 'BMW') return 'Marca ' + brand + " se produce in Germania";
    else if (brand === 'Audi') return 'Marca ' + brand + " se produce in Germania";
    else if (brand === 'Mercedes') return 'Marca ' + brand + " se produce in Turcia";
    else if (brand === 'Mazda') return 'Marca ' + brand + " se produce in Japonia";
    else if (brand === 'Fiat') return 'Marca ' + brand + " se produce in Italia";
    else if (brand === "Dacia") return 'Marca ' + brand + " se produce in Romania";
    else return 'Marca este necunoscuta'
}
whereItsMade('Dacia')
//rezolvare 2:
var car = function (brand) {
    switch (brand !== 0) {
        case brand === 'BMW': return 'Marca ' + brand + " se produce in Germania";
        case brand === 'Audi': return 'Marca ' + brand + " se produce in Germania";
        case brand === 'Mercedes': return 'Marca ' + brand + " se produce in Turcia";
        case brand === 'Mazda': return 'Marca ' + brand + " se produce in Japonia";
        case brand === 'Fiat': return 'Marca ' + brand + " se produce in Italia";
        case brand === 'Dacia': return 'Marca ' + brand + " se produce in Romania";
        default: return 'Marca nu este cunoscuta'
    }
}
car('Audi')
//rezolvare 3:
function whereItsMade(brand) {
    return 'Marca ' + brand + " se produce in " + {
        'BMW': 'Germania',
        'Mercedes': 'Turcia',
        'Mazda': 'Japonia',
        'KIA': 'Koreea',
        'Dacia': 'Romania',
        'Ford': 'Nigeria',
        'VW': 'Germania',
    }[brand];
}
whereItsMade('KIA')

    /** Ex 4. Scrieti o functie de tip IIFE care:
    - sorteaza urmatorul array in functie de proprietatea "salary" a fiecarui obiect continut: */
    (function () {
        var cars = [
            { name: "John", salary: 20000 },
            { name: "Danny", salary: 30500 },
            { name: "Bekker", salary: 15000 }
        ];
        cars = cars.sort(function (a, b) {
            return a.salary - b.salary;
        });
        console.log(cars);
    })();