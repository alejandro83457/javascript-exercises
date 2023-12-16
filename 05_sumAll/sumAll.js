const sumAll = function (a, b) {
    // No negatives or non-numbers allowed.
    if (a < 0 || b < 0) return "ERROR";
    if (typeof a != "number") return "ERROR";
    if (typeof b != "number") return "ERROR";

    // Takes care of a being larger than b
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }

    // Sums and returns.
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
