const person = {
    firstName: "John",
    lastName: "Doe",
    age: 46
};

console.log(person.firstName);




const person = new Array();

person["name"] = "sabbir";

console.log(person);
//[ name: 'sabbir' ]


const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;

console.log(length); // arraylength

let a = fruits[fruits.length - 1];
console.log(a);


const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;

for (let i = 0; i < length; i++) {
    console.log(fruits[i]);

}
/**
 * Banana
Orange
Apple
Mango
 */


const fruits = ["Banana", "Orange", "Apple", "Mango"];
const reversed = fruits.reverse();
console.log(reversed);
//[ 'Mango', 'Apple', 'Orange', 'Banana' ]



const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon"); // Adds a new element (Lemon) to fruits

console.log(fruits);



const any = ['askdlj', 'dsafb', 'sdfc'];

any.forEach(element => console.log(element));



const any = ['askdlj', 'dsafb', 'sdfc'];
any.forEach(MyFunc);


function MyFunc(vale) {
    console.log(vale)
}


const as = ["sabbir", "19", "Bangladesh"];
// let fLen = as.length;

text = "<ul>";
for (let i = 0; i < as.length; i++) {

    text += "<li>" + as[i] + "</li>";

}
text += "</ul>"
document.getElementById("sam").innerHTML = text;



const as = ["sabbir", "19", "Bangladesh"];

let text = "<ul>";
as.forEach(muFunction);
text += "</ul>";
document.getElementById("sam").innerHTML = text;

function muFunction(value) {
    text += "<li>" + value + "</li>";
}



const as = ["sabbir", "19", "Bangladesh"];
// as.push("afe");
as[as.length] = "sam";
as[as.length] = "afe";

let text = "<ul>";
as.forEach(muFunction);
text += "</ul>";

document.getElementById("sam").innerHTML = text;

function muFunction(value) {
    text += "<li>" + value + "</li>";
}


const as = ["sabbir", "19", "Bangladesh"];
// as.push("sam");//ebd thek push korbe
// as.pop(); //end pop out korbe
// as.shift(); // remove first element
// as.unshift("ahmed"); //add from first 
// delete as[0]; //remove but removed one is undefined
// as.shift();// best way to remove element from array

document.getElementById("sam").innerHTML = as.join("*");
console.log(as[0]);







// const as = ["sabbir", "19", "Bangladesh"];
// const bb = ["ahmed", "19", "India"];
// let c = as.concat(bb)
// document.getElementById("sam").innerHTML = c + " AS:> " + as + " BB:> " + bb;

// const as = ["sabbir", "19", "Bangladesh"];
// document.getElementById("sam").innerHTML = as.concat("Jamuna"); // add from end

const as = ["sabbir", "19", "Bangladesh"];
document.getElementById("sam").innerHTML = as // add from end

as.splice(1, 0, "sam", "sawwa");

document.getElementById("sams").innerHTML = as // add from end



// shorting 

const fruits = ["25", "100", "35", "15", "10000"];
fruits.sort(function(a, b) {
    console.log(a + " {}");
    console.log(b + " <>");

    console.log(a - b);
    return a - b
});
console.log(fruits);



const person = ["25", "1000", "100", "70", "40"];

let c = person.length - 1;

for (let i = c; i >= 0; i--) {
    // console.log(person[i]);
    let j = Math.floor(Math.random() * i);

    let k = person[i];

    person[i] = person[j];
    person[j] = k;

    console.log(person[j]);

    // console.log(j);
    // console.log(k);

}

console.log(person);





const person = ["25", "985", "100", "70", "40"];

console.log(Math.max.apply(null, person));



function myFunction(arr) {
    return Math.max.apply(null, arr);
}

console.log(myFunction(person));


console.log(Math.max.apply(null, person));
console.log(Math.max(1, 2, 3));

console.log(Math.min.apply(null, person));
console.log(Math.min(1, 2, 3));



const person = ["25", "985", "100", "70", "40"];


console.log(Math.max.apply(null, person));
console.log(Math.max(1, 2, 3));

console.log(Math.min.apply(null, person));
console.log(Math.min(1, 2, 3));



// function myFunction(arr) {
//     return Math.max.apply(null, arr);
// }

// console.log(myFunction(person));



const person = [{
        name: "Sabbir Ahmed",
        age: "25"
    },
    {
        name: "Aam",
        age: "24"
    },
    {
        name: "Ahmed",
        age: "20"
    }
];

const cars = [{
        type: "Volvo",
        year: 2016
    },
    {
        type: "Saab",
        year: 2001
    },
    {
        type: "BMW",
        year: 2010
    }
]

let a = person.sort(function(a, b) { return a.name - b.name });

console.log(a);