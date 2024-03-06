`use strict`;

// task 1

const firstString = prompt("Enter 1st row:");
const secondString = prompt("Enter 2nd row:");
const thirdString = prompt("Enter 3rd row:");
const result = firstString + secondString + thirdString;
alert(result);


// task 2

const number = prompt("Please enter 5 digit number:");
const digit = number.split("");
const results = digit.join(" ");
alert("Result: " + results);