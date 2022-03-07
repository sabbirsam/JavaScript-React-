class MyInfo {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// const myObj = new MyInfo("sabbir", 14);

/**
 * Class with Constructor
 */
class OK {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const myObjs = new OK("sabbir", 14);
document.getElementById("name2").innerHTML = myObjs.name + " " + myObjs.age;

/**
 * 
 */
// let date = new Date();
// let c = date.getFullYear() - this.year; //2022  
// console.log(c);

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    Age() {
        let c = new Date();
        return c.getFullYear() - this.year;
    }
}

const myObj = new Car("Ford", 2014);

console.log(myObj.Age());

/**
 * Inheritance
 */

/**
 * Inheritance
 */

class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.carname;
    }
}

class Model extends Car {
    constructor(brand, mod) {
        super(brand);

        this.model = mod;
    }
    show() {
        return this.present() + " It is a" + this.model;
    }

}

let myCar = new Model("BMW", "Anyanme");
console.log(myCar.show()); //I have a BMW It is aAnyanme



/**
 * Inheritance
 */
// get 
class Car {
    constructor(brand) {
        this.brandName = brand;
    }
    get CarName() {
        return this.brandName;
    }

    set CarName(x) {
        this.brandName = x;
    }
}

let myCar = new Car("AUdi");
console.log(myCar.CarName);


// set 


class Car {
    constructor(brand) {
        this.brandName = brand;
    }
    get CarName() {
        return this.brandName;
    }

    set CarName(x) {
        this.brandName = x;
    }
}

let myCar = new Car("AUdi");
myCar.CarName = "sam";
console.log(myCar.CarName);

/**
 * JavaScript Static Methods
 */
//

class Mycar {
    constructor(brand) {
        this.MyBrnad = brand;

    }

    static print() {
        return "Hello ";
    }
}

let car = new Mycar("Ford");
console.log(Mycar.print());


/**
 * JavaScript Static Methods
 */
//

class Mycar {
    constructor(brand) {
        this.MyBrnad = brand;

    }

    static print(x) {
        return "Hello " + x.MyBrnad;
    }
}

let car = new Mycar("Ford");
console.log(Mycar.print(car));


class Mycar {
    constructor(brand) {
        this.MyBrnad = brand;

    }

    static print(x) {
        return "Hello " + x.MyBrnad;
    }
}

let car = new Mycar("Ford");
console.log(Mycar.print(car));