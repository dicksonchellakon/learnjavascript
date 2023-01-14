
// Modules with export and import
export function sayHi(user) {
    console.log(`Hello, ${user}!`);
}

export let user = "Henrich";

//Arrow Functions
export let sum = (a, b) => a + b;
export let sub = (a, b) => a - b;
export let mul = (a, b) => a * b;
export let div = (a, b) => a / b;

export let add = function(a, b) {
    return a + b;
};

export let multiBy2 = n => n * 2;

export let sayMyName = () => console.log("Hello World");

//Objects
export let userObj = new Object(); // "object constructor" syntax
userObj = {
    name : "John",
    age : 39,
    sex : "M",
    isEducated: true,
    "hello world india" : false
}



export let makeUser = (name, age) => {
    return {
      name,
      age,
    };
}
// in Operator
export let empObj = {
    name : "Dickson "
};