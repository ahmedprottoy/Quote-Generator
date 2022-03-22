//DOM
const quoteText =  document.getElementById('quoteDisplay');
const authorName = document.getElementById('Author');
const newQuoteBtn = document.getElementById('qGen');
const postBtn = document.getElementById('social');

let allQuotes = [];



// set quotes and author 

function settingQuotes(){
    const quote = allQuotes[Math.floor(Math.random() * allQuotes.length)];
    // Check if Author field is blank and replace it with 'Unknown'
    if (!quote.author) {
      authorName.textContent = 'Unknown';
    } else {
      authorName.textContent = '-' + quote.author;
    }

    quoteText.textContent = quote.text;
  
}

//Getting quotes API
async function gettingQuotes(){
    const url = 'https://type.fit/api/quotes';

    try {
        const gotQuotes = await fetch(url);
        allQuotes = await gotQuotes.json();
        settingQuotes();
    }catch (err){
        console.log(err);
    }  
}

//eventListener

newQuoteBtn.addEventListener('click',settingQuotes);

gettingQuotes();