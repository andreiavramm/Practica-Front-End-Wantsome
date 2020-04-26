const list = document.querySelector('ul');
const newItem = document.createElement('li');
newItem.textContent = 'Python';
list.appendChild(newItem);
const anotherNewItem = document.createElement('li');
anotherNewItem.textContent = '.Net';
list.insertBefore(anotherNewItem, list.firstElementChild);
const modifiedItem = document.createElement('li');
modifiedItem.textContent = 'More Javascript!';
list.replaceChild(modifiedItem, list.children[0]);
list.removeChild(list.lastElementChild);

const image = document.querySelector('img');
image.hasAttribute('src');
image.getAttribute('src');
image.removeAttribute('src');
image.setAttribute('src', 'https://dc8gwjuur0w0x.cloudfront.net/lists/avatars/000/000/047/original_o-PINT-GLASS-BEER-facebook.jpg?1473216955');
image.setAttribute('alt', 'cheers!');

const div = document.querySelector('div');
div.className = 'alert';
const secondDiv = document.querySelector('.active');
secondDiv.classList.toggle('hidden');
secondDiv.classList.remove('hidden');
secondDiv.classList.replace('active', 'alert');

// // Select the div
const divToBeStyled = document.getElementById('divToBeStyled');
// Make div into a circle, change color and font size
divToBeStyled.style.borderRadius = '50%';
divToBeStyled.style.backgroundColor = 'lightgreen';
divToBeStyled.style.fontSize = '30px';