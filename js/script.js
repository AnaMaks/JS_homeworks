`use strict`;

// task #1

let x = 10, y = 7;
let result = x > y ? 'x більше за y' : 'x не більше, ніж y';

console.log(result);

// task #2

let num = parseInt(prompt('Введіть ціле число:'));

if (!isNaN(num) && Number.isInteger(num)) {
    let numLength = Math.abs(num).toString().length;
    let positivity = num > 0 ? 'позитивне' : num < 0 ? 'негативне' : 'нуль';
    console.log('Число ' + num + ' є ' + (numLength === 1 ? 'однозначне' : numLength === 2 ? 'двозначне' : 'тризначне чи більше') + ' ' + positivity + '.');
} else {
    console.log('Введено не ціле число.');
}

// task #3

let num01 = parseFloat(prompt('Введіть 1ше число:'));
let num02 = parseFloat(prompt('Введіть 2ге число:'));
let num03 = parseFloat(prompt('Введіть 3тє число:'));

if (!isNaN(num01) && !isNaN(num02) && !isNaN(num03)) {
    if (num01 >= num02 && num01 >= num03) {
        console.log('Найбільше число: ' + num01);
    } else if (num02 >= num01 && num02 >= num03) {
        console.log('Найбільше число: ' + num02);
    } else {
        console.log('Найбільше число: ' + num03);
    }
} else {
    console.log('Будь ласка, введіть числа коректно.');
}

// task #4

let sideA = parseFloat(prompt('Введіть довжину 1ої сторони:'));
let sideB = parseFloat(prompt('Введіть довжину 2ої сторони:'));
let sideC = parseFloat(prompt('Введіть довжину 3ої сторони:'));

if (!isNaN(sideA) && !isNaN(sideB) && !isNaN(sideC) && sideA > 0 && sideB > 0 && sideC > 0) {
    if ((sideA + sideB > sideC) && (sideA + sideC > sideB) && (sideC + sideB > sideA)) {
        console.log('Трикутник може бути утворено.')
    } else {
        console.log('Трикутник з такими сторонами не може бути утворено.');
    }
} else {
    console.log('Введіть додатні значення довжин.')
}