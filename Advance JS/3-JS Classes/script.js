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