const convertToCelsius = function(far) {
  let cel = Math.round(((far-32)*5/9)*10)/10;
  return cel;
};

const convertToFahrenheit = function(cel) {
  let far = Math.round(((cel*9/5)+32)*10)/10;
  return far;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
