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
 * 
 */