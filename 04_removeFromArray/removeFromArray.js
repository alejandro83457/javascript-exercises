const removeFromArray = function () {
    let arr = arguments[0]; // Contains the array

    // Iterates through arguments array.
    // Filters whatever is specified after first arg.
    for (let i = 1; i < arguments.length; i++) {
        arr = arr.filter((elem) => elem !== arguments[i]);
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
