// TypeOf operator js
// var test=typeof("What is this?");
// var test=typeof(1);
// var test=typeof(3.14);
// var test=typeof(true);
// var test=typeof(1<2);
// var test=typeof(2.4);
var test=typeof({first:1})
var test=typeof([1,2,3,4])
var test=typeof(function abc(){
    console.log("Abc")
})
console.log(test)


var result = "Hello".indexOf('l');
console.log(result)


var dog = {
    color: "brown",
    height: 30,
    length: 60
};
dog["type"] = "corgi";
console.log(dog)