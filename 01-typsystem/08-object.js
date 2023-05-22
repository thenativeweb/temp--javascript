
person = {
    firstName:   "Steve",
    "last-name": "Urcle",
    job:         "Actor",
    age:         25,
    isMale:      true,
    defined:     undefined,
    special:     null,
    address:     {
        street: "...",
        city:   "..."
    }
};

console.log(person.firstName);
console.log(person["last-name"]);

console.log(person.nonExistent);
console.log(person.defined);

person["last-name"] = "Jobs";

console.log(person.hasFoundedTesla);
person.hasFoundedTesla = false;
console.log(person.hasFoundedTesla);

person.person = person;

console.log(person);

console.log(person.person.person.person.person.firstName);
