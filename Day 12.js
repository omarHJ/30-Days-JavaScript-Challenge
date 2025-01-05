// Task 1: Intentional error with try-catch
function intentionalError() {
  try {
    throw new Error("This is an intentional error.");
  } catch (error) {
    console.error("Task 1 Error:", error.message);
  }
}
intentionalError();


// Task 2: Division by zero with try-catch
function divide(numerator, denominator) {
  try {
    if (denominator === 0) {
      throw new Error("Division by zero error.");
    }
    return numerator / denominator;
  } catch (error) {
    console.error("Task 2 Error:", error.message);
  }
}
divide(10, 0);


// Task 3: Try-catch-finally block
try {
  console.log("Try block executed.");
  // You can add code here that might throw an error
} catch (error) {
  console.error("Catch block executed:", error.message);
} finally {
  console.log("Finally block executed.");
}


// Task 4: Custom error class
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function throwCustomError() {
  try {
    throw new CustomError("This is a custom error.");
  } catch (error) {
    console.error("Task 4 Error:", error.message);
  }
}
throwCustomError();



// Task 5: User input validation with custom error
function validateInput(input) {
  try {
    if (!input || input.trim() === "") {
      throw new CustomError("Input cannot be empty.");
    }
    console.log("Input is valid:", input);
  } catch (error) {
    console.error("Task 5 Error:", error.message);
  }
}
validateInput("");


// Task 6: Promise rejection with .catch()
const randomPromise = new Promise((resolve, reject) => {
  const randomNum = Math.random();
  if (randomNum < 0.5) {
    resolve("Promise resolved.");
  } else {
    reject("Promise rejected.");
  }
});

randomPromise.catch(error => {
  console.error("Task 6 Error:", error);
});


// Task 7: Async function with try-catch and promise
async function asyncPromise() {
  try {
    const result = await randomPromise;
    console.log(result);
  } catch (error) {
    console.error("Task 7 Error:", error);
  }
}
asyncPromise();


// Task 8: Fetch with .catch()
fetch("invalid_url")
  .then(response => response.json())
  .catch(error => {
    console.error("Task 8 Error:", error.message);
  });


// Task 9: Async fetch with try-catch
async function asyncFetch() {
  try {
    const response = await fetch("invalid_url");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Task 9 Error:", error.message);
  }
}

asyncFetch();


// Feature Requests (Combined Example)
// This example demonstrates basic, custom, promise, and fetch error handling.
(async () => {
  try {
    // Basic error handling
    intentionalError();

    // Custom error handling
    validateInput("");


    // Promise error handling
    await asyncPromise();

    // Fetch error handling
    await asyncFetch();


  } catch (error) {
    console.error("General Error:", error);
  } finally {
    console.log("Execution completed.");
  }
})();