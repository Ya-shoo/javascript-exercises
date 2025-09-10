const add = function(a, b, ...additionalNumbers) {
	let total = a + b;
  for (let num of additionalNumbers) {
    total += num;
  }
  return total;
};

const subtract = function(a, b, ...additionalNumbers) {
	let total = a - b;
  for (let num of additionalNumbers) {
    total -= num;
  }
  return total;
};

const sum = function(arr) {
	return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};

const power = function(a, b) {
  if (b === 0) {
    return 1; // Any number raised to the power of 0 is 1
  }
  let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
  }
  return result;
};

const factorial = function(n) {
	 if (n === 0) {
    return 1;
  } else if (n < 0) {
    return undefined; // Or throw an error
  }

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
