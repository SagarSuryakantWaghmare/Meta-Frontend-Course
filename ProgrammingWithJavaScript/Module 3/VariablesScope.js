// After es6
//  we use the let ,const

// in es5 we use the var 

// Comparing the var, let and const

// var user="Sagar";
// var user="Shraddha";
// var user="Krishna";
// console.log(user)

// Const declaration with the given input
const user="Sagar"
console.log(user)
// user="Krishna"

// This gives the user for this user already defined
// console.log(user)


function meal(animal) {
    animal.food = animal.food + 10;
}

var dog = {
    food: 10
};
meal(dog);
meal(dog);

console.log(dog.food);


function two() {
    return 2;
}

function one() {
    return 1;
}

function calculate(initialValue, incrementValue) {
    return initialValue() + incrementValue() + incrementValue();
}

console.log(calculate(two, one));