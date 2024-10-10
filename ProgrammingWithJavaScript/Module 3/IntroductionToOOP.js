var skills=4;
var hardHork=100;
function success(skills,hardHork){
    console.log("Sucees is yours "+skills*hardHork)
}

success(skills,hardHork);


// OOP
var purchase1={
    shoes:100,
    stateTax:1.2,
    totalPrice:function(){
        var calculation=purchase1.shoes*purchase1.stateTax;
        console.log("Total price:",calculation);
    }
}

purchase1.totalPrice();
