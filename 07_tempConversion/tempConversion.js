const convertToCelsius = function(fah) {
  let cel = (fah - 32) * 5/9
  if(cel % 1 != 0){
    return Number(cel.toFixed(1))
  }
  return cel
  
};

const convertToFahrenheit = function(cel) {

  let fah = cel * 9/5 + 32
  if(fah %1 != 0){
    return Number(fah.toFixed(1))
  }
  return fah
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
