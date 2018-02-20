/*
HW-4; Continue with JS

Instructions: Please create solutions to the following problems.
You can include all of your answers in this single document.

In order to test your HW, I will simply copy and paste the
entirety of this document into a web console and check that
the correct output occurs.

 */

/**************************************************/
// PROBLEM 1 - Basic Function Definitions
//
// Define 1 function using both Function Definition and Function Expression formats.
// For the function definition format, label the function as; squarePrintFuncDef
// For the function expression format, label the function as; squarePrintFuncExpress
//
// These functions should take a single input, which will be a Number.
// Each function should;
// 1. square this number
// 2. then print the result as a string to the console log, behind the text "The result is: "
//
//  As an example, if squarePrintFuncDef( 2 ) is called,
//  it should print "The result is: 4" to the web console.

// Your code goes here (DONE*!*)
const square = function squarePrintFuncDef(x) {
  let result = x * x;
  console.log("The result is:" + result);
};
console.log(square(100));
// Function Calls - DO NOT ALTER
squarePrintFuncDef( 2 );
squarePrintFuncExpress( 2 );
/**************************************************/
// PROBLEM 2 - Minimum
//
// Last week introduced the standard function Math.min() that returns its smallest argument. We can do that ourselves now. Write a function min() that takes two arguments and returns their minimum.

// Your code here (DONE*!*)
function min(x, y) {
  if (x < y) return x;
  else return y;
}
console.log(min(-100, 100));

console.log(min(28, 5));

console.log(min(86,-200));

//So on and so forth forever.

// Function Calls - DO NOT ALTER
console.log( min(0, 10) );
// → 0
console.log( min(0, -10) );
// → -10
/**************************************************/
// PROBLEM 3 - Letter Counting
//
// Write a function called countChar() that takes a string as its first argument, and takes a second argument that indicates a character. The function should then return a Number, representing the number of times that letter occurs in the string.
//
// Your program should output something like the following;

// Your code here.
function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countJs(string) {
  return countChar(string, "J");
}

console.log(countJs("Javascript Just Joyful?!?!?!"));

console.log(countChar("Kill Me", "K"));

console.log(countChar("Pretty Please", "P"));

// Function Calls - DO NOT ALTER
console.log( countChar("BBC", "B") );
// → 2
console.log( countChar("kakkerlak", "k") );
// → 4
console.log( countChar("michael", "M") );
// → 0
/**************************************************/
// PROBLEM 4 - The sum of a range
//
// Write a range function ( 'range()' ) that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
//
// Next, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
//
// Finally, write a sum function ( 'sum()' ) that takes an array of numbers and returns the sum of these numbers.

// Your code here.
function range (){
    var array = [];
    var lower = Math.min.apply(null, arguments);
    var upper = Math.max.apply(null, arguments);

    for (var i=lower;i<=upper;i++){
        array.push(i);
    }
    return array;
}

function sum(array){
    return  array.reduce((x,y)=>x+y,0);
}

console.log(range(1, 10));

console.log(range(5, 2, -1));

console.log(sum(range(1, 10)));

// Function Calls - DO NOT ALTER
console.log( range(1, 10) );
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log( range(5, 2, -1) );
// → [5, 4, 3, 2]
console.log( sum(range(1, 10)) );
// → 55
/**************************************************/
// PROBLEM 5 - Your own loop
//
// Write a higher-order function 'loop()' that provides a way to something like a for loop statement. It takes a value, a test function, an update function, and a body function. Each iteration, it first runs the test function on the current loop value, and stops if that returns false. Then, it calls the body function, giving it the current value. And finally, it calls the update function to create a new value, and starts from the beginning.
//
// When defining the function, you may use a regular loop to do the actual looping.

// Your code here.
function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

loop(100, x => x > 50, x => x - 10, console.log);

// Function Calls - DO NOT ALTER
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

loop(1, n => n <= 10, n => n + 3, console.log);
// → 1
// → 4
// → 7
// → 10
/**************************************************/
