const books = [
    {
        title: 'The Power of Habit',
        author: 'Charles Duhigg',
        read: true
    },
    {
        title: 'Mindset: The New Psychology of Success',
        author: 'Carol S. Dweck',
        read: false
    }];

// Creati o pagina web care are un h1 cu "Book List"
// adugati un script style unde sa tinem js-ul
//Iterati fiecare carte si pentru fiecare creati un p care sa contina titlul si autorul si faceti append in pagina noastra
//BONUS: folositi ul si li pentru a face display la carti
//BONUS: adaugati o proprietate pentru fiecare carte cu URL de la coverul cartii si adaugati un element img pentru fiecare (nu uitati sa adaugati img-ul si pe obiectul cartii - acolo va fi si poza)
//BONUS: schimbati style-ul pentru fiecare carte in functie daca a fost citita sau nu.
const body = document.querySelector('body')
const list = document.createElement('ul');
for (i = 0; i < books.length; i++) {
    const listItem = document.createElement('li');
    const text = document.createElement('p');
    if (books[i].read === true) {
        text.style.fontWeight = 'bold';
        text.style.color = 'blue';
    } else { text.style.color = 'red' }
    text.innerHTML = `Book Title: ${books[i].title} Author: ${books[i].author}`;
    listItem.appendChild(text);
    list.appendChild(listItem);
}
body.appendChild(list);
