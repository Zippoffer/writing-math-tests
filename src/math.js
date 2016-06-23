"useStrict";

// function add(num1, num2) {
//     return num1 + num2;
// }

// function subtract(num1, num2) {
//     return num1 - num2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// function divide(num1, num2) {
//     return num1 / num2;
// }

// function square(num) {
//     return Math.pow(num);
// }

// function squareRoot(num) {
//     return Math.sqrt(num);
// }

var answer = document.getElementById("answer")
var firstNum = document.getElementById("firstNum")
var secondNum = document.getElementById("secondNum")


add.addEventListener("click", function(event) {
    var add = document.getElementById("add")
    console.log("add", event);
    answer.innerHTML = parseInt(firstNum.value) + parseInt(secondNum.value);
});

subtract.addEventListener("click", function(event) {
    var subtract = document.getElementById("subtract")
    console.log("subtract", event);
    answer.innerHTML = firstNum.value - secondNum.value;
});

divide.addEventListener("click", function(event) {
    var divide = document.getElementById("divide")
    console.log("divide", event);
    answer.innerHTML = firstNum.value / secondNum.value;
});

multiply.addEventListener("click", function(event) {
    var multiply = document.getElementById("multiply")
    console.log("multiply", event);
    answer.innerHTML = firstNum.value * secondNum.value;
});

square.addEventListener("click", function(event) {
    var square = document.getElementById("square")
    console.log("square", event);
    answer.innerHTML = Math.pow(firstNum.value, 2);
});

squareRoot.addEventListener("click", function(event) {
    var squareRoot = document.getElementById("squareRoot")
    console.log("squareRoot", event);
    answer.innerHTML = Math.sqrt(firstNum.value);
});