'use strict';

const numbers = [ 1, 2, 3, 4, 5 ];

const ducks = [
    { firstName: 'Daisy', lastName: 'Duck', nephews: []},
    { firstName: 'Donald', lastName: 'Duck', nephews: [
        { firstName: 'Tick', lastName: 'Duck' },
        { firstName: 'Trick', lastName: 'Duck' },
        { firstName: 'Track', lastName: 'Duck' },
    ]}
];

const clonedNumbers = structuredClone(numbers);
const clonedDucks = structuredClone(ducks);

numbers.push(6);
ducks[1].nephews[2].firstName = 'Huey';

console.log(JSON.stringify({
    numbers,
    clonedNumbers,
    ducks,
    clonedDucks
}));
