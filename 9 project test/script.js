// Class

class Car {

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    age(x) {
        return x - this.year;
    }

}

let date = new Date();
let c = date.getFullYear();


let myCar = new Car("Audi", 2020);

console.log(myCar.age(c));

/**
Car { name: 'Audi', year: 2020 }
Audi
2020
 */