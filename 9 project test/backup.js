// RegExp
let text = "Visit W3Schools!";
let n = text.search(/w3Schools/i);
let mn = text.search("W3Schools");
console.log(n);
console.log(mn);
//6
//6

// ======================================
// Replace 
let text = "Visit W3Schools!";
let text2 = "Visit W3Schools!";
let n = text.replace(/w3Schools/i, "Sam");
let mn = text2.replace("W3Schools", "ASM");
console.log(n);
console.log(mn);
// Visit Sam!
// Visit ASM!


// ======================================
// match  
let text = "Visit W3Schools";
let result = text.match(/w3schools/i);
console.log(result);

// [ 'W3Schools', index: 6, input: 'Visit W3Schools', groups: undefined ]


let text = "Visitis W3Schools is w3schools w3school is w3SchOOls";
let result = text.match(/is/g);
console.log(result);


// [ 'is', 'is', 'is', 'is' ]

let text = "Is thish all thereh is?";
let result = text.match(/[h]/g);
console.log(result);

let text = "Is thish all thereh is?";
let result = text.match(/[abch]/g);
console.log(result); //[ 'h', 'h', 'a', 'h', 'h' ]


let text = "123456789";
let result = text.match(/[1-4]/g);
console.log(result); //[ '1', '2', '3', '4' ]

let text = "re, ed , green, red, green, gren, gr, blue, yellow";
let result = text.match(/(red|green)/g);
console.log(result); //[ 'green', 'red', 'green' ]



// ======================================
// Find digit  
let text = "Give 100% 25 sabbir 14!";
let result = text.match(/\d/g);
console.log(result); //[ 'green', 'red', 'green' ]

/**
[
  '1', '0', '0',
  '2', '5', '1',
  '4'
]

 */

// ======================================
// Try Catch 


try {
    alert("Hello sabbir, life is a test, and you're the candidate so need to work harder");
} catch (e) {
    document.getElementById("demo").innerHTML = e.message;
}




try {
    adddlert("Hello sabbir, life is a test, and you're the candidate so need to work harder");
} catch (e) {
    document.getElementById("demo1").innerHTML = e.message;
}



// ======================================

function myFunction() {

    // console.log(d);
    const message = document.getElementById("demo2");
    const message2 = document.getElementById("demo3");
    message.innerHTML = "";

    let d = document.getElementById("demo").value;


    try {
        if (d < 10) throw "less than 10";
        if (d > 10) throw "large than 10";
        if (d == 10 || d < 0) throw "eqal and less than 0 number can be access";

    } catch (e) {
        message.innerHTML = e.name;
    } finally {
        message2.innerHTML = "Okkkk finally its working "
    }
}



// ======================================


let x = 5;

try {
    x = y + 1;
} catch (err) {
    document.getElementById("demo").innerHTML = err.name;
}




// ================  Scope  ==================

function myFunction() {

    // console.log(d);
    const message = document.getElementById("demo2");
    const message2 = document.getElementById("demo3");
    message.innerHTML = "";

    let d = document.getElementById("demo").value;


    try {
        if (d < 10) throw "less than 10";
        if (d > 10) throw "large than 10";
        if (d == 10 || d < 0) throw "eqal and less than 0 number can be access";

    } catch (e) {
        message.innerHTML = e;
    } finally {
        message2.innerHTML = "Okkkk finally its working "
    }
}



let x = 5;

try {
    x = y + 1;
} catch (err) {
    document.getElementById("demo").innerHTML = err.name;
}


// ======================================
// ======================================
// ======================================
// ======================================
// ======================================