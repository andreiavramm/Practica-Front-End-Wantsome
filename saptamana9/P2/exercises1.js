//Selectati fiecare element cu metodele ajutatoare
// primul dupa id - getElementById
//al doilea si al 3lea cu getElementsByClassName
//cele 2 section cu getElementByTagName
//etc
// La fiecare selectie vom schimba background color-ul cu o culoare diferita pentru fiecare metoda

const testId = document.getElementById('test');
testId.style.backgroundColor = 'green';

const testClass = document.getElementsByClassName('test');
testClass[0].style.backgroundColor = 'blue';
testClass[1].style.backgroundColor = 'red';

const testSection = document.getElementsByTagName('section');
testSection[0].style.backgroundColor = 'orange';
testSection[1].style.backgroundColor = 'gray';

const testQuerry = document.querySelector('#test-query');
testQuerry.style.backgroundColor = 'pink';

const testQueryAll = document.querySelectorAll('.test-query-all');
testQueryAll[0].style.backgroundColor = 'lime';
testQueryAll[1].style.backgroundColor = 'magenta';

const testTitle = document.querySelector('h1');
testTitle.style.backgroundColor = 'lightblue';
