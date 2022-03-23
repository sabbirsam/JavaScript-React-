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