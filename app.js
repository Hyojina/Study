const calculator = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  devide: function (a, b) {
    return a / b;
  },
  squared: function (a, b) {
    return a ** b;
  },
};

const addResult = calculator.add(7, 6);
const minusResult = calculator.minus(addResult, 4);
const devideResult = calculator.devide(8, minusResult);
const squaredResult = calculator.squared(addResult, devideResult);

console.log(addResult);
console.log(minusResult);
console.log(devideResult);
console.log(squaredResult);
