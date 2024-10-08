var Shraddha={
    name:"Shraddha",
    age:20,
    address:"Aurangabad",
    skills:"Devops",
    hobbies:"Travelling,Shopping",
    bestFreind:"Sagar"
}
console.log(Shraddha.bestFreind);
console.log(Shraddha.age);
console.log(Shraddha.skills);
console.log(Shraddha.address);

// Arrays are Objects

function arrayBuilder(one,two,three){
    var arr=[];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}
arrayBuilder("Apple","Pear","plum");

// Math object cheat sheet

// Number of constants
console.log(Math.PI)
console.log(Math.E)
console.log(Math.SQRT2)

// Rounding methods
console.log(Math.ceil(4.2))
console.log(Math.floor(4.2))
console.log(Math.round(4.9))
console.log(Math.trunc(4.2))

// Random method
var decimal=Math.random();
console.log(decimal);
console.log(Math.ceil(decimal*10));


// Objects method
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()