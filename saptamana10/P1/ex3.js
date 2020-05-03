//1
//adaugati un tag script si adaugati urmatoarele functii
// sqrNum, halfNum, percentNum si areaCircle
const btnSqr = document.querySelector('#sqr-btn');
const sqrNum = () => {
    const number = document.querySelector('#square').value;
    alert(number * number);
}


const btnHalf = document.querySelector('#half-btn');
const halfNUm = () => {
    const number = document.querySelector('#half').value;
    alert(number / 2);
}

const btnPercent = document.querySelector('#prc-btn');
const percentNum = () => {
    const firstNum = document.querySelector('#percent1').value;
    const secondNum = document.querySelector('#percent2').value;
    alert(firstNum * 100 / secondNum + '%');
}

const btnArea = document.querySelector('#area-btn');
const areaCircle = () => {
    const number = document.querySelector('#area').value;
    alert(Math.PI * number * number);
}
//2 pentru fiecare button aveeti de adaugat un event listner
// care atunci cand este clickuit sa gaseasca valoarea inputului
// si sa afiseze rezultatul solutiei
btnSqr.addEventListener('click', sqrNum);
btnHalf.addEventListener('click', halfNUm);
btnPercent.addEventListener('click', percentNum);
btnArea.addEventListener('click', areaCircle);

//3
// Bonus: faceti sa functioneze si la key press pe langa click
