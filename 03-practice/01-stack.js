'use strict';

const createStack = // ...

const stack = createStack();

console.log(stack.isEmpty());             // => true

stack.push(42);
stack.push(23);
stack.push(7);

console.log(stack.isEmpty());             // => false

console.log(stack.top());                 // => 7
console.log(stack.pop());                 // => 7
console.log(stack.pop());                 // => 23
console.log(stack.top());                 // => 42
console.log(stack.top());                 // => 42
console.log(stack.isEmpty());             // => false
console.log(stack.pop());                 // => 42

console.log(stack.isEmpty());             // => true
