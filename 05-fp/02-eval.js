'use strict';

const add10Source = `(function (x) {
    return x + 10;
})`;

const add10 = eval(add10Source);

console.log(add10(17));
