// Task 1: Write a program to print numbers from 1 to 10 using a for loop.
function printNumbers1to10() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// Task 2: Write a program to print the multiplication table of 5 using a for loop.
function printMultiplicationTable() {
  for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
  }
}

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
function calculateSum1to10() {
  let sum = 0;
  let i = 1;
  while (i <= 10) {
    sum += i;
    i++;
  }
  console.log(`The sum of numbers from 1 to 10 is: ${sum}`);
}

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.
function printNumbersDescending() {
  let i = 10;
  while (i >= 1) {
    console.log(i);
    i--;
  }
}

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
function printNumbers1to5() {
  let i = 1;
  do {
    console.log(i);
    i++;
  } while (i <= 5);
}

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.
function calculateFactorial(n) {
  let factorial = 1;
  let i = 1;
  do {
    factorial *= i;
    i++;
  } while (i <= n);
  console.log(`The factorial of ${n} is: ${factorial}`);
}

// Task 7: Write a program to print a pattern using nested for loops:
function printPattern() {
  for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += '* ';
    }
    console.log(row.trim());
  }
}

// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
function printWithContinue() {
  for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      continue;
    }
    console.log(i);
  }
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
function printWithBreak() {
  for (let i = 1; i <= 10; i++) {
    if (i === 7) {
      break;
    }
    console.log(i);
  }
}

// Call all the functions
printNumbers1to10();
console.log('---');
printMultiplicationTable();
console.log('---');
calculateSum1to10();
console.log('---');
printNumbersDescending();
console.log('---');
printNumbers1to5();
console.log('---');
calculateFactorial(5);
console.log('---');
printPattern();
console.log('---');
printWithContinue();
console.log('---');
printWithBreak();