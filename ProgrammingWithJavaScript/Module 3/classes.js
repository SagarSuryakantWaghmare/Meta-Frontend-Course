// create your classes here
class Success{
    hardwork(){
        console.log("Never give me on your dreams");
    }
}
class  Marks extends Success{
    score(){
        console.log("Try to get highest marks");
    }
}
class Skills extends Marks{
    skill(){
        console.log("Be a skillful")
    }
}
var sagar=new Skills();
sagar.hardwork();
sagar.score();
sagar.skill();

var ultima={
    skill:true,
    score:90,
    communicate:true
}
 
var sagar=Object.create(ultima);
console.log("Sagar:",sagar)
console.log("Sagar has skills:",sagar.skill)
console.log("Sagar has max score:",sagar.score)
console.log("Sagar has communicate:",sagar.communicate)


class Person {
    sayHello() {
        console.log("Hello");
    }
}

class Friend extends Person {
    sayHello() {
        console.log("Hey");
    }
}

var result = new Friend();
result.sayHello();
