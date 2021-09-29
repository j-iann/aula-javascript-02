//#1

var num1 = new Number(7);
var num2 = new Number(-55);
var num3 = new Number(389);
var num4 = new Number(1000);
var num5 = new Number(3.1459);
var num6 = new Number(-46.267);
console.log(num1 + " " + num2 + " " + num3 + " " + num4 + " " + num5 + " " + num6);

console.log(num1 += num6);

console.log(num1 *= num3);

console.log(num4 /= num5);

//#2

var number1 = new Number(10);
var number2 = new Number(3);
var number3 = new Number(9);
var number4 = new Number(99.9);
var number5 = new Number(721);

console.log(number1 + " " + number2 + " " + number3 + " " + number4 + " " + number5);

number1 = Number.MAX_VALUE;
console.log(number1 + " " + number2 + " " + number3 + " " + number4 + " " + number5);
number2 = Number.isNaN(3);
console.log(number1 + " " + number2 + " " + number3 + " " + number4 + " " + number5);
console.log(number5 <= number3);
console.log(number1 + " " + number2 + " " + number3 + " " + number4 + " " + number5);
