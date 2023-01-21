//import {additionArrow, sayHi} from "./fundamentals.js";

//sayHi("Sachin")

//console.log(additionArrow(5, 66))



//let objOne = new Object()


/*objOne = {
    name: "Sachin",
    location: "Mumbai",
    "hello world": "Yes, Whatsup"
}

console.log(objOne)

console.log(objOne.name)
console.log(objOne.location)

//delete objOne.location

//console.log(objOne["hello world"])*/


//Property value shorthand


/*function displayUser(name, age, location){
    return {
        let : name,
        for: age,
        while: location,
    }
}


let user = displayUser("Sachin", 55, "Mumbai")
console.log(user.for)*


let user = { name: "John", age: 30 };

*/
//Property exist using ..in

let user = { name: "John", age: 30 , location: 'Chennai'};

/*console.log("age" in user)
console.log("location" in user)

if("location" in user){
    console.log("It is exist")
}
else {
    console.log("It is not exist")
}*/

for (let key in user) {
    console.log(key + " >> " + user[key])
}