const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (vals) {
    let total = 0;
    for (let el of vals) total += el;
    return total;
};

const multiply = function (vals) {
    let total = 1;
    for (let el of vals) total *= el;
    return total;
};

const power = function (a, b) {
    return a ** b;
};

const factorial = function (a) {
    if (a == 0) return 1;
    return a * factorial(a - 1);
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
