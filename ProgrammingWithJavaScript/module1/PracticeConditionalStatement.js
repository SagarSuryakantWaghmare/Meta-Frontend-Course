var age=10;
if(age>=65){
    console.log("You get your income from your pension");
}
else if(age<65&&age>=18){
    console.log("Each month you get a salary");
}
else if(age<18){
    console.log("You get an allowance");
}
else{
    console.log("The value of the age variable is not numerical");
}

// switch statements

var day="Sunday";
switch(day){
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Today is not Monday or Tuesday");
}