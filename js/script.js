`use strict`;

const a = prompt('Введіть 1ше число: ');
const b = prompt('Введіть 2ге число: ');
if (!isNaN(a)) {
    Number(a);
    Number(b);
    const c = (Number(a)) + (Number(b));
    const d = a - b;
    const f = a * b;
    const g = a / b;
    alert('Введені значення ' + a + ' та ' + b + ', результат: '
        + a + ' + ' + b + ' = ' + c + ', ' +
        + a + ' - ' + b + ' = ' + d + ', ' +
        + a + ' * ' + b + ' = ' + f + ', ' +
        + a + ' / ' + b + ' = ' + g + '. ')
} else {
    alert('Введено нечислове значення.')
}


