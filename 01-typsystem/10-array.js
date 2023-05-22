
primes = [
    2,
    3,
    5,
    7,
    11
];

console.log(primes[3]);
console.log(typeof primes);

primes[6] = undefined;
primes[8] = 'blubb';

console.log(primes);

typeof primes[5]
console.log(primes.length);




primesObj = {
    0: 2,
    1: 3,
    2: 5,
    3: 7,
    4: 11
};

primesObj[8] = 'blubb';

console.log(primesObj);
console.log(primesObj.length);



console.log(typeof primes === 'object' && Array.isArray(primes));
