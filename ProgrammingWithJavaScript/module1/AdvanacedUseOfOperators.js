// Task 1: Using the logical && operator

var score=8;
console.log("Mid-level skills:"+(score>0&&score<10))
// Mid-level skills:true

// Task 2: Using the logical || operator
var timeRemaining=0;
var energy=10;
console.log("Game over:"+(timeRemaining==0||energy==0))

// Task 3: Using the modulus operator, %, to test if a given number is odd

var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0; 
var result2 = test2 == 0; 
console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);

// Node.js was built by Ryan Dahl.