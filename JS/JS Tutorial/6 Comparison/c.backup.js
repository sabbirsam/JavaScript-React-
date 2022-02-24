var age = 20;
let vot = Boolean(age < 18) ? "To young for vot" : "Please registered";
console.log(vot);
//variablename = (condition) ? value1:value2

var age = 20;
let vot = Boolean(2 < 12) ? "To young for vot" : "Please registered";
let vott = (2 < 12) ? "To young for vot" : "Please registered";
console.log(vot);
console.log(vott);


let vott = ("2" === 2);
console.log(vott);
//variablename = (condition) ? value1:value


age = 19;

a = Number(age);
// console.log(a);

if (isNaN(a)) {
    vot = "Input valid number";
} else {
    vot = (a > 18) ? "Please registered first" : "Too young";
}
console.log(vot);



/**
 * 
 */

function myVoteReg() {
    let votable;
    age = Number(document.getElementById("age").value);
    if (isNaN(age)) {
        votable = "input number is not valid";
    } else if (age > 0 && age < 30) {
        votable = (age > 15) ? "Good age, You can registered" : "Sorry age is not enough";
    } else {
        votable = "can not registered";
    }

    document.getElementById("sam").innerHTML = votable
}



function myVoteReg() {
    let votable;
    age = document.getElementById("age").value;
    if (isNaN(age)) {
        votable = "input number is not valid";
    } else if (age > 0 && age < 30) {
        votable = Boolean(age > 15) ? "Good age, You can registered" : "Sorry age is not enough";
    } else {
        votable = "Too old";
    }

    document.getElementById("sam").innerHTML = votable
}



/**
 * 
 */
function myVoteReg() {
    let day;
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";

        default:
            day = "Invalid";
    }

    document.getElementById("sam").innerHTML = "Today is " + day;
    // console.log(day);

}

myVoteReg();