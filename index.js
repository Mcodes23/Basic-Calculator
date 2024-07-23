"use strict";
let num1 = +window.prompt("Enter your first number: ");
let operater = window.prompt("Enter operator: + - * /");
let num2 = +window.prompt("Enter your second number: ");
let result;
if (operater == '+') {
 result = num1 + num2;
} else if(operater == '-') {
    result = num1 - num2;
} else if(operater == '*') {
    result = num1 * num2;
} else if(operater == '/') {
    result = num1 / num2;11
} else {
    alert("Invalid Input");
}

alert(result);
