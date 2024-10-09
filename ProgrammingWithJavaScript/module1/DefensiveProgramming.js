function letterFinder(word,match){
    var cond1=typeof(word)=='string'&&word.length>=2;
    var cond2=typeof(match)=='string'&&match.length==1;
    if(cond1&&cond2){
        for(var i=0;i<word.length;i++){
            if(word[i]==match){
                console.log("Found the ",match," at",i);
            }
            else{
                console.log("----No match found at ",i)
            }
        }
    }
    else{
        console.log("Please pass correct arguments to the function")
    }
}
letterFinder([],[])
letterFinder("Sagar","S")

var result = null;
console.log(result);

try {
    throw new Error();
    console.log('Hello');
  } catch(err) {
    console.log('Goodbye');
  }
  var str = "Hello";
  console.log(str.match("jello"));

  try {
    Number(5).toPrecision(300)
    } catch(e) {
    console.log("There was an error")
    }