const sumAll = function(num1, num2) {
    let largerNum;
    let smallerNum;
    let total = 0;

    //test edgecase handling
    if(num1 > num2) {
        largerNum = num1;
        smallerNum = num2;
    } else if (num2 > num1) {
        largerNum = num2;
        smallerNum = num1;
    } 

    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    } else if (!typeof num1 === "number" || !typeof num2 === "number") {
        return "ERROR";
    }

    // actual logic
    for (let i = smallerNum; i <= largerNum; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
