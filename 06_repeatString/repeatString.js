const repeatString = function(str, num) {
    if (num < 0) return "ERROR";
    let phrase = "";
    for (let i = 0; i < num; i++) {
        phrase += str;
    }
    return phrase;
};

// Do not edit below this line
module.exports = repeatString;
