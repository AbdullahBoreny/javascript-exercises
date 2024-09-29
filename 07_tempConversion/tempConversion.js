const convertToCelsius = function(value) {
  let toCel = Math.round(((value - 32) * 5/9) *10) / 10;
  return toCel;
};

const convertToFahrenheit = function(value) {
  let fah = Math.round(((value * 9/5) + 32)*10) / 10; 
  return fah;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
