/*
HW-5; Objects and Classes

Instructions: Please create solutions to the following problems.
You can include all of your answers in this single document.

In order to test your HW, I will simply copy and paste the
entirety of this document into a web console and check that
the correct output occurs.

 */
/**************************************************/
// PROBLEM 1 - Classes - Vec()
//
// Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.
//
// Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (the one in this and the parameter) x and y values.
//
// Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).
// Your code here.
function Vector(x, y) {
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y);
};
Vector.prototype.minus = function(other) {
  return new Vector(this.x - other.x, this.y - other.y);
};
Object.defineProperty(Vector.prototype, "length", {
  get: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
});
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);

// Function Calls - DO NOT ALTER
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5
/**************************************************/
// PROBLEM 2 - Groups
//
// The standard JavaScript environment provides another data structure called Set. Like an instance of Map, a set holds a collection of values. Unlike Map, it does not associate other values with those—it just tracks which values are part of the set. A value can only be part of a set once—adding it again doesn’t have any effect.
//
// Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (it if was a member), and has returns a Boolean value indicating whether its argument is a member of the group.
//
// Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.
//
// Give the class a static from method that takes an iteratable object as argument and creates a group that contains all the values produced by iterating over it.
// Your code here.
class Group {
  constructor() {
    this.sucks = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.sucks.push(value);
    }
  }

  delete(value) {
    this.sucks = this.sucks.filter(v => v !== value);
  }

  has(value) {
    return this.sucks.includes(value);
  }
  static from(collection) {
    let group = new Group;
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }
}
let group = Group.from([100, 50]);
console.log(group.has(100));
console.log(group.has(60));
group.add(20);
group.delete(20);
console.log(group.has(50));

// Function Calls - DO NOT ALTER
let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
/**************************************************/
// PROBLEM 3 - Retry
//
// Say you have a function primitiveMultiply that, in 20 percent of cases, multiplies two numbers, and in the other 80 percent, raises an exception of type MultiplicatorUnitFailure. Write a function ( "reliableMultiply()" ) that wraps this clunky function and just keeps trying until a call succeeds, after which it returns the result.
//
// Make sure you handle only the exceptions you are trying to handle.
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2)
    return a * b;
  else
    throw new MultiplicatorUnitFailure("Klunk");
}
function reliableMultiply(a, b) {
  // Your code here.
  for (;;) {
        try {
        return primitiveMultiply(a, b);
        } catch (e ) {
        if (!(e instanceof MultiplicatorUnitFailure))
  	    throw e;
      }
    }
  }

console.log(reliableMultiply(8, 8));
/**************************************************/
// SUBMISSION
//
// When you have finished with this weeks homework, please write a readme response to the week. You should then add this directory into your git repo, sync it, and provide a link to the repo directory (1 link only), to the HW-5 Submission Forum via Moodle.
/**************************************************/
