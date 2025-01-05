// Day 6: Arrays

// Activity 1: Array Creation and Access
console.log("Activity 1: Array Creation and Access");
// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
const numbers = [1, 2, 3, 4, 5];
console.log("Task 1:", numbers);

// Task 2: Access the first and last elements of the array and log them to the console.
const firstNumber = numbers[0];
const lastNumber = numbers[numbers.length - 1];
console.log("Task 2: First Element =", firstNumber, ", Last Element =", lastNumber);

// Activity 2: Array Methods (Basic)
console.log("\nActivity 2: Array Methods (Basic)");
// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
numbers.push(6);
console.log("Task 3: After push(6) =", numbers);

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
numbers.pop();
console.log("Task 4: After pop() =", numbers);

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
numbers.shift();
console.log("Task 5: After shift() =", numbers);

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
numbers.unshift(1);
console.log("Task 6: After unshift(1) =", numbers);

// Activity 3: Array Methods (Intermediate)
console.log("\nActivity 3: Array Methods (Intermediate)");
// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
const doubledNumbers = numbers.map(number => number * 2);
console.log("Task 7: Doubled numbers =", doubledNumbers);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log("Task 8: Even numbers =", evenNumbers);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const sumOfNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Task 9: Sum of numbers =", sumOfNumbers);

// Activity 4: Array Iteration
console.log("\nActivity 4: Array Iteration");
// Task 10: Use a for loop to iterate over the array and log each element to the console.
console.log("Task 10: Using for loop:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
console.log("Task 11: Using forEach:");
numbers.forEach(number => {
  console.log(number);
});

// Activity 5: Multi-dimensional Arrays
console.log("\nActivity 5: Multi-dimensional Arrays");
// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log("Task 12: Matrix =", matrix);

// Task 13: Access and log a specific element from the two-dimensional array.
const specificElement = matrix[1][0]; // Accessing the element in the second row and first column (value 4)
console.log("Task 13: Specific element =", specificElement);

// Feature Request:

console.log("\nFeature Request:");

// 1. Array Manipulation Script: Write a script that demonstrates the creation of an array, adding and removing elements using push, pop, shift, and unshift methods.
console.log("\n1. Array Manipulation Script:");
const manipulationArray = [10, 20, 30];
console.log("Original array:", manipulationArray);
manipulationArray.push(40);
console.log("After push(40):", manipulationArray);
manipulationArray.pop();
console.log("After pop():", manipulationArray);
manipulationArray.unshift(5);
console.log("After unshift(5):", manipulationArray);
manipulationArray.shift();
console.log("After shift():", manipulationArray);

// 2. Array Transformation Script: Create a script that uses map, filter, and reduce methods to transform and aggregate array data.
console.log("\n2. Array Transformation Script:");
const transformationArray = [1, 2, 3, 4, 5];
console.log("Original array:", transformationArray);
const doubled = transformationArray.map(num => num * 2);
console.log("Doubled array:", doubled);
const evens = transformationArray.filter(num => num % 2 === 0);
console.log("Even numbers:", evens);
const product = transformationArray.reduce((acc, curr) => acc * curr, 1);
console.log("Product of numbers:", product);

// 3. Array Iteration Script: Write a script that iterates over an array using both for loop and forEach method and logs each element.
console.log("\n3. Array Iteration Script:");
const iterationArray = ['a', 'b', 'c'];
console.log("Original array:", iterationArray);
console.log("Using for loop:");
for (let i = 0; i < iterationArray.length; i++) {
  console.log(iterationArray[i]);
}
console.log("Using forEach:");
iterationArray.forEach(item => {
  console.log(item);
});

// 4. Two-dimensional Array Script: Create a script that demonstrates the creation and manipulation of a two-dimensional array.
console.log("\n4. Two-dimensional Array Script:");
const twoDimensionalArray = [
  ['x', 'o', ' '],
  [' ', 'x', ' '],
  ['o', ' ', 'x']
];
console.log("Two-dimensional array:", twoDimensionalArray);
console.log("Accessing element at [0][1]:", twoDimensionalArray[0][1]);
twoDimensionalArray[1][0] = 'o';
console.log("Modified array:", twoDimensionalArray);