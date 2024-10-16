// SIHENG'S STUDENT COUNTER
let counter = document.getElementById("count-el");
counter.innerText = 0;

function increment() {
    counter.innerText = Number(counter.innerText) + 1;
    console.log(counter.innerText)
}