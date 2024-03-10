`use strict`;

const age = prompt('Enter your current age:');
if (age !== null) {
    // age = parseInt(age); не розумію, як саме має виглядвти ця функція або чим мржна її замінити
    if (!isNaN(age)) {
        const futureAge = age + 10;
        alert("In 10 years, you\'ll be " + futureAge + " years old.");
    } else {
        alert("Please use a number.");
    }
} else {
    alert("Oh, something went wrong.");
}
