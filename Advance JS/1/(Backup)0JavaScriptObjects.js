// Objects are Variables
let person = "John Doe";
let person = { name: "Name", age: 13, address: "dhaka" };
const person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};


const person = {};
person.name = "Sabbir";
person.age = 13;

// Using the JavaScript Keyword new

const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

/**
 * JavaScript Object Properties
 */
const person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
};

console.log(person.firstname + " is " + person["age"] + " years old."); //John is 50 years old.



/**
 * JavaScript Object Properties
 */
const person = {
    fname: " John",
    lname: " Doe",
    age: 25
};

person.nationality = "English";

let txt = "";
for (let x in person) {
    txt += person[x];
}

console.log(txt); // John Doe25
console.log(person.nationality); // John Doe25

delete person.age;

console.log(person.age); //undefined
/**
  John Doe25English
English
 */


/**
 * Nested Objects
 */

const address = {
    name: "Sabbir",
    age: 13,
    some_address: {
        presentAdd: "Dhaka",
        permanentAdd: "Maymensingh"
    }
}

console.log(address.some_address.presentAdd); //Dhaka
console.log(address.some_address["presentAdd"]); //Dhaka
console.log(address["some_address"]["presentAdd"]); //Dhaka


/**
 * Nested Arrays and Objects
 */

// const address = {
//     name: "Sabbir",
//     age: 13,
//     some_address: [
//         {}, {}
//     ]
// }

const address = {
    name: "Sabbir",
    age: 13,
    some_address: [{
            name: "Dhaka",
            division: ["Khulna", "Rajshi"]
        },
        {
            name: "Rangpur",
            division: ["Khulna", "Rajshi"]
        }
    ]
}


// example 


const address = {
    name: "Sabbir",
    age: 13,
    some_address: [{
            name: "Dhaka",
            division: ["Khulna", "Rajshi"]
        },
        {
            name: "Rangpur",
            division: ["Khulna", "Rajshi"]
        }
    ]
}

let y = "";
for (let x in address.some_address) {

    y += address.some_address[x].name;
}
console.log(y); //DhakaRangpur


// ============

const address = {
    name: "Sabbir",
    age: 13,
    some_address: [{
            name: "Dhaka",
            division: ["Khulna", "Rajshi"]
        },
        {
            name: "Rangpur",
            division: ["khulla", "Rajshi"]
        }
    ]
}

let y = "";
for (let x in address.some_address) {

    y += address.some_address[x].division;
}
console.log(y); //Khulna,Rajshikhulla,Rajshi



// =========


const address = {
    name: "Sabbir",
    age: 13,
    some_address: [{
            name: "Dhaka",
            division: ["Khulna", "Rajshi"]
        },
        {
            name: "Rangpur",
            division: ["sam", "amm"]
        }
    ]
}

let y = "";
let c = "";
for (let x in address.some_address) {

    y += address.some_address[x].name;
    for (let k in address.some_address[x].division) {
        c += address.some_address[x].division[k];
    }
}
console.log(y); //Khulna,Rajshikhulla,Rajshi
console.log(c); //



/**
 * Nested Arrays and Objects
 */

// const address = {
//     name: "Sabbir",
//     age: 13,
//     some_address: [
//         {}, {}
//     ]
// }

const address = {
    name: "Sabbir",
    age: 13,
    some_address: [{
            name: "Dhaka",
            division: ["Khulna", "Rajshi"]
        },
        {
            name: "Rangpur",
            division: ["sam", "amm"]
        }
    ]
}

let y = "";
let c = "";
for (let x in address.some_address) {

    y += address.some_address[x].name;
    for (let k in address.some_address[x].division) {
        c += address.some_address[x].division[k];
    }
}
console.log(y); //Khulna,Rajshikhulla,Rajshi
console.log(c); //