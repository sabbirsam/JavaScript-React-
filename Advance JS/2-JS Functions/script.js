/**
 * Simulate a Max Method on Arrays
 * Bind Method fix this issues
 */

const person = {
    firstName: "Sabbir",
    lastName: "Ahmed",
    FullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
const member = {
    firstName: "Jamal",
    lastName: "Kamal"
}

let c = person.FullName.bind(member);
setTimeout(c, 3000)
console.log(c()); // Jamal Kamal 
//c ()