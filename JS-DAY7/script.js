 //create element
const para = document.createElement("p");
para.textContent = "This is a new paragraph added by JavaScript.";
console.log(para);
//append element to the body
document.getElementById("content").appendChild(para);
// Remove the paragraph element 
document.querySelector("#content p").remove();

const image = document.createElement("img");
image.setAttribute("src","https:/repository-images.githubusercontent.com/539560750/278d0bbf-6aaf-4f38-a18f-e328305bcd7b");
image.setAttribute("alt", "A java");
console.log(image)

const gallery = document.getElementById("gallery");
console.log(gallery)
gallery.appendChild(image
);




let date = new Date();
console.log(date);

setInterval(() => {
    let time = new Date();
    console.log(time);
},
