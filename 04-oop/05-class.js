'use strict';

class Dog {
    #name

    constructor (name) {
        this.#name = name;
    }

    bark () {
        console.log('Wau wau! ' + this.#name);
    }
}

Dog.prototype.breathe = function () {
    console.log('In and out, and in and out, …');
};

const malin = new Dog('Malin');

malin.bark();
