
    const quote = document.querySelector('#quotes');
    const author = document.querySelector('#author');
    const btnGenerate = document.querySelector('#click');

    let api = 'https://dummyjson.com/quotes';
    let quotes = [];

   
    function setQuote() {
      if (quotes.length === 0) return;
      let index = Math.floor(Math.random() * quotes.length);
      quote.innerHTML = quotes[index].quote;
      author.innerHTML = "- " + quotes[index].author;
    }

   
    async function getQuotes() {
      try {
        let response = await fetch(api);
        let data = await response.json();
        quotes = data.quotes;
        setQuote(); 
      } catch (err) {
        quote.innerHTML = "Failed to load quotes.";
        console.error(err);
      }
    }

  
    btnGenerate.addEventListener('click', setQuote);

   
    getQuotes();