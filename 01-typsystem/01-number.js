
// number
x = 42;
console.log(typeof x);

// number
x = 3.14;
console.log(typeof x);

// Infinity (gemäß IEEE-754)
x = 2 / 0;
console.log(x);

// -Infinity (gemäß IEEE-754)
x = 2 / -0;
console.log(x);


// => number ist equivalent zu double in anderen Sprachen
//    64-Bit-Fließkommaarithmetik
