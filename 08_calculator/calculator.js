const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let sum = 0;
	arr.forEach(element => {
    sum += element;
  });
  return sum;
};

const multiply = function(arr) {
  let result = 1;
  arr.forEach(element => {
    result *= element;
  });
  return result;
};

const power = function(num1, num2) {
  let result = num1;
	for(let i = 1; i < num2;i++){
    result *= num1;
  }
  return result;
};

const factorial = function(num) {
	let result = 1;
  if(num < 1){
    return result;
  }
  for(let i = 1; i<=num;i ++){
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
