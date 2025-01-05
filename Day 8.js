// Activity 1: Template Literals
const name = "Alice";
const age = 30;
console.log(`My name is ${name} and I am ${age} years old.`);

// Task 2: Create a multi-line string using template literals and log it to the console.
console.log(`This is a 
multi-line 
string.`);

// Activity 2: Destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(`First: ${first}, Second: ${second}, Rest: ${rest}`);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = { title: "The Great Gatsby", author: "F. Scott Fitzgerald" };
const { title, author } = book;
console.log(`Title: ${title}, Author: ${author}`);

// Activity 3: Spread and Rest Operators
// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const array = [1, 2, 3];
const newArray = [...array, 4, 5, 6];
console.log(newArray);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// Activity 4: Default Parameters
// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5)); // Output: 5
console.log(multiply(5, 3)); // Output: 15

// Activity 5: Enhanced Object Literals
// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const enhancedObject = {
    name: "Bob",
    age: 25,
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};
console.log(enhancedObject);
console.log(enhancedObject.greet()); // Output: "Hello, my name is Bob and I am 25 years old."

// Task 9: Create an object with computed property names based on variables and log the object to the console.
const key1 = "name";
const key2 = "age";
const computedObject = {
    [key1]: "Charlie",
    [key2]: 35
};
console.log(computedObject); // Output: { name: "Charlie", age: 35 }