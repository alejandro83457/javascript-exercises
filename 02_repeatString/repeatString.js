const repeatString = function (str, iters) {
    // Two edge cases
    if (iters == 0) return "";
    if (iters < 0) return "ERROR";

    let originalStr = str;
    for (let i = 1; i < iters; i++) {
        str = str.concat(originalStr);
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
