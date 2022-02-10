// https: //www.w3schools.com/js/js_versions.asp

// Getter 
var person = {
    name: "sabbir",
    age: 15,
    get Info() {
        return this.name + " " + this.age;
    }
}

console.log(person.Info);



// setter

var person = {
    name: "sabbir",
    age: 15,
    get updateInfo() {
        return this.name;
    },

    set updateInfo(n) {
        this.name = n;


    }

};

person.updateInfo = "sam";



console.log(person.name); //sam


var person = {
    name: "sabbir",
    age: 15,
    get updateInfo() {
        return this.name;
    },

    set updateInfo(n) {
        this.name = n.toUpperCase();


    }

};

person.updateInfo = "sam";



console.log(person.name); //SAM

// Object.defineProperty()===========================


var person = {
    name: "sabbir",
    age: 15,
};

// Object.defineProperties(person, "name", {});
Object.defineProperty(person, "name", {
    value: "Ahmed",
    writable: true,
    enumerable: true,
    configurable: true
});



console.log(person.name); //Ahmed











// ==================
var person = {
    name: "sabbir",
    age: 15,
};

// Object.defineProperty(person, "name", {});
Object.defineProperty(person, "name", {
    value: "Ahmed",
    writable: true,
    enumerable: true,
    configurable: true
});

var t = "";
for (var x in person) {
    t += person[x] + " ";
}

console.log(t); //Ahmed 15


// Setter and getter with  Object.defineProperty
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

// Function Bind() ====================================

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