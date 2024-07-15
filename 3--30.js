// Activity 1: If-Else Statements

// Task 1: Check if a number is positive, negative, or zero
function checkNumber(num) {
    if (num > 0) {
        console.log("The number is positive.");
    } else if (num < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}

// Task 2: Check if a person is eligible to vote
function checkVotingEligibility(age) {
    if (age >= 18) {
        console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote.");
    }
}

// Activity 2: Nested If-Else Statements

// Task 3: Find the largest of three numbers
function findLargest(a, b, c) {
    if (a > b) {
        if (a > c) {
            console.log("The largest number is " + a);
        } else {
            console.log("The largest number is " + c);
        }
    } else if (b > c) {
        console.log("The largest number is " + b);
    } else {
        console.log("The largest number is " + c);
    }
}

// Activity 3: Switch Case

// Task 4: Day of the week based on a number (1-7)
function logDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid day number");
    }
}

// Task 5: Assign grade based on score
function assignGrade(score) {
    switch (true) {
        case score >= 90:
            console.log("A");
            break;
        case score >= 80:
            console.log("B");
            break;
        case score >= 70:
            console.log("C");
            break;
        case score >= 60:
            console.log("D");
            break;
        default:
            console.log("F");
    }
}

// Activity 4: Conditional (Ternary) Operator

// Task 6: Check if a number is even or odd using ternary operator
function checkEvenOdd(num) {
    const result = (num % 2 === 0) ? "even" : "odd";
    console.log(`The number is ${result}.`);
}

// Feature Request: Leap Year Check Script

// Task 7: Check if a year is a leap year
function checkLeapYear(year) {
    const isLeap = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? "is a leap year" : "is not a leap year";
    console.log(`${year} ${isLeap}.`);
}

// Example usage
checkNumber(3);
checkVotingEligibility(20);
findLargest(5, 8, 3);
logDayName(4);
assignGrade(85);
checkEvenOdd(7);
checkLeapYear(2024);