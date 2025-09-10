const removeFromArray = function(arr, ...args) {
    const filteredArr = arr.filter((element) => !args.includes(element));
    return filteredArr;
};

const testArr = [1, 2, 3, 4, 5];

console.log(removeFromArray(testArr, 3));

// Do not edit below this line
module.exports = removeFromArray;
