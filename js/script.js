`use strict`;

// task #1

let row = '';

for (let i = 10; i <= 20; i++) {
    row += i + ', ';
}
row = row.slice(0, -2);
console.log(row);


// task #2

for (let i = 10; i <= 20; i++) {
    let square = i * i;
    console.log('Квадрат числа ' + i + ' дорівнює ' + square);
}


// task #3

for (let i = 1; i <= 10; i++) {
    let result = 7 * i;
    console.log('7 * ' + i + ' = ' + result);
}


// task #4

let sum = 0;

for (let i = 1; i <= 15; i++) {
    sum += i;
}
console.log('Сума чисел від 1 до 15: ' + sum);


// task #5

let result = 1;

for (let i = 15; i <= 35; i++) {
    result *= i;
}
console.log('Добуток чисел від 15 до 35: ' + result);


// task #6

let sum = 0;
let count = 0;

for (let i = 1; i <= 500; i++) {
    sum += i;
    count++;
}
let average = sum / count;

console.log('Середнє арифметичне цілих чисел від 1 до 500: ' + average);


// task #7

let sum = 0;

for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}

console.log('Сума парних чисел в від 30 до 80: ' + sum);


// task #8

for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}


// task #9

let number = parseInt(prompt('Введіть натуральне число:'));

if (isNaN(number) || number <= 0) {
    console.log('Введено некоректне число. Введіть натуральне число більше за 0.');
} else {
    console.log("Дільники числа " + number + ": ");
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            console.log(i);
        }
    }
}


// task #10

let number = parseInt(prompt('Введіть натуральне число:'));

if (isNaN(number) || number <= 0) {
    console.log('Введено некоректне число. Введіть натуральне число більше за 0.');
} else {
    let evenDivCount = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0 && i % 2 === 0) {
            evenDivCount++;
        }
    }
    console.log("Кількість парних дільників числа " + number + ": " + evenDivCount);
}


// task #11

let number = parseInt(prompt('Введіть натуральне число:'));

if (isNaN(number) || number <= 0) {
    console.log('Введено некоректне число. Введіть натуральне число більше за 0.');
} else {
    let sumOfEvenDiv = 0;

    for (let i = 1; i <= number; i++) {
        if (number % i === 0 && i % 2 === 0) {
            sumOfEvenDiv += i;
        }
    }

    console.log('Сума парних дільників числа ' + number + ': ' + sumOfEvenDiv);
}


// task #12

for (let i = 1; i <= 10; i++) {
    for (let b = 1; b <= 10; b++) {
        console.log(i + ' * ' + b + ' = ' + (i * b));
    }
    console.log('-----------------');
}