const ftoc = function(temperature) {
  temperature = (temperature - 32) * 5 / 9;
  temperature = Math.round(temperature * 10) / 10;
  return temperature;
};

const ctof = function() {

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
