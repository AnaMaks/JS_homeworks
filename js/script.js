`use strict`;

const value = prompt('Введіть число: ');
if (!isNaN(value)) {
    if (value === 1) {
        alert(value + ' pік')
    }
} else {
    alert('Для продовження введіть число.')
}