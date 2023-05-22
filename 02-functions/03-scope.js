'use strict';

x = 23;

function doSomething () {
    // console.log(x); // 2: undefined
    const x = 42;
    console.log(x); // 3: 42
}

console.log(x); // 1: 23
doSomething();
console.log(x); // 4: 23



// const > let > var
