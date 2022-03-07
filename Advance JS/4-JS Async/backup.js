/**
 * JavaScript Callbacks
 */

function myFirstFunction() {
    mySecodFunction();
    console.log("called mySecodFunction");
}

function mySecodFunction() {
    console.log("End");
}

function myDisplay() {
    myFirstFunction();
    console.log("called myFirstFunction");
}
console.log(myDisplay());


/**
 * JavaScript Callbacks
 */

/**
 * 
 */

function myDisplayer(some) {
    console.log(some);
}

// below two is called the first function 
function myFirst() {
    myDisplayer("Hello");
}

function mySecond() {
    myDisplayer("Goodbye");
}

myFirst(); // Hello
mySecond(); //goodbye

//---------------------

function myDisplayer(some) {
    console.log(some);
}

// below two is called the first function 
function myFirst() {
    myDisplayer("Hello");
}

function mySecond() {
    myDisplayer("Goodbye");
}

mySecond(); //goodbye
myFirst(); // Hello
myDisplayer("some");

/**
 * JavaScript Callbacks but Sequence Control or control with my wish
 */

function DisplayTotal(total) {
    console.log("\nso Total is:" + total);
}

function addSum(num1, num2) {
    let c = num1 + num2;

    return c;
}

let b = addSum(2, 2);
console.log(b);

DisplayTotal(b);

// here i used a function then use that function result to print through another


/**
 * 2nd
 * JavaScript Callbacks but Sequence Control or control with my wish
 */

function display(disp) {
    console.log(disp);
}

function sum(a, b) {
    let c = a + b;
    display(c);
    // return c;
}

sum(1, 1);

// or 

/**
 * 2nd
 * JavaScript Callbacks used function as a parameter
 */

function display(disp) {
    console.log(disp);
}

function sum(a, b, show) {
    let c = a + b;
    show(c);
    // return c;
}

sum(1, 1, display); //2


/**
 * 
 * Asynchronous JavaScript
 */

function printRes(res) {
    console.log(res);
}

function addition(num1, num2, fun_call) {
    let c = num1 + num2;
    fun_call(c);
}

addition(1, 2, printRes);


/**
 * 
 * Asynchronous JavaScript 1
 */

function myFunction() {
    console.log("I love You !!");
}

setTimeout(myFunction, 3000); // It will run after 3 sec

/**
 * 
 * Asynchronous JavaScript 2
 */

function myFunction(value) {
    console.log(value);
}

setTimeout(function() { myFunction("I love you ") }, 3000); // It will run after 3 sec

/**
 * 
 * Asynchronous JavaScript
 */

setInterval(myFunction, 1000); // it called automatically always after certine time

function myFunction() {
    let d = new Date();
    console.log(
        d.getHours() + ":" +
        d.getMinutes() + ":" +
        d.getSeconds());
}


setInterval(myFunction, 1000); //1 sec

function myFunction() {
    let d = new Date();
    console.log(
        d.getHours() + ":" +
        d.getMinutes() + ":" +
        d.getSeconds()
    );
}


/**
 * 
 *Waiting for Files
 */


function display(content) {
    document.getElementById("demo").innerHTML = content;
}

function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "https://www.google.com/");
    req.onload = function() {
        if (req.status == 200) {
            myCallback(this.responseText);
            console.log("Found");
        } else {
            myCallback("Error: " + req.status);
            console.log("Error");
        }
    }
    req.send();
}
getFile(display);


/**
 * 
 *Waiting for Files
 */


function display(content) {
    console.log(content);
}

function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "https://www.google.com/");
    req.onload = function() {
        if (req.status == 200) {
            myCallback(this.responseText);
            console.log("Found");
        } else {
            myCallback("Error: " + req.status);
            console.log("Error");
        }
    }
    req.send();
}
getFile(display);


/**
 * 
 * JavaScript Promises
 */

function myDisplayer(some) {
    console.log(some);
}

let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;

    // The producing code (this may take some time)

    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise.then(
    function(value) { myDisplayer(value); },
    function(error) { myDisplayer(error); }
);

/**
 * 
 * JavaScript Promises
 */

function result(vale) {
    console.log(vale);
}


let myPromise = new Promise(function(accept, reject) {
    let x = 0;

    if (x == 10) {
        accept("Accepted and run successfuly..")
    } else {
        reject("Not work and rejected");
    }
});

result(myPromise);


/**
 * 
 * JavaScript Promises with clean result
 */

function result(vale) {
    console.log(vale);
}


let myPromise = new Promise(function(accept, reject) {
    let x = 10;

    if (x == 10) {
        accept("Accepted and run successfuly..")
    } else {
        reject("Not work and rejected");
    }
});

// result(myPromise);

// myPromise.then();
myPromise.then(
    function(value) {
        result(value);
    },

    function(error) {
        result(error);
    }
);