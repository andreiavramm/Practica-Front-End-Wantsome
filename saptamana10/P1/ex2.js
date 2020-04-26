//1 Adaugati un tag script pentru a face legatura
// intre fisierul js si html
//done

//2
//adaugati un event listener pentru buton care apeleaza
// o functie postTheGossip cand este apasat
const buttonGossip = document.getElementById('exButton');

let postTheGossip = () => {
    let nameValue = document.querySelector('#name').value;
    let adjValue = document.querySelector('#adjective').value;
    let randomValue = document.querySelector('#random-word').value;
    alert(`${nameValue}  este ${adjValue}  dupa  ${randomValue}`)
}
buttonGossip.addEventListener('click', postTheGossip);


//3
// In aceasta functie luati toate valorile fieldurilor
// si faceti un story din ele
// ex "Xulescu este innebunit dupa bere neagra"