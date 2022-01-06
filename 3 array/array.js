const person = [{
        name: "Sabbir Ahmed",
        age: "25"
    },
    {
        name: "Aam",
        age: "24"
    },
    {
        name: "Ahmed",
        age: "20"
    }
];

const cars = [{
        type: "Volvo",
        year: 2016
    },
    {
        type: "Saab",
        year: 2001
    },
    {
        type: "BMW",
        year: 2010
    }
]

let a = person.sort(function(a, b) { return a.name - b.name });

console.log(a);