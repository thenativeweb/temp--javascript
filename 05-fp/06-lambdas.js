'use strict';

const primes = [ 2, 3, 5, 7, 11 ];

console.log(
    primes.
        map(n => n ** 2).
        filter(n => n % 2 === 1).
        reduce((a, b) => a + b, 0)
);
