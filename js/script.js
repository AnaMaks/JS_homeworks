`use strict`;

const a = prompt('Введіть значення А: ');
const b = prompt('Введіть значення Б: ');
Number(a);
Number(b);
const c = (Number(a)) + (Number(b));
console.log('Результат складання А + Б = ' + c);
const da = a - b;
console.log('Результат віднімання А - Б = ' + da);
const db = b - a;
console.log('Результат віднімання Б - А = ' + db);
const eab = a * b;
console.log('Результат множення А * Б = ' + eab);
const fa = a / b;
console.log('Результат ділення А / Б = ' + fa);
const fb = b / a;
console.log('Результат ділення Б / А = ' + fb);