const localKanye = () => {
  fetch("https://api.kanye.rest/")
    .then((response) => response.json())
    .then((data) => displayQuote(data));
};

const displayQuote = (quote) => {
  const quoteElement = document.getElementById("quote");
  quoteElement.innerText = quote.quote;
};
const url = `https://www.themealdb.com/api/json/v1/1/search.php?s={food}`;
