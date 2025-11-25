// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText

const welcomeEl = document.getElementById("welcome-el");

let name = "God'swill Sekav Apya";
let greeting = "Hi friends, I am ";
let emoji = "👋";

welcomeEl.innerText = greeting + name;

welcomeEl.innerHTML = welcomeEl.innerText + emoji;
console.log(welcomeEl);