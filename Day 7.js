// Activity 1: Object Creation and Access
// Task 1: Create an object representing a book
const book = {
  title: "The Lord of the Rings",
  author: "J.R.R. Tolkien",
  year: 1954,

  // Task 3: Add a method to return title and author
  getTitleAndAuthor: function() {
    return `Title: ${this.title}, Author: ${this.author}`;
  },

  // Task 4: Add a method to update the year
  updateYear: function(newYear) {
    this.year = newYear;
  },

  // Task 7: Add a method using 'this' to return title and year
  getTitleAndYear: function() {
    return `Title: ${this.title}, Year: ${this.year}`;
  }
};

// Task 2: Access and log the title and author
console.log("Book Title:", book.title);
console.log("Book Author:", book.author);

// Activity 2: Object Methods
// Task 3 (log the result of calling the method)
console.log(book.getTitleAndAuthor());

// Task 4 (update the year and log the updated object)
book.updateYear(1965);
console.log("Updated Book:", book);

// Activity 3: Nested Objects
// Task 5: Create a nested object representing a library
const library = {
  name: "Central Library",
  books: [
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    book // Adding the book object created earlier
  ]
};

// Task 6: Access and log the library name and book titles
console.log("Library Name:", library.name);
console.log("Book Titles in the Library:");
library.books.forEach(book => {
  console.log(book.title);
});

// Activity 4: The this Keyword
// Task 7 (log the result of calling the method)
console.log(book.getTitleAndYear());

// Activity 5: Object Iteration
// Task 8: Use a for...in loop to iterate over book properties
console.log("\nBook Properties (for...in):");
for (let property in book) {
  if (typeof book[property] !== 'function') { // Exclude methods for this example
    console.log(`${property}: ${book[property]}`);
  }
}

// Task 9: Use Object.keys and Object.values
console.log("\nBook Keys (Object.keys):", Object.keys(book));
console.log("Book Values (Object.values):");
Object.values(book).forEach(value => {
    if (typeof value !== 'function') { // Exclude methods for this example
        console.log(value);
    }
});