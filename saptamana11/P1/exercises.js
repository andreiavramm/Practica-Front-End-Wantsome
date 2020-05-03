function capitalizeNames(arr) {
    let capitalize = arr.map(arr => arr.toUpperCase());
    return capitalize;
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
// ["John", "Jacob", "Jingleheimer", "Schmidt"]

function doubleEachNumber(arr) {
    doubledNum = arr.map(item => {
        if (typeof item !== 'number') {
            return item;
        } 
        
        return item * 2;
    });

    return doubledNum;
}
console.log(doubleEachNumber([2, '5', 100, '100', 'blalblala']))

function getPersonsNames(arr) {
    let namesReturn = arr.map(item => `${item.name} ${item.surname}`);
    return namesReturn;
}
console.log(getPersonsNames([
    {
        name: "Angelina",
        surname: 'Jolie',
        age: 80
    },
    {
        name: "Eric",
        surname: 'Jones',
        age: 27
    },
]));
