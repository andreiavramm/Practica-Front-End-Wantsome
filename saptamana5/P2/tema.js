// Ex 1 Scrieti o functie care verifica daca un input este sau nu de tip string.

function isString(test) {
    if (typeof (test) === "string") {
        return true;
    } else {
        return false;
    }
}
isString("w3resource");
isString(2, 5);

// Ex 2 Scrieti o functie care verifica daca un string este gol sau nu.

function isBlank(test) {
    if (test.length === 0) {
        return true;
    } else {
        return false;
    }
}
isBlank("");
isBlank("abc");

// Ex 3 Scrieti o functie accepta ca input un string si il transforma intr un array de cuvinte:

function stringToArray(test) {
    return test.split(" ");
}
stringToArray("Robin Singh");

// Ex 4 Scrieti o functie care transforma un string in forma abreviata:

function abbrevName(test) {
    var name = test.trim().split(" ");
    if (name.length > 1) {
        return name[0] + " " + name[1].charAt(0) + ".";
    }
    else {
        return name[0];
    }
}
abbrevName("Robin Singh");

//Ex 5 Scrieti o functie care face prima litera a unui string sa fie de tip capital ( litera mare):

function capitalizeFirstLetter(test) {
    var result = test[0].toUpperCase();
    return result + test.slice(1);
}
capitalizeFirstLetter("js string exercises");

//Ex 6 Scrieti o functie care elimina un numar specificat de caractere pornind de la inceputul string ului:

function removeChar(text, toBeRemoved) {
    return text.slice(0, toBeRemoved);
}
removeChar("Robin Singh", 4);

// Ex 7 Scrieti o functie care specifica daca caracterul de la o anumita pozitie specificata dintr un string este litera mare sau nu:

function isUpper(text, toBeVerified) {
    if (text.charCodeAt(toBeVerified) >= 65 && text.charCodeAt(toBeVerified) <= 90) {
        return true;
    } else {
        return false;
    }
}
isUpper("Js STRING EXERCISES", 1);

//Ex 8 Scrieti o functie care insereaza un string la o anumita pozitie intr un alt string:

function insertStringAt(insert1, insert2, position) {
    return insert1.slice(0, position) + insert2 + insert1.slice(position);
}
insertStringAt("we are doing some exercises", "javascript ", 18)

// Ex 9 Scrieti o functie care elimina prima aparitie a unui string dintr un alt string:

function removeFirst(str, removeStr) {
    var index = str.indexOf(removeStr);
    if (index === -1) {
        return str;
    }
    return str.slice(0, index) + str.slice(index + removeStr.length);
}
removeFirst("the quick brown fox jumps over the lazy dog", "the")

// Ex 10 Scrieti o functie care compara doua string uri case insensitive:

function areEqual(a, b) {
    var string1 = a.toUpperCase;
    var string2 = b.toUpperCase;
    if (string1 === string2) {
        return true;
    }
}
areEqual("abcd", "AbcD");

// Ex 11 Scrieti o functie care face ca primul caracter a unui string sa fie de tip uncapital:

function uncapitalize(a) {
    return a.charAt(0).toLowerCase() + a.slice(1);
}
uncapitalize("Js string exercises.");