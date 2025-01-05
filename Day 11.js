// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const resolvePromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise resolved with a message');
    }, 2000);
});

resolvePromise.then((message) => {
    console.log(message);
});

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
const rejectPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('Promise rejected with an error'));
    }, 2000);
});

rejectPromise.catch((error) => {
    console.error(error.message);
});

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Fetching data...');
            resolve('Data fetched successfully');
        }, 2000);
    });
};

fetchData()
    .then((data) => {
        console.log(data);
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Processing data...');
                resolve('Data processed successfully');
            }, 2000);
        });
    })
    .then((processedData) => {
        console.log(processedData);
    });

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
async function logResolvedValue() {
    try {
        const resolvedValue = await resolvePromise;
        console.log(resolvedValue);
    } catch (error) {
        console.error(error.message);
    }
}

logResolvedValue();

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
async function handleError() {
    try {
        await rejectPromise;
    } catch (error) {
        console.error(error.message);
    }
}

handleError();

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function fetchAndLogData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchAndLogData();

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 1000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 1500);
});

Promise.all([promise1, promise2])
    .then(values => {
        console.log(values);
    });

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
Promise.race([promise1, promise2])
    .then(value => {
        console.log(value);
    });