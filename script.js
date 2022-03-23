//DOM
const quoteText =  document.getElementById('quoteDisplay');
const authorName = document.getElementById('Author');
const newQuoteBtn = document.getElementById('qGen');
const postBtn = document.getElementById('social');

let allQuotes = [];

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

newQuoteBtn.addEventListener('click',()=>{
  const quote = allQuotes[Math.floor(Math.random() * allQuotes.length)];
  // Check if Author field is blank and replace it with 'Unknown'
  if (!quote.author) {
    authorName.textContent = 'Unknown';
  } else {
    authorName.textContent = '~' + quote.author;
  }

  quoteText.textContent = quote.text;
});

postBtn.addEventListener('click',()=>{
  const tweetURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent}~${authorName.textContent}`;
  window.open(tweetURL,'_blank');
})

gettingQuotes();