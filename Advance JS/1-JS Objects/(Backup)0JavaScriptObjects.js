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