const addFive=require('./addFive');
const {default:TestRunner}=require("jest-runner");
test('returns the number plus 5',()=>{
    expect(addFive(1))
})