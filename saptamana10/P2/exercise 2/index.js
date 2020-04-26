let url = 'https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json';
let xhttp = new XMLHttpRequest();
xhttp.open('GET', url);
xhttp.responseType = 'json';
xhttp.send();

const list = document.querySelector('li');

xhttp.onload = function () {
    const colors = xhttp.response;
    populateList(colors);
    colors(colors);
}

const populateList = (jsonObj)  => {
    const myLi = document.createElement('li');
    myLi.textContent = jsonObj['keys']
    list.appendChild(myLi)
}
