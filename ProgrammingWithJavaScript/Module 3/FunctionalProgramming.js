var currencyOne=100;
var currencyTwo=0;
var exhangeRate=1.2;
function covertCurrency(amount,rate){
    return amount*rate;
}

currencyTwo=covertCurrency(currencyOne,exhangeRate);
console.log(currencyTwo)

// Function calling and recursion
let counter=4;
function ex(){
    console.log(counter)
    counter-=1;
    if(counter==0) return ;
    ex();
}