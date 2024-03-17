`use strict`;

// task #1

const a = 0;

if (a === 0) {
    console.log('Вірно');
} else {
    console.log('Неправильно');
}


// task #2

const a = 3;

if (a > 0) {
    console.log('Вірно');
} else {
    console.log('Неправильно');
}


// task #3

const a = 0;

if (a < 0) {
    console.log('Вірно');
} else {
    console.log('Неправильно');
}


// task #4

const a = 0;

if (a >= 0) {
    console.log('Вірно');
} else {
    console.log('Неправильно');
}


// task #5

const a = 0;

if (a <= 0) {
    console.log('Вірно');
} else {
    console.log('Неправильно');
}


// task #6

const a = 3;

if (a !== 0) {
    console.log('Вірно');
} else {
    console.log('Неправильно');
}


// task #7

const a = 'test';

if (a === 'test') {
    console.log('Вірно');
} else {
    console.log('Неправильно');
}


// task #8

const a = '1';

if (a === '1') {
    console.log('Вірно');
} else {
    console.log('Неправильно');
}


// task #9

const a = 3;

if (a > 0 && a < 5) {
    console.log('Вірно');
} else {
    console.log('Неправильно');
}


// task #10

const a = 2;

if (a === 0 || a === 2) {
    a += 7;
} else {
    a /= 10;
}
console.log('Нове значення змінної a:', a);


// task #11

const a = 2;
const b = 5;

if (a <= 1 && b >= 3) {
    console.log('Сума змінних a і b:', a + b);
} else {
    console.log('Результат віднімання змінних a і b:', a - b);
}


// task #12

const a = 7;
const b = 8;

if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}


// task #13

const num = 3;
const result;

switch (num) {
    case 1:
        result = 'зима';
        break;
    case 2:
        result = 'весна';
        break;
    case 3:
        result = 'літо';
        break;
    case 4:
        result = 'осінь';
        break;
    default:
        result = 'невірне значення';
}
console.log(result);