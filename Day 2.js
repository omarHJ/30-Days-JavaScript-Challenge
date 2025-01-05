// Activity 1: Arithmetic Operations

// Task 1: Write a program to add two numbers and log the result to the console.
let num1 = 5;
let num2 = 3;
let sum = num1 + num2;
console.log("Sum: " + sum); // Output: Sum: 8

// Task 2: Write a program to subtract two numbers and log the result to the console.
let num3 = 10;
let num4 = 4;
let difference = num3 - num4;
console.log("Difference: " + difference); // Output: Difference: 6

// Task 3: Write a program to multiply two numbers and log the result to the console.
let num5 = 2;
let num6 = 6;
let product = num5 * num6;
console.log("Product: " + product); // Output: Product: 12

// Task 4: Write a program to divide two numbers and log the result to the console.
let num7 = 15;
let num8 = 3;
let quotient = num7 / num8;
console.log("Quotient: " + quotient); // Output: Quotient: 5

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
let num9 = 17;
let num10 = 4;
let remainder = num9 % num10;
console.log("Remainder: " + remainder); // Output: Remainder: 1

// Activity 2: Assignment Operators

// Task 6: Write a program to add a number to a variable and log the result to the console.
let x = 10;
x += 5; // x = x + 5
console.log("x += 5: " + x); // Output: x += 5: 15

// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
let y = 20;
y -= 8; // y = y - 8
console.log("y -= 8: " + y); // Output: y -= 8: 12

// Activity 3: Comparison Operators

// Task 8: Write a program to compare two numbers using > and < and log the result to the console.
let a = 7;
let b = 3;
console.log("a > b: " + (a > b)); // Output: a > b: true
console.log("a < b: " + (a < b)); // Output: a < b: false

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
let c = 10;
let d = 10;
console.log("c >= d: " + (c >= d)); // Output: c >= d: true
console.log("c <= d: " + (c <= d)); // Output: c <= d: true

// Task 10: Write a program to compare two numbers using === and !== and log the result to the console.
let e = 5;
let f = '5';
console.log("e === f: " + (e === f)); // Output: e === f: false
console.log("e !== f: " + (e !== f)); // Output: e !== f: true

// Activity 4: Logical Operators

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
let age = 25;
let hasLicense = true;
let canRent = age >= 21 && hasLicense;
console.log("Can rent a car: " + canRent); // Output: Can rent a car: true

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
let isStudent = false;
let isTeacher = true;
let hasAccess = isStudent || isTeacher;
console.log("Has access: " + hasAccess); // Output: Has access: true

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
let isRaining = true;
let goOutside = !isRaining;
console.log("Go outside: " + goOutside); // Output: Go outside: false

// Activity 5: Ternary Operator

// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let num = -5;
let result = num >= 0 ? "Positive" : "Negative";
console.log("Number is " + result); // Output: Number is Negative

// Feature Request:

// 1. Arithmetic Operations Script:
function performArithmeticOperations(num1, num2) {
  const sum = num1 + num2;
  const difference = num1 - num2;
  const product = num1 * num2;
  const quotient = num1 / num2;
  const remainder = num1 % num2;

  console.log("Sum: " + sum);
  console.log("Difference: " + difference);
  console.log("Product: " + product);
  console.log("Quotient: " + quotient);
  console.log("Remainder: " + remainder);
}

performArithmeticOperations(10, 3);

// 2. Comparison and Logical Operators Script:
function compareNumbers(num1, num2) {
  console.log("num1 > num2: " + (num1 > num2));
  console.log("num1 < num2: " + (num1 < num2));
  console.log("num1 >= num2: " + (num1 >= num2));
  console.log("num1 <= num2: " + (num1 <= num2));
  console.log("num1 === num2: " + (num1 === num2));
  console.log("num1 !== num2: " + (num1 !== num2));
}

function combinedConditions(age, hasLicense) {
  const canRent = age >= 21 && hasLicense;
  const hasAccess = age < 18 || hasLicense;
  const isEligible = !(age < 16);

  console.log("Can rent a car: " + canRent);
  console.log("Has access: " + hasAccess);
  console.log("Is eligible: " + isEligible);
}

compareNumbers(5, 10);
combinedConditions(25, true);

// 3. Ternary Operator Script:
function checkNumberSign(num) {
  const result = num >= 0 ? "Positive" : "Negative";
  console.log("Number is " + result);
}

checkNumberSign(7);
checkNumberSign(-3);