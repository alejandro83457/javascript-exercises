const palindromes = function (str) {
    str = str.toLowerCase().split("");
    str = str.filter((ch) => {
        let code = ch.charCodeAt();
        // check ASCII values for alphanumeric characters
        if ((code > 96 && code < 123) || (code > 47 && code < 58)) {
            return true;
        } else false;
    });
    console.log(str);
    return str.toString() == str.reverse().toString();
};

// Do not edit below this line
module.exports = palindromes;
