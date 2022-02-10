var person = {
    firstName: "John",
    lastName: "Doe",
    language: "NO"
};
// Change a Property:
Object.defineProperty(person, "language", {
    get: function() { return language },
    set: function(value) { language = value.toUpperCase() }
});
// Change language
person.language = "en";
// Display language


console.log(person.language); //EN

// Function Bind()

const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName: "Hege",
    lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);