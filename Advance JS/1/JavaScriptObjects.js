/**
 * Nested Arrays and Objects
 */

// const address = {
//     name: "Sabbir",
//     age: 13,
//     some_address: [
//         {}, {}
//     ]
// }

const address = {
    name: "Sabbir",
    age: 13,
    some_address: [{
            name: "Dhaka",
            division: ["Khulna", "Rajshi"]
        },
        {
            name: "Rangpur",
            division: ["sam", "amm"]
        }
    ]
}

let y = "";
let c = "";
for (let x in address.some_address) {

    y += address.some_address[x].name;
    for (let k in address.some_address[x].division) {
        c += address.some_address[x].division[k];
    }
}
console.log(y); //Khulna,Rajshikhulla,Rajshi
console.log(c); //