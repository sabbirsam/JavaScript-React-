/**
 *   JavaScript JavaScript ES5 Object Methods
 * Managing Objects
 * Changing a Property Value   Object.defineProperty
 * Object.defineProperty(object, property, {value : value})
 */

const Name = {
    firstName: "sabbir",
    Lastname: "Ahmeed",
    Language: "Bangla"
}

Object.defineProperty(Name, "Language", {
    // writable: false,
    // enumerable:false,
    value: "No",
});

console.log(Name); //{ firstName: 'sabbir', Lastname: 'Ahmeed', Language: 'No' }
console.log(Name.Language); //No

// Returns all properties as an array
// Object.getOwnPropertyNames(object)
console.log(Object.getOwnPropertyNames(Name)); // [ 'firstName', 'Lastname', 'Language' ]

console.log(Object.getPrototypeOf(Name));
console.log(Object.keys(Name)); // [ 'firstName', 'Lastname', 'Language' ]