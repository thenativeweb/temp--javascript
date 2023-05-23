'use strict';

// Konstruktorfunktion
// - Konvention: Sie fangen mit einem Großbuchstaben an
// - Das zwingt aber niemanden, es mit new aufzurufen (leider)
const Dog = function (name) {
    this.name = name;
    this.bark = function () {
        console.log('Wau wau! ' + name);
    };
    // return 23;
    // return { bark () { console.log('this.name'); } };
};

// const newDog = function (name) {
//     const newDog = {};
//     dog.call(newDog, name);
//     return newDog;
// };

const malin = new Dog('Malin');

malin.bark();
