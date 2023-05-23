'use strict';

const buildAdd = function (y) {
    return function (x) {
        return x + y;
    };
};

// const add10 = function (x) {
//     return x + 10;
// };
const add10 = buildAdd(10);
const add100 = buildAdd(100);
const add1000 = buildAdd(1_000);

for (let i = 1_000; i <= 100_000; i += 1_000) {
    const functionName = `add${i}`;
    globalThis[functionName] = buildAdd(i);
}

console.log(add23000(17));
