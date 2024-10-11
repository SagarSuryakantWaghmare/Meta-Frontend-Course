// Three dots
//Spread operator
let top=[
    "Sagar",
    "Shraddha",
    "Krishan",
    "Nikhil"
]

console.log(...top)

// Rest operator
const top2=[
    "Sagar",
    "Shraddha"
]

const meal = ["soup", "steak", "ice cream"]
let [starter] = meal;
console.log(starter);


let obj = {
    key: 1,
    value: 4
};

let output = { ...obj };
output.value -= obj.key;

console.log(output.value);


function count(...basket) {
    console.log(basket.length)
}

count(10, 9, 8, 7, 6);
