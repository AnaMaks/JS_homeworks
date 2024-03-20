`use strict`;

// task #1

const a = 0 === 0 ? console.log('Вірно') : console.log('Неправильно');


// task #2

const a = 3 > 0 ? console.log('Вірно') : console.log('Неправильно');


// // task #3

const a = 0 < 0 ? console.log('Вірно') : console.log('Неправильно');


// // task #4

const a = 0 >= 0 ? console.log('Вірно') : console.log('Неправильно');


// // task #5

const a = 0 <= 0 ? console.log('Вірно') : console.log('Неправильно');


// // task #6

const a = 3 !== 0 ? console.log('Вірно') : console.log('Неправильно');


// // task #7

const a = 'test' === 'test' ? console.log('Вірно') : console.log('Неправильно');


// // task #8

const a = '1' === '1' ? console.log('Вірно') : console.log('Неправильно');


// // task #9

const a = 3;
3 > 0 && a < 5 ? console.log('Вірно') : console.log('Неправильно');


// // task #10

let a = 2;
a === 0 || a === 2 ? console.log('Нове значення змінної a:', (a += 7)) : console.log('Нове значення змінної a:', (a /= 10));


// // task #11

const a = 2;
const b = 5;

a <= 1 && b >= 3 ? console.log('Сума змінних a і b:', a + b) : console.log('Результат віднімання змінних a і b:', a - b);


// // task #12

const a = 7;
const b = 8;

(a > 2 && a < 11) || (b >= 6 && b < 14) ? console.log('Вірно') : console.log('Невірно');


// // task #13

const num = 3;

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