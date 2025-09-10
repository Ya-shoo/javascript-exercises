const reverseString = function(str) {
    const splitStr = str.split("");
    const reverseArr = splitStr.reverse();
    const joinStr = reverseArr.join("");
    return joinStr;
};

// Do not edit below this line
module.exports = reverseString;
