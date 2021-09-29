//#1

var x = 5;
var y = 8;
console.log(x === y);

x = 6;
y = "6";
console.log(x !== y);

x = "7";
y = 7;
console.log(x == y);

//#2

var nome = "Fulano";
console.log("Boa noite " + nome + "!");

//#3

x = 10;
console.log(x += 5);
x = 10;
console.log(x *= 5);
x = 10;
console.log(x %= 5);
x = 10;
console.log(x /= 5);
x = 10;
console.log(x -= 5);