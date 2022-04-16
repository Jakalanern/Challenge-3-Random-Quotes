let quoteBtn = document.querySelector(".quote_btn");
let quoteDiv = document.querySelector(".quote");
let quotes = [
  "Life is the art of drawing without an eraser.",
  "Life is like a box of chocolates, you never know what you're gonna get.",
  "Luke, I am your father.",
  "Hello there!",
  "Get to the choppah!",
  "I am the one who knocks!",
];

quoteBtn.addEventListener("click", newRandomQuote);

function newRandomQuote() {
  let randNum = Math.round(Math.random() * quotes.length);
  if (randNum == quotes.length) {
    randNum -= randNum;
  }
  quoteDiv.innerHTML = quotes[randNum];
}
