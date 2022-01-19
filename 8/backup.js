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