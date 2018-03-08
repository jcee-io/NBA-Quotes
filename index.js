var quotes = [
  '“What excites me the most is when a coach calls a timeout and chews out his forward because I just dunked on his head.” - Karl Malone',
  '“It’s all about winning. Stats really don’t matter, I mean, guys have great series and all that, and people take notice and take their place in history with those stats and all that stuff. But at the end of the day, it’s all about winning and what you can do to help your team get to that point.” – Stephen Curry',
  '“It’s not about any one person. You’ve got to get over yourself and realize that it takes a group to get this thing done” – Gregg Popovich'
];

var quote = document.getElementById("quote");
var tweet = document.getElementById("tweet");

function newQuote(){
  var RNG = Math.floor(Math.random()*quotes.length);
  tweet.setAttribute("href",tweet.getAttribute("href") + quotes[RNG])
  quote.textContent = quotes[RNG];
}