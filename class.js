
/*class Emp {
    
    constructor(empName, empAge) {
        this.empName = empName
        this.empAge = empAge
    }

    displayEmp(name, age) {
        this.empName = name
        this.empAge = age
        console.log(this.empName +' >> '+ this.empAge)
    }
}

let objEmp = new Emp("John", 34)
objEmp.displayEmp('Peter', 44)
objEmp.displayEmp('Heter', 34)
objEmp.displayEmp('Peter323', 44)
objEmp.displayEmp('Heter2323', 34)*/
/*
class User {
    constructor(name) { this.name = name; }
    sayHi() { console.log(this.name); }
  }
  
  // class is a function
  console.log(typeof User); // function
  
  // ...or, more precisely, the constructor method
  console.log(User === User.prototype.constructor); // true
  
  // The methods are in User.prototype, e.g:
  console.log(User.prototype.sayHi); // the code of the sayHi method
  
  // there are exactly two methods in the prototype
  console.log(Object.getOwnPropertyNames(User.prototype)); */
/*

let User = class {
    SayHello (){
        console.log("Hello World")
    }
}

console.log(new User().SayHello())*/
/*
function buildClass(className) {
    return class {
        SayHello(){
            console.log(className)
        }
    }

}

let dynamicClass = buildClass('Hello')
new dynamicClass().SayHello()*/

/*
class Emp {
    constructor(empName) {
         this.empName = empName; 
    }

    get () {
        return this.empName
    }

    set(empname) {
        this.empName = empname
    }
    displayName(){
        console.log(this.empName)
    }
}

let newEmp = new Emp("John")
newEmp.displayName()

newEmp.set("Peter")
newEmp.displayName()

newEmp.set("PeterHencil")
console.log(newEmp.get())
*/
/*
class User {

    ['Hello' + 'World']() {
      console.log("Hello World");
    }
  
  }
  
  new User().HelloWorld();*/


  class Button {
    constructor(value) {
      this.value = value;
    }
  //Method
    click() {
      console.log(this.value);
    }

    //Properties
    clickAgain = () => {
        console.log(this.value);
      }
  }
  
  let button = new Button("hello");
  
    setTimeout(() => {
        button.click()
        }, 
    1000);

    setTimeout(button.clickAgain)