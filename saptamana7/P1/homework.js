/**Scrieti un for care itereaza de la 0 la 20. Pentru fiecare iteratie, verifica daca numarul curent este par sau impar si va
raporta acest lucru in consola. (exemplu: “2 este numar par”);
Scrieti functia in doua variante: while si for
 */
//voi scrie un for cu var i = 0, i < 20 si care aduna rezultatul i pentru fiecare iteratia.
// voi introduce o conditie care verifica daca rezultatul impartirii indexului la 2 este numar par si afiseaza in consola acest lucru

function isInt(num) {
    for (var i = 0; i <= num; i++) {
        var check = i / 2;
        if (check === parseInt(check, 10)) {
            console.log(i + ' este numar par')
        }
        else {
            console.log(i + ' nu este numar par')
        }
    }
}
isInt(20)
//V2 cu do...while, face acelasi lucru cu valoare -1 
function isInt(num) {
    do {
        num++;
        var check = num / 2;
        if (check === parseInt(check, 10)) {
            console.log(num + ' este numar par')
        }
        else {
            console.log(num + ' nu este numar par')
        }

    } while (num < 20)
}

isInt(-1)

/**Scrieti un for care itereaza de la 0 la 10. Pentru fiecare iteratie, se va multiplica numarul curent cu 9 si se va afisa
rezultatul. (exemplu: “3*9=27”).
 Scrieti functia in doua variante: while si for */
// voi declara o functie care va avea ca argument 10 si va cuprinde un for cu parametrii 0, < numar, incrementare. voi mai declara o variabila care va 
// stoca resultatul inmultirii iteratiei cu 9 iar in consola se va afisa rezultatul iteratiei.
function multiplyByNine(num) {
    for (var i = 0; i <= num; i++) {
        var result = i * 9;
        console.log(i + ' * 9 = ' + result)
    }
}
multiplyByNine(10)

//V2 - while
function multiplyByNine(num) {
    while (num < 10) {
        num++;
        var result = num * 9;
        console.log(num + ' * 9 = ' + result)
    }
}
multiplyByNine(-1)

/** Pentru fiecare cifra de la 1 la 10, afisati tabla inmultirii.
(exemplu: 1 * 0 = 0
 1 * 1 = 1
 …
 1 * 10 = 10 )
Pentru a afisa in consola pe linie noua puteti concatena un string, la final, cu + “\n”. */
// voi crea o variabila ce va stoca rezultatul dupa care folosim un for pentru numarul care vi fi
//inmultit(parametri 1, <=10, incrementare) in interiorul caruia mai folosim un for pentru inmultitor
// cu aceeasi parametri. variabila result va incrementa fiecare rezultat al inmultirilor si le 
// va afisa linie cu linie.
var result = '\n';
for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
        result += i + ' * ' + j + ' = ' + (i * j) + '\n';
    }
    result += '\n'
}

/**Pentru functia dezvoltata la cerinta 2 de la tema anterioara, verificati si afisati in consola fiecare calificativ care se
poate obtine pentru punctajele incepand de 1 la 10. (exemplu: “Pentru 2, obtii calificativul E. \n Pentru 7, obtii
calificativul B \n ...samd “). Atentie: Rezultatul calificativului trebuie sa fie obtinut prin utilizarea functiei
dezvoltate la tema anterioara !  */
var x = function (grade) {
    switch (grade !== 0) {
        case (grade >= 1 && grade <= 3): return 'Calificativul corespunzator punctajului ' + grade + ' este E.'
        case (grade > 3 && grade <= 6): return 'Calificativul corespunzator punctajului ' + grade + ' este D.'
        case (grade >= 7 && grade <= 8): return 'Calificativul corespunzator punctajului ' + grade + ' este B.'
        case grade === 9: return 'Calificativul corespunzator punctajului ' + grade + ' este A.'
        case grade === 10: return 'Calificativul corespunzator punctajului ' + grade + ' este A+.'
    }
}
function assignGrade() {
    for (var i = 1; 1 < 10; i++) {
        console.log(x(i))
    }
}
assignGrade()
   