'use strict';

class Person {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    marry (lastName) {
        if (lastName === undefined) {
            return;
        }

        this.lastName = lastName;
    }
}

const person = new Person('Golo', 'Haas');
person.marry('Roden');
console.log(person);

// -----------

class ImmutablePerson {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    marry (lastName) {
        if (lastName === undefined) {
            return this;
        }

        return new ImmutablePerson(this.firstName, lastName);
    }
}

const goloHaas = new ImmutablePerson('Golo', 'Haas');
const goloRoden = goloHaas.marry('Roden');
console.log({ goloHaas, goloRoden });
