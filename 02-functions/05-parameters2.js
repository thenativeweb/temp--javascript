'use strict';

const add = function (left, right = 0, ...others) {
    // if (right === undefined) {
    //     right = 0;
    // }
    // right = right || 0;
    // right = right ?? 0;
    // right ??= 0;

    let sum = left + right;
    for (let i = 0; i < others.length; i++) {
        sum += others[i];
    }
    return sum;
};

const sum = add(23, 42, 17, 1, 2, 3, 4, 5);

console.log(sum);
