//in-class external for dark mode switcher

let button = document.querySelector("button");
let outputArea = document.getElementById("output-area");
let outputContent = document.getElementById("output-content");

function theme(){
    button.innerHTML="&#127773;";
    outputArea.style.backgroundColor="darkgray";
    outputContent.style.color="white";
}



