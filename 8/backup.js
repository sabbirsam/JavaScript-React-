/**
 * Litereals
 */
const name = "WPPOOL";

// List all Elements
let text = ""
for (const x of name) {
    text += x + "<br>";
}

document.getElementById("demo").innerHTML = text;

/**
 * 
 */

const latter = ["s", "a", "b", "b", "i", "r"];

let t = "";
for (const c of latter) {
    t += c + "<br>";
}

document.getElementById("sam").innerHTML = t;



/**
 * Litereals Map
 */

const fruits = new Map(
    [
        ["apples", 500],
        ["bananas", 300],
        ["oranges", 200]
    ]
);

let t = "";

for (const x of fruits) {
    t += x + "<br>";
}

document.getElementById("sam").innerHTML = t;

/**
 * Set and size
 */

const letters = new Set(
    ["a", "b", "v", "d"]
);

const p = new Set(
    [
        ["apples", 500],
        ["bananas", 300],
        ["oranges", 200]
    ],

);

document.getElementById("demo").innerHTML = letters.size;
document.getElementById("sam").innerHTML = p.size;



/**
 * Set and size
 */

const letters = new Set(
    ["a", "b", "v", "d"]
);

letters.add("dsm");
letters.add("ds");

document.getElementById("sam").innerHTML = letters.size;

let c = "";

for (const s of letters) {
    c += s + "<br>";
}

document.getElementById("demo").innerHTML = c;



/**
 * another test
 */

const p = new Set(
    [
        ["apples", 500],
        ["bananas", 300],
        ["oranges", 200]
    ]

);
p.add("komola", 400);

document.getElementById("sam").innerHTML = p.size;

let c = "";

for (const s of p) {
    c += s + "<br>";
}

document.getElementById("demo").innerHTML = c;


/**
 * another test
 */

const letters = new Set();

// Create Variables
const a = "aa";
const b = "ba";
const c = "ac";



// Add the Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c);

document.getElementById("demo").innerHTML = letters.size;


let o = "";

for (const s of letters) {
    o += s + "<br>";
}

document.getElementById("sam").innerHTML = o;



/**
 * forEach test
 */

// Create a Set
const letters = new Set(["a", "b", "c"]);

// List all Elements
let text = "";
letters.forEach(function(a) {
    text += a + "<br>";
})

document.getElementById("demo").innerHTML = text;

/**
 * values()' 
 */


const letters = new Set(["a", "b", "c"]);


let text = "";
for (const s of letters.values()) {
    text += s + "<br>";
}
document.getElementById("demo").innerHTML = text;

/**
 * 
 */


const fruits = new Map(
    [
        ["apples", 500],
        ["bananas", 300],
        ["oranges", 200]
    ]
);

document.getElementById("demo").innerHTML = fruits.get("apples");
document.getElementById("sam").innerHTML = fruits.get("bananas");




/**
 * all value get
 */
// Create a Map
const fruits = new Map(
    [
        ["apples", 500],
        ["bananas", 300],
        ["oranges", 200]
    ]
);

let c = "";
for (const z of fruits.values()) {
    c += z + "<br>";
}

document.getElementById("sam").innerHTML = c;

document.getElementById("demo").innerHTML = fruits.get("apples");

/**
 * add value using set Maps' 
 */
// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

document.getElementById("demo").innerHTML = fruits.get("apples");

// Create a Map
const fruits = new Map();

// Set Map Values
fruits.add("apples", 500); // WRONG:  will not work, It need set but for set it need add.
fruits.set("bananas", 300); //Right
fruits.set("oranges", 200);

document.getElementById("demo").innerHTML = fruits.get("apples");

/**
 * add value can be change on Maps' 
 */
// Create a Map
const fruits = new Map([
    ["apple", 500],
    ["banana", 600],
    ["kola", 600]
]);

fruits.set("apple", 600); // value can be change

// Set Map Values


document.getElementById("demo").innerHTML = fruits.get("apple");


/**
 * add value using set Maps' 
 */
// Create a Map
const fruits = new Map([
    ["apple", 500],
    ["banana", 600],
    ["kola", 600]
]);

fruits.set("apple", 600); // value can be change
fruits.delete("banana"); // can delete

// Set Map Values


document.getElementById("demo").innerHTML = fruits.get("banana");



/**
 * add value using set Maps' 
 */
// Create a Map
const fruits = new Map([
    ["apple", 500],
    ["banana", 600],
    ["kola", 600]
]);

fruits.set("apple", 600); // value can be change
fruits.delete("banana"); // can delete

// Set Map Values


document.getElementById("demo").innerHTML = fruits.has("banana"); // false

/**
 * value and entries
 */

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

let text = "";
for (const x of fruits.entries()) { //values or  entries
    text += x + "<br>";
}

document.getElementById("demo").innerHTML = text;