// SIHENG'S STUDENT COUNTER
let counter = document.getElementById("count-el");
counter.innerText = 0;
let saveP = document.getElementById("save");
let audio = new Audio("cat-meow.mp3");
let x;
stack = 0;
stop = false
function increment() {
    counter.innerText = Number(counter.innerText) + 1;
    console.log(counter.innerText);
}
function save() {
    saveP.innerText = saveP.innerText + counter.innerText + " - ";
    console.log(saveP.innerText + counter.innerText + " - ");
}
function meow() {
    audio.play();
}
function incrementByYourSelf() {
    x = setInterval(increment, 1000)
}
function stopPlease() {
    console.log("STOP")
    clearInterval(x);
}