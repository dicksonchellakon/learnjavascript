
//function declaration
function additionZero(varOne, varTwo) {
    return varOne + varTwo
}

//function expression
let additionOne = function(varOne, varTwo) {
    return varOne + varTwo
}

console.log(addition(12,212))

//Arrow function
let additionTwo = (a, b) => a + b;
console.log(additionTwo(100,12300))


//Multiline arrow function
let additionThree = (a, b) => {
    let total = a + b;

    return total
}

console.log(additionThree(100,100))



let objects = {
    "name": "Hello World",
    printName : {
        console.log("Hello")
    }
}