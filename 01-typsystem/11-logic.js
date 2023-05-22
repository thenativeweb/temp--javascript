
// Falsy values
// - false
// - 0
// - ''
// - undefined
// - null

x = 0;
y = 42;

z = x || y;

console.log(z);


person = {
    firstName: 'Dana',
    // middleName: 'Katherine',
    lastName: 'Scully',
    children: 0
};

// Nullish coalescing operator
console.log('First name: ' + person.firstName);
console.log('Middle name: ' + (person.middleName ?? 'n/a'));
console.log('Last name: ' + person.lastName);
console.log('Children: ' + (person.children ?? 'n/a'));
