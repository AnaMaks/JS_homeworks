`use strict`;

// task #1

let output = '';

for (let i = 10; i <= 20; i++) {
    output += i + ', ';
}

console.log(output);


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