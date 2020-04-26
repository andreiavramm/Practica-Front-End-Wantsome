const buttonAlert = document.getElementById('button');
buttonAlert.onclick = () => {
    alert('Ai apasat pe buton');
}

const textChange = document.getElementById('textInput');
textChange.onchange = () => {
    alert('Textul din input a fost schimbat');
}

const changeColor = document.querySelector('textInput');
const pSelect = document.querySelector('p');

const newColor = () => {
    let colors = ['red', 'yellow', 'blue', 'black', 'green'];
    let randomColor = colors[Math.floor(Math.random() * 5)]
    pSelect.style.color = colors[Math.floor(Math.random() * 5)]
   console.log(randomColor)
}
textChange.addEventListener('keydown', newColor);