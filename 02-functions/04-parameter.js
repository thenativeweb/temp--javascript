'use strict';

const person = {
    firstName: 'Elon',
    lastName: 'Musk'
};

const rename = function (p) {
    p = {
        firstName: 'Kimbal',
        lastName: p.lastName
    };
    console.log(p);
    // p.firstName = 'Kimbal';
};

rename(person);

console.log(person.firstName);
