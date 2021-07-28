let apiQuotes = [];

const newQuote = () => {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote)
}

const getQuotes = async () => {
    const apiUrl = 'https://type.fit/api/quotes'
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        console.log(error)
    }
}

getQuotes();