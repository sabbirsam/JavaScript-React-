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