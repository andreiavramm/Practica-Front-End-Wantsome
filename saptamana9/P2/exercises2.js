const testUl = document.querySelector('ul');
const testUlChildren = testUl.children;
testUlChildren[1].previousElementSibling.style.backgroundColor = 'red';
testUlChildren[1].nextElementSibling.style.backgroundColor = 'green';
