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



/**
 * JavaScript Object Methods
 */

const person = {
    firstName: "Sabbir",
    lastName: "Ahmed",
    age: 14
}

person.nickname = "sam";

console.log(person);
// { firstName: 'Sabbir', lastName: 'Ahmed', age: 14, nickname: 'sam' }


// exampla 


const person = {
    firstName: "Sabbir",
    lastName: "Ahmed",
    age: 14
};

person.nickname = "sam";
person.FullName = function() {
    return this.firstName + " " + this.lastName;
};

console.log(person); // { firstName: 'Sabbir', lastName: 'Ahmed', age: 14, nickname: 'sam' }
console.log(person.FullName()); //Sabbir Ahmed

const person = {
    firstName: "Sabbir",
    lastName: "Ahmed",
    age: 14
};

person.nickname = "sam";
person.FullName = function() {
    return (this.firstName + " " + this.lastName).toUpperCase();
};

console.log(person.FullName()); //SABBIR AHMED



/**
 * JavaScript Using Object.values() to convert value in Array
 */

const person = {
    firstName: "Sabbir",
    lastName: "Ahmed",
    age: 14
};

console.log(Object.values(person));


/**
 * JavaScript Using  JSON.stringify()
 */

const person = {
    firstName: "Sabbir",
    lastName: "Ahmed",
    age: 14
};

let myString = JSON.stringify(person);
console.log(myString); //{"firstName":"Sabbir","lastName":"Ahmed","age":14}



/**
 * JavaScript Using  JSON.stringify()
 */

const person = {
    firstName: "Sabbir",
    lastName: "Ahmed",
    age: 14
};

let myString = JSON.stringify(person);
console.log(myString); //{"firstName":"Sabbir","lastName":"Ahmed","age":14}


/**
 * JavaScript Using  JSON.stringify() function stringify fix
 */

const person = {
    firstName: "Sabbir",
    lastName: "Ahmed",
    age: function() { return 30; }
};

person.age = person.age.toString();

let myString = JSON.stringify(person);
console.log(myString); //


/**
 * JavaScript Using  JSON.stringify()
 */

let arr = ["sa", "sam"];

let myString = JSON.stringify(arr);
console.log(myString); //


/**
 * JavaScript Using  JSON.stringify() DATE  
 */

const persons = {
    name: "sabbir",
    age: 14,
    date: new Date()
};

let a = JSON.stringify(persons);
console.log(a); //{"name":"sabbir","age":14,"date":"2022-02-13T06:39:53.327Z"}

/**
 * JavaScript Using  JSON.stringify() Function  
 */

const person = {
    firstName: "sabbir",
    LastName: "Ahmed",
    age: 14,
    fullName: function() {
        return this.firstName + " " + this.LastName;
    }
};

let b = JSON.stringify(person);
console.log(b); //{"firstName":"sabbir","LastName":"Ahmed","age":14} here full name function is missing, as json stringify not direct work witj function

/**
 * Fix this issue
 */
const person = {
    firstName: "sabbir",
    LastName: "Ahmed",
    age: 14,
    fullName: function() {
        return this.firstName + " " + this.LastName;
    },
    age: function() { return 30; }

};

person.fullName = person.fullName.toString();
person.age = person.age.toString();

let b = JSON.stringify(person);
console.log(b); //{"firstName":"sabbir","LastName":"Ahmed","age":"function() { return 30; }","fullName":"function() {\r\n        return this.firstName + \" \" + this.LastName;\r\n    }"}



/**
 * Stringify Arrays
 */

const arr = ["sabbir", "sam", 13, 14, "lkop"];
let c = JSON.stringify(arr);

console.log(c); //["sabbir","sam",13,14,"lkop"]


/**
 * JavaScript Object Accessors
 * Getter
 */

const Info = {
    name: "Sabbir",
    lastName: "ahmed",
    age: 15,
    address: "Khulna",
    get addr() {
        return this.address;
    }
}
console.log(Info.addr);


/**
 * JavaScript Object Accessors
 * setter
 */

const person = {
    fistName: "Sabbir",
    lastName: "Ahmed",
    FullName: function() {
        return this.fistName + " " + this.lastName;
    },
    get Full() {
        return this.fistName + " " + this.lastName;
    }
}

console.log(person.FullName());
console.log(person.Full);
/**
Sabbir Ahmed
Sabbir Ahmed
 */


/**
 * 
 */

const obj = {
    counter: 0
};

Object.defineProperty(obj, "reset", {
    get: function() {
        this.counter = 0;
    }
});

Object.defineProperty(obj, "increment", {
    get: function() {
        this.counter++;
    }
});


Object.defineProperty(obj, "add", {
    set: function(value) {
        this.counter += value;
    }
});

obj.add = 5;
obj.increment;
console.log(obj.counter);


/**
 * 
 */
const obj = {
    counter: 0
};

Object.defineProperty(obj, "reset", {
    get: function() {
        this.counter = 0;
    }
});

Object.defineProperty(obj, "increment", {
    get: function() {
        this.counter++;
    }
});

Object.defineProperty(obj, "decrement", {
    set: function(value) {
        this.counter -= value;
    }
});


Object.defineProperty(obj, "add", {
    set: function(value) {
        this.counter += value;
    }
});

Object.defineProperty(obj, "subtract", {
    set: function(value) {
        this.counter -= value;
    }
})

obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.increment;
obj.increment;
obj.decrement;
console.log(obj.counter);

/**
 * Constructor
 */
function Person(first, last, age, eye) {
    this.FirstName = first;
    this.LastName = last;
    this.age = age;
    this.eye = eye;
};

const MyInfo = new Person("sabbir", "ahmed", 15, "Brown");
console.log(MyInfo);
/**
 Person {
  FirstName: 'sabbir',
  LastName: 'ahmed',
  age: 15,
  eye: 'Brown'
}

 */
console.log(MyInfo.FirstName); //sabbir

/**
 Constructor
 */
function Person(first, last, age, eye) {
    this.FirstName = first;
    this.LastName = last;
    this.age = age;
    this.eye = eye;
};

const MyInfo = new Person("sabbir", "ahmed", 15, "Brown");

MyInfo.name = function() {
    return this.FirstName + " " + this.LastName;
}

console.log(MyInfo.name());

/**
 
 */
function Person(first, last, age, eye) {
    this.FirstName = first;
    this.LastName = last;
    this.age = age;
    this.eye = eye;
    this.lan = "Bangla"
};

const MyInfo = new Person("sabbir", "ahmed", 15, "Brown");

MyInfo.name = function() {
    return this.FirstName + " " + this.LastName;
}

console.log(MyInfo);


function Person(first, last, age, eye) {
    this.FirstName = first;
    this.LastName = last;
    this.age = age;
    this.eye = eye;
    this.lan = "Bangla"
};

const MyInfo = new Person("sabbir", "ahmed", 15, "Brown");

MyInfo.name = function() {
    return this.FirstName + " " + this.LastName;
}

console.log(MyInfo.name());


/**
 * JavaScript Object Prototypes
 */

function Persion(name, id, age) {
    this.Name = name;
    this.id = id;
    this.age = age;
    this.color = "red";
}

Persion.prototype.language = "English";
Persion.prototype.FullName = function() {
    return this.Name + " " + this.color;
}

const Infor = new Persion("Sabbir", 17103188, 25);
console.log(Infor); //Persion { Name: 'Sabbir', id: 17103188, age: 25, color: 'red' }

console.log(Infor.language); //English
console.log(Infor.FullName()); //English


/**
 * JavaScript Iterables
 */

const name = "MD SABBIR AHMEd";

let t = "";
for (const x of name) {
    t += x + "\n";
}
console.log(t);
/**
M
D
 
S
A
B
B
I
R
 
A
H
M
E
d
 
 */


/**
 * JavaScript Iterables
 */

const name = ["a", "b", "c"];

let t = "";
for (const x of name) {
    t += x + "\n";
}
console.log(t);
/**
 a
b
c
 
 */

const name = "Sabbir Ahmed Sam";
let a = '';
for (const x of name) {

    a += x + "\n";
}
console.log(a);



/**
 * JavaScript JavaScript Iterators Next()
 */

// Home Made Iterable
function myNumbers() {
    let n = 0;
    return {
        next: function() {
            n += 10;
            return { value: n, done: false };
        }
    };
}

// Create Iterable
const n = myNumbers();
console.log(n.next()); // Returns 10
console.log(n.next()); // Returns 20
console.log(n.next()); // Returns 30
console.log(n.next().value); // Returns 30

/**
{ value: 10, done: false }
{ value: 20, done: false }
{ value: 30, done: false }
40

 */


function demo() {
    let n = 2;
    return {
        next: function() {
            n += 2;
            return {
                value: n,
                done: true
            }
        }
    }
}

const n = new demo();
// console.log(n.next());
console.log(n.next().value);


// increase by `1`

function demo() {
    let n = 0;
    return {
        next: function() {
            n += 1;
            return {
                value: n,
                done: true
            }
        }
    }
}

const n = new demo();
// console.log(n.next());
console.log(n.next().value);
console.log(n.next().value);
console.log(n.next().value);


/**
 *   JavaScript iterable is an object that has a Symbol.iterator.
 */

myNUmber = {};

myNUmber[Symbol.iterator] = function() {
    let n = 0;
    done = false;
    return {
        // next: function() {
        next() {
            n += 1;
            if (n == 10) { done = true }
            return {
                value: n,
                done: done
            };
        }
    };
}
let t = "";
for (const x of myNUmber) {
    t += x + "\n";
}


console.log(t);


/**
 *   JavaScript Set()
 */

const elements = new Set(["a", "b", "c"]);
console.log(elements); //Set(3) { 'a', 'b', 'c' }
console.log(elements.size); //3


/**
 *   JavaScript Set() add()
 */

const elements = new Set(["a", "b", "c"]);

elements.add("d");
elements.add("e");
console.log(elements); //Set(5) { 'a', 'b', 'c', 'd', 'e' }
console.log(elements.size); //5

/**
 *   JavaScript Set()
 */

const a = "a";
const b = "b";
const c = "c";

const all = new Set();

all.add(a, b, c); // only add first one  //Set(1) { 'a' }
all.add(b); // 
all.add(c); // 
console.log(all); //Set(3) { 'a', 'b', 'c' }



/**
 *   JavaScript Set()
 */

const a = "a";
const b = "b";
const c = "c";

const all = new Set();

all.add(a, b, c); // only add first one  //Set(1) { 'a' }
all.add(b); // 
all.add(c); // 


let t = "";

all.forEach(function(value) {
    t += value;
});

console.log(t); // abc


/**
 *   JavaScript values()
 */

const a = "d";
const b = "e";
const c = "f";

const all = new Set(["a", "b", "c"]);

all.add(a, b, c); // only add first one  //Set(1) { 'a' }
all.add(b); // 
all.add(c); //

console.log(all.values()); //[Set Iterator] { 'a', 'b', 'c', 'd', 'e', 'f' }







/**
 *   JavaScript Set()
 */

const a = "d";
const b = "e";
const c = "f";

const all = new Set(["a", "b", "c"]);

all.add(a, b, c); // only add first one  //Set(1) { 'a' }
all.add(b); // 
all.add(c); //

console.log(all.values()); //[Set Iterator] { 'a', 'b', 'c', 'd', 'e', 'f' }

let q = "";
for (const a of all.values()) {
    q += a + "\n";
}

console.log(q);

/**
 
[Set Iterator] { 'a', 'b', 'c', 'd', 'e', 'f' }
a
b
c
d
e
f
 
 
 */

/**
 *   JavaScript entries()
 */


const all = new Set(["a", "b", "c"]);

console.log(all.entries()); // [Set Entries] { [ 'a', 'a' ], [ 'b', 'b' ], [ 'c', 'c' ] }
let a = "";

for (const b of all.entries()) {
    a += b + "\n";
}
console.log(a);
/**
 a,a
b,b
c,c
 
 
 */


/**
 *   JavaScript Maps
 */

// const someName = new Map();
const someName = new Map(
    [
        ["fruit name", "Apple"],
        ["Brand", "ATISH"],
    ]
);

console.log(someName.get("fruit name"));



/**
 *   JavaScript Maps
 */

// const someName = new Map();
const someName = new Map(
    [
        ["fruit name", "Apple"],
        ["Brand", "ATISH"],
    ]
);

someName.set("Manufracture", "sabbir");

console.log(someName.get("fruit name"));
console.log(someName.get("Manufracture"));
/**
Apple
sabbir

 */

/**
 *   JavaScript Maps delete functionality 
 */

// const someName = new Map();
const someName = new Map(
    [
        ["fruit name", "Apple"],
        ["Brand", "ATISH"],
    ]
);

someName.set("Manufracture", "sabbir");
someName.set("demo", "ok demo");

someName.delete("Brand");

console.log(someName.get("Brand"));

/**
 *   JavaScript Maps
 */

// const someName = new Map();
const someName = new Map(
    [
        ["fruit name", "Apple"],
        ["Brand", "ATISH"],
    ]
);

someName.clear();

console.log(someName.size); // 0



// const someName = new Map();
const someName = new Map(
    [
        ["fruit name", "Apple"],
        ["Brand", "ATISH"],
    ]
);

// someName.clear();


console.log(someName.has("Brand")); // true

// const someName = new Map();
const someName = new Map(
    [
        ["fruit name", "Apple"],
        ["Brand", "ATISH"],
    ]
);

// someName.clear();


console.log(someName instanceof Map); // true

// const someName = new Map();
const someName = new Map(
    [
        ["fruit name", "Apple"],
        ["Brand", "ATISH"],
    ]
);

let t = "";

someName.forEach(
    function(valuem, key) {
        t += key + "\n";
    }
);
console.log(t);
/**
fruit name
Brand

 */


// const someName = new Map();
const someName = new Map(
    [
        ["fruit name", "Apple"],
        ["Brand", "ATISH"],
    ]
);

let t = "";

someName.forEach(
    function(value, key) {
        t += value + "\n";
    }
);
console.log(t);
/**
Apple
ATISH

 */



// Keys get direct
const someName = new Map(
    [
        ["fruit name", "Apple"],
        ["Brand", "ATISH"],
    ]
);

let t = "";

for (const x of someName.keys()) {
    t += x + "\n";
}
console.log(t);
/**
fruit name
Brand

 */


// values get direct
const someName = new Map(
    [
        ["fruit name", "Apple"],
        ["Brand", "ATISH"],
    ]
);

let t = "";

for (const x of someName.values()) {
    t += x + "\n";
}
console.log(t);
/**
Apple
ATISH
 */


// all find 

// Keys get direct
const someName = new Map(
    [
        ["fruit name", "Apple"],
        ["Brand", "ATISH"],
    ]
);

let t = "";

for (const x of someName.entries()) {
    t += x + "\n";
}
console.log(t);
/**
fruit name,Apple
Brand,ATISH
 */



// Keys get direct
const apples = { name: 'Apples' };
const bananas = { name: 'Bananas' };
const oranges = { name: 'Oranges' };

// Create a Map
const fruits = new Map();

// Add the Objects to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);

console.log(fruits.get(apples));
/**
500
 */

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