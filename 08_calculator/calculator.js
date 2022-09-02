const add = function(first, second) {
  return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(array) {
  return array.reduce((total, number) => total + number, 0);
};

const multiply = function(array) {
  return array.reduce((total, number) => total * number, 1);
};

const power = function(num, power) {
	let result = num;
  for (let i = 1; i < power; i++) {
    result *= num;
  }
  return result;
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }
  return factorial(num - 1) * num;
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
