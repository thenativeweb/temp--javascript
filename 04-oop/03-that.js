'use strict';

const Dog = function (name) {
    // Don't do this at home ;-)
    const that = this ?? {};
    that.name = name;
    return that;
};

const malin = new Dog('Malin');
const alice = Dog('Alice');
