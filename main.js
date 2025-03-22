import { changeClothing } from './shop.js';

window.changeClothing = changeClothing;

document.addEventListener("DOMContentLoaded", () => {
  const savedStyle = localStorage.getItem("selectedClothing") || "green";
  changeClothing(savedStyle);
});

window.onscroll = function() {myFunction()};

var header = document.getElementById("now");
console.log(header)
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

