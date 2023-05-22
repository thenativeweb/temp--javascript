'use strict';

const createStack = function () {
    // Daten
    const data = [];

    // Methoden
    const isEmpty = function () {
        return data.length === 0;
    };

    const push = function (x) {
        data.unshift(x);
    };

    const top = function () {
        return data[0];
    };

    const pop = function () {
        return data.shift();
    };

    // Öffentliches Interface
    return { isEmpty, push, top, pop };
};

// ---------

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
