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

Object.defineProperty()

console.log(person.name); //Ahmed