//Method is used to (like add or deleting an HTML element).
//Property is used to changing the content of an element
let c = document.getElementById("demo_id"); // Its a method
c.innerHTML = "Hello world"; //property.

//Method is used to (like add or deleting an HTML element).
//Property is used to changing the content of an element
let c = document.getElementById("demo_id"); // Its a method
c.innerHTML = "Hello world"; //property.

/**
 * Finding HTML Elements
 * 
 */

document.getElementById(name);
document.getElementsByTagName(name);
document.getElementsByClassName(name);

/**
 * Changing HTML Elements
 * element. = document.getElementsByClassName(name);
 */
//  element   .attribute =
//     .innerHTML =
//     .style.property =

// Method : setAttribute(attribue. value)

/**
 * Adding and Deleting Elements
 */
document.createElement();
document.removeChild();
document.appendChild();
document.replaceChild();
document.write();
/**
 * Adding Events Handlers
 */
document.getElementById(id).onclick = function() {}


console.log(document.baseURI);
console.log(document.body);
console.log(document.cookie);
console.log(document.doctype);
console.log(document.documentElement);
console.log(document.images);
console.log(document.scripts);
console.log(document.title);
console.log(document.URL);



var c = document.querySelectorAll('div.name');
console.log(c);
var l = document.getElementById("demo_id").innerHTML = c[0].innerHTML;


var l = document.forms["frm1"];
console.log(l.elements[0]); // <input type="text" name="fname" value="Donald">

var l = document.forms["frm1"];
console.log(l.elements[0].value); // "Donald">


/**
document.anchors
document.body
document.documentElement
document.embeds
                          document.forms
document.head
document.images
document.links
document.scripts
document.title

 */
var l = document.forms["frm1"];
let t = "";

for (let i = 0; i < l.length; i++) {
    t += l.elements[i].value + "\n";
}
document.getElementById("demo_id").innerHTML = t; // all value

for (let i = 0; i < l.length; i++) {
    t += l.elements[i].type + "\n";
}
document.getElementById("demo_id").innerHTML = t; // all value


for (let i = 0; i < l.length; i++) {
    t += l.elements[i].name + "\n";
}
document.getElementById("demo_id").innerHTML = t; // all value


var c = document.getElementById("my_img").src = "y.png";


document.write("OKKK")

/**
        <form action="" name="myFormName" onsubmit="validateForm()" method="post">
            <input type="text" name="fname" id="">
            <input type="text" name="lname" id="">
            <input type="submit" value="Submit">
        </form>

 * @retu
 */

function validateForm() {
    event.preventDefault(); // need to use 
    let x = document.forms["myFormName"]["fname"].value;

    if (x == "") {
        alert("Name must be filled out");

    }
    if (isNaN(x)) {
        alert("Please input text");
    }
    // return false;

}


function validateForm() {
    event.preventDefault(); // need to use 
    let x = document.forms["myFormName"]["fname"].value;
    let c = document.getElementById("s").value;

    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    if (isNaN(c)) {
        alert("Please write number");
        return false;
    }

}


/**
 * 
 * JavaScript HTML DOM - Changing CSS
 */

var c = document.getElementById("name");
c.style.color = "blue";

var c = document.getElementById("name");
c.style.color = "blue";
c.style.background = "red";
c.style.fontSize = "54px";



{ /* <button onclick="myFunc();">Click me</button> */ }

function myFunc() {
    var c = document.getElementById("name");
    c.style.color = "blue";
    c.style.background = "red";
    c.style.fontSize = "54px";
}







{
    /* <div id="container">
    <div id="animate"></div>
    </div>
    <button onclick="myFunc();">Click me</button> */
}

function myFunc() {

    let id = null;
    const c = document.getElementById("animate");
    let pos = 0;

    clearInterval(id);
    id = setInterval(frame, 5);

    function frame() {
        if (pos == 120) {
            clearInterval(id);
        } else {
            pos++;
            console.log(pos);
            c.style.top = pos + "px";
            c.style.left = pos + "px";
        }

    }

}

{
    /* <div class="s" onmouseover="myMHover(this);" onmouseout="myMOut(this);">Mouse Hover and out</div>
     */
}

onload = "mymessage()"
onmousedown
onmouseover
onmouseout
onfocus = "myFunction(this)";

function myMHover(obj) {
    const c = document.getElementById("animate");

    c.style.top = "30px";
    c.style.right = "60";
    obj.innerHTML = "Thank You"
}

function myMOut(obj) {
    const c = document.getElementById("animate");
    c.style.top = "10px";
    c.style.right = "20";
    obj.innerHTML = "Mouse Over Me"
}



{ /* <button id="date_show">Click me</button> */ }
let c = document.getElementById("date_show");
c.addEventListener("click", myFunction); // mousedown , click

function myFunction() {
    document.getElementById("animate").innerHTML = Date();
}


let c = document.getElementById("date_show");
c.addEventListener("click", function() {
    alert("Hello");
});




let c = document.getElementById("date_show");
c.addEventListener("mouseover", myFunction);
c.addEventListener("click", mySecondFunction);
c.addEventListener("mouseout", myThirdFunction);

function myFunction() {
    document.getElementById("animate").innerHTML += "Moused over!<br>";
}

function mySecondFunction() {
    document.getElementById("animate").innerHTML += "Clicked!<br>";
}

function myThirdFunction() {
    document.getElementById("animate").innerHTML += "Moused out!<br>";
}



window.addEventListener("resize", function() {
    const c = document.getElementById("date_show");
    c.innerHTML = Math.random();
});


/**
 * Mouse Move
 */
document.getElementById("myDIV").addEventListener("mousemove", myFunction);

function myFunction() {
    document.getElementById("demo").innerHTML = Math.random();
}

function removeHandler() {
    document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
}

/**
 * 
 * JavaScript HTML DOM Navigation
 */


document.getElementById("id01").innerHTML = document.body.innerHTML;

document.getElementById("id01").innerHTML = document.getElementById("id02").nodeName; // show the tag // p , h1, h4

document.getElementById("id01").innerHTML = document.getElementById("id02").nodeType;


/**
 * 
 * JavaScript HTML DOM Elements (Nodes)
 */
/**
 *  createElement 
 createTextNode

 appendChild
 */


const pera = document.createElement("p");
const node = document.createTextNode("New and Inside P tag, generated from JS");

pera.appendChild(node);

const element = document.getElementById("id01");
element.appendChild(pera); // last e p tag e append kore end


/**
 * 
 */

const pera = document.createElement("p");
const node = document.createTextNode("New and Inside P tag, generated from JS");

pera.appendChild(node);

const element = document.getElementById("id01");
const etarAge = document.getElementById("id02");
// element.appendChild(pera); // last e add hcce
// element.insertBefore(); kon element ar kar age 
element.insertBefore(pera, etarAge);

/**
 * Remove element
 */

const etarRemove = document.getElementById("id02");

etarRemove.remove();


/**
 * 
 * JavaScript Removing a Child Node
 */

const parent = document.getElementById("id01");
const child = document.getElementById("id04");

parent.removeChild(child);


/**
 * 
 * JavaScript Replacing HTML Elements 
 */

const newP = document.createElement("p");
const newPvalue = document.createTextNode("This is new");

newP.append(newPvalue);

const parent = document.getElementById("id01");
const child = document.getElementById("id02");

parent.replaceChild(newP, child) // kake r kar jaygy