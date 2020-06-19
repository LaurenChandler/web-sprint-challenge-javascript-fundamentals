// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why 
nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
//Functions look outward for context. If a variable isn’t defined in a function’s scope, 
//the function will look outside the scope chain and search for a variable being referenced 
//in the outer scope. console.log(internal) is being referenced outside the function, so the
//outer and inner functions can 'talk' to each other.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter 
and uses a counter to return the summation of that number. 
For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

//const summation = ()  => {
//const newCounter = summation();
//summation(4); 

function summation() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = summation(4);