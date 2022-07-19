const add = function(first, second) {
  return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(array) {
  let sum = 0;
  for (item of array) {
    sum += item;
  }
  return sum;
};

const multiply = function(array) {
  let product = array[0];
  for (let i = 1; i < array.length; i++) {
    product *= array[i];
  }
  return product;
};

const power = function(num, power) {
	let result = num;
  for (let i = 1; i < power; i++) {
    result *= num;
  }
  return result;
};

const factorial = function() {
	
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
