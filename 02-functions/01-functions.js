
// Function statement
// (defun add (left right)
//     (+ left right))

// Function statement
function add (left, right) {
    return left + right;
}

// Function expression
// (defvar add
//     (lambda (left right)
//         (+ left right)))

// Function expression
subtract = function (left, right) {
    return left - right;
};

console.log(add(23, 42));
console.log(subtract(23, 42));

console.log(typeof add);
console.log(typeof subtract);

// Function constructor
add = new Function('a', 'b', 'return a + b;');

// Lambda expression
subtract = (left, right) => left - right;
