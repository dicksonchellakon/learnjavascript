
import {empObj, makeUser, userObj, sayMyName, multiBy2, sum, div, sub, mul, sayHi, user}  from "./fundamentals.js";

console.log(sayHi)
sayHi("John Peter")
console.log(user)

console.log(sum(5, 5))
console.log(sub(10, 5))
console.log(mul(5, 5))
console.log(div(10, 5))

console.log(multiBy2(10))

sayMyName()

//Objects

console.log(userObj)
delete userObj.isEducated
console.log(userObj)
console.log(userObj["hello world india"])

let profile = makeUser("John", 50);
console.log(profile.name); // John

console.log( "**********in Operator**********");
console.log( "age" in empObj );


console.log( "**********for..in Operator**********");
for (let key in userObj) {
    console.log( key + " >> " + userObj[key]); 
}