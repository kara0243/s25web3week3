const textA = document.getElementById("pContent");

//now that you have the element, you can find out info about it
console.log(textA.id);
console.log(textA.name)

//querySerlector lets you select by any CSS selector (any way you style the element) 
const buttons = document.querySelector(".b");

console.log(buttons.id)

//querySelector selects only the fisrt thing that matches the selector
//querySelectorAll selects them all

const allButtons = document.querySelectorAll(".b");

console.log(allButtons[2].textContent);

//using quesrySelector, you can be very specific about which element you select

const para = document.querySelector("#addAt p");
//once you have the element, you can get info about it - including its children

const spans = para.children;

console.log(spans);

//another way with querySelectAll
const otherSpans = document.querySelectorAll("#addAt p span");