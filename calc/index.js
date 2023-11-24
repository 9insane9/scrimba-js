let num1 = 8;
let num2 = 2;

document.querySelector("#num1-el").textContent = num1;
document.querySelector("#num2-el").textContent = num2;

let addButton = document.querySelector("#add");
let substractButton = document.querySelector("#substract");
let divideButton = document.querySelector("#divide");
let multiplyButton = document.querySelector("#multiply");

let sumEl = document.querySelector("#sum-el");

function add() {
    let result = num1 + num2;
    sumEl.textContent = `Sum: ${result}`
};

function substract() {
    let result = num1 - num2;
    sumEl.textContent = `Sum: ${result}`
};

function divide() {
    let result = num1 / num2;
    sumEl.textContent = `Sum: ${result}`
};

function multiply() {
    let result = num1 * num2;
    sumEl.textContent = `Sum: ${result}`
};

addButton.addEventListener("click", add);
substractButton.addEventListener("click", substract);
divideButton.addEventListener("click", divide);
multiplyButton.addEventListener("click", multiply);


