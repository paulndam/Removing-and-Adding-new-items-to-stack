// An example of a real-world stack is a Pez dispenser. Imagine that your virtual Pez dispenser is filled with red, yellow, and white colors and you don’t like the yellow ones. Write a program that uses a stack (and maybe more than one) to remove the yellow ones without changing the order of the other candies in the dispenser.

function Stack () {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.length = length;
  this.clear = clear;
}

function push (element) {
  return (this.dataStore[this.top++] = element);
}
function pop () {
  return this.dataStore[this.top--];
}
function peek () {
  return this.dataStore[this.top - 1];
}
function length () {
  return this.top;
}
function clear () {
  this.top = 0;
  this.dataStore = 0;
}

// creating a stack and prototype object array to store the items
// then setting the top of that prototype to be 0 for now,
// then finally add an element or item into our temp stack using a function
Stack.prototype.emptyTempArray = [];
Stack.prototype.emptyTempTop = 0;
Stack.prototype.pushIntoEmptyTempArray = function (element) {
  this.emptyTempArray[this.emptyTempTop++] = element;
};

var stack = new Stack ();

// here i will loop thru my original array and push or add all the item into the stack

function originalArray (element) {
  element.forEach (function (items) {
    stack.push (items);
  });
}

// doing a function to rmove the yellow colors, whereby we gonna loop thru our datastore in the stack object, and checking to see if each item matches the color we want and then push that item or element into the temp array we created.

function getRidOfYellow (old, neew) {
  stack.dataStore.forEach (function (items) {
    if (items === old) {
      stack.pushIntoEmptyTempArray (neew);
    } else {
      stack.pushIntoEmptyTempArray (items);
    }
  });
  stack.dataStore = stack.emptyTempArray;
}

originalArray (['black', 'green', 'yellow', 'brown', 'blue', 'white']);
getRidOfYellow ('yellow', 'pink');

console.log (stack.dataStore);
