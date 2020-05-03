const quote = document.getElementById('quote');
const quoteBtn = document.getElementById('xhr');

const demandQuote = async () => {
    const quoteText = await fetchQuote();
    quote.innerHTML = quoteText;  
}

const fetchQuote = async () => {
    const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
    const response = await fetch(url);
    return response.json();
}

quoteBtn.addEventListener('click', demandQuote);
