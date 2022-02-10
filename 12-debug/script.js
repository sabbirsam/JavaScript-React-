var person = {
    name: "sabbir",
    age: 15,
};

// Object.defineProperties(person, "name", {});
Object.defineProperty(person, "name", {
    value: "Ahmed",
    writable: true,
    enumerable: true,
    configurable: true
});



console.log(person.name); //Ahmed