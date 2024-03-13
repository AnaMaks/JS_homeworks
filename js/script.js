`use strict`;

const a = prompt('Введіть 1ше число: ');
if (!isNaN(a)) {
    const b = prompt('Введіть 2ге число: ');
    if (!isNaN(b)) {
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
} else {
    alert('Введено нечислове значення.')
}


