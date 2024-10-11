// an object is not iterable. 
// Contrary to object,arrays are iterable
const colors=['red','orange','yellow','white']
for(var color of colors){
    console.log(color)
}
const car={
    speed:200,
    color:"orange"
}
console.log(Object.keys(car))
console.log(Object.entries(car))

let greet="Hello"
let name="Shraddha"
console.log(`${greet} ${name}`)


// In the es5 there is no multi-line
// Es6:template literals
let multiLine=`
Using ES6
backticks,
multi-line
strings are 
possible`
console.log(multiLine)