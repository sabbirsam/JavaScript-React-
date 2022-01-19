/**
 * add value using set Maps' 
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




/**
 * 
 */