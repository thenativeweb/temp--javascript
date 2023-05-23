'use strict';

const Dog = function (name) {
    this.name = name;
};

Dog.prototype.bark = function () {
    console.log('Wau wau! ' + this.name);
};

const malin = new Dog('Malin');

// Dog.prototype.bark.call(malin);

malin.bark();
malin.constructor.prototype.bark.call(malin);
