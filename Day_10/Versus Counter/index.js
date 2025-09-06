let counter1=0;
let counter2=0;
let Counter1 = document.getElementById("counter1");
let Counter2 = document.getElementById("counter2");
let Player1;
let Player2;
let Input1 = document.getElementById("input1");
let Input2 = document.getElementById("input2");
let Save = document.getElementById("save-el");
function Player1Increment(){
    Counter1.innerText = ++counter1;
}
function Player2Increment(){
    Counter2.innerText = ++counter2;
}

function Player1Decrement(){
    Counter1.innerText = --counter1;
}
function Player2Decrement(){
    Counter2.innerText=--counter2;
}
function Player1Reset(){
    counter1=0;
    Counter1.innerText=0;
}
function Player2Reset(){
    counter2=0;
    Counter2.innerText=0;
}
function SaveScore(){
    Player1 = Input1.value;
    Player2 = Input2.value;
    Save.textContent += Player1 + " vs " + Player2 + " " + counter1 + " - " + counter2 + "\n";
    Input1.value = "";
    Input2.value = ""; 
    Counter1.innerText = 0;
    counter1=0;
    counter2=0;
    Counter2.innerText = 0;
}