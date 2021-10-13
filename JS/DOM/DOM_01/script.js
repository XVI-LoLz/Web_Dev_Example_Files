// Ways to obtain an Element from the HTML code

//Single element by id
let h1 = document.getElementById("title");
console.log(h1);

//Multiple elements by class
let content = document.getElementsByClassName("content");
console.log(content);

//Multiple elements by tag
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

//Single element by selector (id)
let h1ByQuery = document.querySelector("#title");
console.log(h1ByQuery);

//Single element by selector (class)
let contentByQuery = document.querySelector(".content");
console.log(contentByQuery);

//Multiple elements by selector (tag)
let paragraphsByQuery = document.querySelectorAll("p");
console.log(paragraphsByQuery);

console.log("%c------------------------------------", "color:orange;");
// ------------------------------------------------- MANIPULATION

// Change style

console.log("Changing h1 style");

h1.style.color = "red";
h1.style.backgroundColor = "black";
h1.style.padding = "30px";
h1.style.margin = "30px";
h1.style.display = "flex";

console.log("%c------------------------------------", "color:orange;");
// ------------------------------------------------- CREATION

console.log("Creating a new element");

let myNewElement = document.createElement("p").text;
console.log(myNewElement);
myNewElement.textContent = "I'm not inside the HTML file";

document.body.appendChild(myNewElement);

