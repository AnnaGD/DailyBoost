// var myArray = [ ]; // insert an array of random inspiratinal quotes
  
//   var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  
//   document.body.innerHTML = randomItem;


  //Array with different quotes
var quotes = [  {
    content: "",
    author: ""
},
{
    content: "",
    author: ""
},
{
    content: "",
    author: ""
},
{
    content: "",
    author: ""
},
{
    content: "",
    author: ""
} ];
//Get the stuff from the DOM
var getQuote = document.getElementById("quote");
var getAuthor = document.getElementById("author");

//Generating the random number variables
var randNum;
var displayedQuote;

//Creating Event Listener on button

button.addEventListener("refresh", getRandom);

//function that will get the event listener to work
function getRandom(){
//generate random number that will change from 0 to the length of the array
randNum = Math.floor(Math.random() * quotes.length);

displayedQuote = quotes[randNum];

getQuote.innerText = "\"" + displayedQuote.content + "\"";
getAuthor.innerText = displayedQuote.author;

console.log(randNum);
}