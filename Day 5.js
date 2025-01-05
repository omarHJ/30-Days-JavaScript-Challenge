// Activity 1: Function Declaration
function isEven(num) {
    if (num % 2 === 0) {
        console.log(`${num} is even.`);
    } else {
        console.log(`${num} is odd.`);
    }
}

function square(num) {
    return num * num;
}

// Activity 2: Function Expression
const findMax = function(num1, num2) {
    return num1 > num2 ? num1 : num2;
};

const concatenate = function(str1, str2) {
    return str1 + str2;
};

// Activity 3: Arrow Functions
const sum = (num1, num2) => num1 + num2;

const checkChar = (str, char) => str.includes(char) ? true : false;

// Activity 4: Function Parameters and Default Values
function multiply(num1, num2 = 2) {
    return num1 * num2;
}

function greet(name, age = 30) {
    return `Hello ${name}, you are ${age} years old.`;
}

// Activity 5: Higher-Order Functions
function callMultipleTimes(func, num) {
    for (let i = 0; i < num; i++) {
        func();
    }
}

function greetUser() {
    console.log('Hello User!');
}

function applyTwice(func, num) {
    let result = func(num);
    result = func(result);
    return result;
}

function squareNum(num) {
    return num * num;
}

// Example usages:
isEven(7); // Output: 7 is odd.
console.log(square(5)); // Output: 25
console.log(findMax(3, 7)); // Output: 7
console.log(concatenate('Hello, ', 'World!')); // Output: Hello, World!
console.log(sum(4, 6)); // Output: 10
console.log(checkChar('Hello', 'e')); // Output: true
console.log(multiply(5)); // Output: 10
console.log(greet('Alice')); // Output: Hello Alice, you are 30 years old.
callMultipleTimes(greetUser, 3); // Output: Hello User! (3 times)
console.log(applyTwice(squareNum, 5)); // Output: 625