const person = {
    fname: "John",
    lname: "Doe",
    age: 25
};

for (let x in person) {
    console.log(x);
}

/**
 fname
lname
age

 */

const person = {
    fname: "John",
    lname: "Doe",
    age: 25
};

for (let x in person) {
    console.log(person[x]);
}
/**
 John
Doe
25
 */


const numbers = [45, 4, 9, 16, 25];

for (let x in numbers) {
    console.log(numbers[x]);
}
/**
45
4
9
16
25
 */

// For OFF

const cars = ["BMW", "Volvo", "Mini"];

for (let c of cars) {
    console.log(c);
}
/**
 BMW
Volvo
Mini


 */


// For OFF

let name = "SABBIR AHMED"

for (let c of name) {
    console.log(c);
}
/**
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
D

 */

// While
let i = 1;
while (i < 10) {
    console.log(i);
    i++;
}


// While
let i = 1;
while (i < 10) {
    console.log(i);
    i++;
}

// do while 

let i = 2;
do {
    console.log(i);

    i++;
} while (i < 10);



const cars = ["BMW", "Volvo", "Saab", "Ford"];

let text = "";

for (i = 0; cars[i]; i++) {
    text += cars[i] + " ";
}
console.log(text + " ");
//BMW Volvo Saab Ford




const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

for (; cars[i];) {
    text += cars[i] + " ";
    i++;
}
console.log(text + " ");
//BMW Volvo Saab Ford



// Continue 
const cars = ["BMW", "Volvo", "Saab", "Ford"];

let text = "";

for (i = 0; cars[i]; i++) {
    if (cars[i] == 'Volvo') { continue }
    text += cars[i] + " ";
}
console.log(text + " ");
//BMW Saab Ford


// break 
const cars = ["BMW", "Volvo", "Saab", "Ford"];

let text = "";

for (i = 0; cars[i]; i++) {
    if (cars[i] == 'Volvo') { break }
    text += cars[i] + " ";
}
console.log(text + " ");
//BMW



const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = "";

list: {
    text += cars[0] + "\n";
    text += cars[1] + "\n";
    break list;
    text += cars[2] + "\n";
    text += cars[3] + "\n";
}
console.log(text);
/**
 BMW
Volvo

 */