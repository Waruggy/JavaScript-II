// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function subtract (x) {
    let subtractMe = x;
    
    return function(y) {
    
    return x - y;
}
}

let startFour = subtract(4);
let startFive = subtract(5);
let startTen = subtract(10);
console.log(startTen(10));

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
    let counter = 0;
    return function () {
        return ++counter;
    }
};
const newCounter = counter();
 console.log(newCounter()); // 1
 console.log(newCounter()); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
    let increment = 0;
    let decrement = 0;
    return {
        more: function () {
            return ++increment;
        },
        less: function () {
            return --decrement;
        }
    }
};
console.log(counterFactory());