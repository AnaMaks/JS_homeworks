`use strict`;

// task 1

let firstString = prompt("Enter 1st row:");
let secondString = prompt("Enter 2nd row:");
let thirdString = prompt("Enter 3rd row:");
let result = firstString + secondString + thirdString;
alert(result);


// task 2

const number = prompt("Please enter 5 digit number:");
let digits = number.split("");
let results = digits.join(" ");
alert("Result: " + results);