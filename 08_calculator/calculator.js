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
  return array.length ? array.reduce((total, number) => total * number, 1) : 0;
};

const power = function(num, power) {
  return Math.pow(num, power);
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
