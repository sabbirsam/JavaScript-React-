/**
 * 1
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function Sum(a, b) {
    return a + b;
}

const n = Sum(1, 1);
console.log(n);
/**
 * 2
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
const v = function(a, b) {
    return a + b;
}
console.log(v(5, 5));

/**
 * 3
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */

const z = (a, b) => {
    return a + b;
}
console.log(z(2, 2))

/**
 * 4
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */

const myFunction = new Function("a", "b", "return a * b");
console.log(myFunction(1, 1));

const sabbir = new Function("a", "b", "return a * b");
console.log(sabbir(2, 2));


/**
2
10
4
2
4
 */

// self invoking function

(function(a, b) {
    console.log(1 + 1);
})();


// self invoking function

(function(a, b) {
    console.log(1 + 1);
})();

// ()();

(function(a, b) {
    return a + b;
})(1, 1);


// JavaScript functions can be used in expressions:

function myFunction(a, b) {
    return a * b;
}

let x = myFunction(4, 3) * 2;

console.log(x);

// JavaScript functions Parameters and Arguments
// if y value not added then by default it will be 2
function myFunction(x, y) {
    if (y === undefined) {
        y = 2;
    }
    return x * y;
}

function MyName(name, add) {
    if (add === undefined) {
        add = "sam";
    }
    return name + " " + add;
}

console.log(MyName("sabbir")); // sabbir sam
console.log(MyName("sabbir", "Ahmed")); //sabbir Ahmed



/**
 * The Arguments Object
 */

function Checkvalue() {
    let max = -Infinity;
    for (let i = 0; i <= arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

console.log(Checkvalue(1, 54, 92, 36, 78, 85));


/**
 * The Arguments Object
 */

function Checkvalue() {
    let max = -Infinity;
    let c = arguments.length; // get the total length of inpur argumnet
    console.log(c);
    for (let i = 0; i < arguments.length; i++) {
        //arguments[i] > max return true
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

console.log(Checkvalue(1, 54, 92, 36, 78, 85));


/**
 * Invoking a JavaScript Function
 */

function myFunction(a, b) {
    return a * b;
}

let c = window.myFunction(1, 2);
console.log(c); // Will also return 20

/**
 * Invoking a Function with a Function Constructor
 */

function myFunction(a, b) {
    this.firstname = a;
    this.lasrname = b;
}
const c = new myFunction("sabbir", "ahmed");
console.log(c.firstname);
console.log(c.lasrname);


/**
 * Invoking a Function with a Function Constructor
 */
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

// This will return "John Doe":
person.fullName();
console.log(person.fullName()); //John Doe



/**
 * The JavaScript call() Method
 */

const person = {
    information: function() {
        return this.firstName + " " + this.lastName;
    }
}


const teacher_one = {
    firstName: "John",
    lastName: "Doe",

}
const teacher_two = {
    firstName: "John",
    lastName: "Doe",

}

let a = person.information.call(teacher_one);
let b = person.information.call(teacher_two);

console.log(a);
console.log(b);


/**
 * The JavaScript call() Method
 */


const person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const per = {
    firstName: "Johan",
    lastName: "Khan"
}

let c = person.fullName.call(per, "Dhaka", "Bangladesh");
console.log(c); //Johan Khan,Dhaka,Bangladesh


/**
 * The JavaScript call() Method
 */


const person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const per = {
    firstName: "Johan",
    lastName: "Khan"
}

let c = person.fullName.call(per, "Dhaka", "Bangladesh");
console.log(c); //Johan Khan,Dhaka,Bangladesh