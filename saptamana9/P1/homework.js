// acum se printeaza in consola '1' '2' '3' '4' '5' .
// Vrem sa fie ordinea '3' '5' '2' '1' '4'
//hint setTimeout

const func1 = () => {
    setTimeout(() => console.log('1'), 4)
}

const func2 = () => {
    setTimeout(() => console.log('2'), 3)
}

const func3 = () => {
    console.log('3')
}

const func4 = () => {
    setTimeout(() => console.log('4'), 5)
}

const func5 = () => {
    setTimeout(() => console.log('5'))
}

func1();
func2();
func3();
func4();
func5();

// 1

function customMap(array, callback) {
    var arr = [];
    for (var index in array) {
        arr.push(callback(array[index]));
    }
    return arr;
}

var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const increment = (value) => {
    return value + 1;
};

console.log(customMap(randomArray, increment));  // Implement the function named print so that thos console.log would display the result [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ] in the console

const double = (value) => {
    return value * 2;
};

console.log(customMap(randomArray, double));  // Implement the function named double so that thos console.log would display the result [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]

const square = (value) => {
    return value * value;
};

console.log(customMap(randomArray, square));  // Implement the function named square so that thos console.log would display the result [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]

// 2


// This function will go over every element in an array one by one, calling the
// callback with each item, adding the element to a new array only if
// the callback returns true, and finally returning the new array.
const filter = function (array, callbackFn) {
    let filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        let checkElement = array[i];
        if (callbackFn(checkElement)) {
            filteredArray.push(checkElement);
        }
    }
    return filteredArray;
};

let anArray = [0, -8, 16, 22, -18, 55, 15, -25, 88, 22, -17];

let greaterThanZero = (element) => {
    return (element > 0) ? true : false;
}
let lessThanZero = (element) => {
    return (element < 0) ? true : false;
}
let dividedByFive = (element) => {
    return (element % 5 === 0 && element !== 0) ? true : false;
}
let odd = (element) => {
    return (element % 2 !== 0) ? true : false;
}
let even = (element) => {
    return (element % 2 === 0) ? true : false;
}

//Call the filter function in 5 different cases ( 5 different filtering functions - example: filters the odd items, filter the items which are divisible by 3, etc... )
filter(anArray, greaterThanZero);
filter(anArray, lessThanZero);
filter(anArray, dividedByFive);
filter(anArray, odd);
filter(anArray, even);

// 3 

/*
Write a function named multipleCallbacks that accepts 3 arguments:
	- an object containing a key name status that can have 2 different values: success or error
  - a function that should be called if the value of the status key is success
  - a function that should be called if the value of the status key is error
*/
const multipleCallbacks = (anObject, succes, error) => {
    let result = '';
    if (anObject.status === 'succes') {
        result = succes();
    } else if (anObject.status === 'error') {
        result = error();
    } else {
        return 'Object in not valid!';
    }
    return result;
}

function statusObj(status) {
    this.status = status;
}

const ifSucces = () => {
    return 'Succes';
}

const ifError = () => {
    return 'Error';
}

let succesObj = new statusObj('succes');
let failureObj = new statusObj('error');

multipleCallbacks(succesObj, ifSucces, ifError);
multipleCallbacks(failureObj, ifSucces, ifError);
