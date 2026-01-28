const headingelement = document.getElementById("myhead");
console.log(headingelement);
headingelement.textContent = "Hello World";
headingelement.style.color = "red";
headingelement.style.backgroundColor = "yellow";


// Select the first <p> element inside the #content div using querySelector
const paragraph = document.querySelector("#content p");

// Change the text content of the selected paragraph
paragraph.textContent = "This paragraph has been updated using querySelector.";

// Change the style of the selected paragraph
paragraph.style.color = "blue";


