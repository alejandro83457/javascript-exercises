const fibonacci = function (num) {
    console.log(Number(num));
    if (Number(num) == NaN || num < 0) return "OOPS";
    if (num == 0) return 0;
    let vals = [1, 1];
    num = Number(num);
    for (let i = 0; i < num - 2; i++) {
        vals.push(vals[i] + vals[i + 1]);
    }
    return vals[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
