function addTwoNumber(a,b){
    return a+b;
}
console.log(addTwoNumber(4,2))//6
// we simple call it by 
// function name();

//  Practicing with functions
function letterFinder(word,match){
    for (let i = 0; i < word.length; i++) {
        if(word[i]==match){
            console.log('Found the', match, 'at', i);
        }
        else{
            console.log('---No match found at', i);
        }
    }

}
letterFinder("shraddha","a")