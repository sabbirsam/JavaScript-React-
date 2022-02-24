function Person(first, last, age, eye) {
    this.FirstName = first;
    this.LastName = last;
    this.age = age;
    this.eye = eye;
    this.lan = "Bangla"
};

const MyInfo = new Person("sabbir", "ahmed", 15, "Brown");

MyInfo.name = function() {
    return this.FirstName + " " + this.LastName;
}

console.log(MyInfo);