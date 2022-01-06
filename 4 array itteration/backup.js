const Number = [14, 85, 45, 78, 12, 15]
let txt = "";

Number.forEach(myFunction);


function myFunction(value, index, array) {
    txt += index + ": " + value + "\n";

    // txt += array + "\n";


}
console.log(txt);



/**
 * 
 */
const Number = [14, 85, 45, 78, 12, 15]
const num = Number.map(myFunction)



function myFunction(value, index, array) {
    return value * 2;

}
console.log(num);


/**
 * 
 */
const Numbers = ["am", "sa", "pm"]
const num = Numbers.indexOf("pm");
console.log(num + 1);

/**
 * 
 */

const fruits = ["Banana", "Orange", "Apple", "Mango"];

const keys = fruits.keys();

// console.log(keys);
for (let i of keys) {
    console.log(i + " :" + fruits[i]);

}
/**
 * 
 */


const fruits = ["Banana", "Orange", "Apple", "Mango"];

let c = fruits.includes("Orange");
console.log(c);

/**
 * 
 */


/**
 * 
 */