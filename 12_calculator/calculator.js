const add = function(a,b) {
  let result = a + b;
  return result;
};

const subtract = function(a,b) {
	let result = a - b;
  return result;
};

const sum = function(a) {
  const su = a;
  let result = su.reduce(somma, 0);
  function somma (total, value) {return total + value;}
  return result;
};

const multiply = function(a) {
  const su = a;
  let result = su.reduce(multi, 1);
  function multi (total, value) {return total * value;}
  return result;
};

const power = function(a,b) {
  let result = Math.pow(a,b);
  return result;
};

const factorial = function(a) {
	function factorialize(num) {
    if (num == 0) 
      return 1;
    else {
      return (num* factorialize(num - 1));
    }
  }
  let result = factorialize (a);
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
