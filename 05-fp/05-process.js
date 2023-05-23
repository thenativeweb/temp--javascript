'use strict';

const primes = [ 2, 3, 5, 7, 11 ];

// const processArray = function (array, fn) {
//     const result = [];

//     for (const item of array) {
//         result.push(fn(item));
//     }

//     return result;
// };

// const squares = processArray(primes, function (n) {
//     return n ** 2;
// });

const squares = primes.map(function (prime) {
    return prime ** 2;
});

console.log(squares);


const oddSquares = squares.filter(function (square) {
    return square % 2 === 1;
});

console.log(oddSquares);


const sumOfOddSquares = oddSquares.reduce(function (subTotal, oddSquare) {
    return subTotal + oddSquare;
}, 0);

console.log(sumOfOddSquares);





const square = function (n) {
    return n ** 2;
};

const isOdd = function (n) {
    return n % 2 === 1;
};

const add = function (a, b) {
    return a + b;
};

console.log(
    primes.
        map(square).
        filter(isOdd).
        reduce(add, 0)
);
