//Callbacks are available from ES5
// Callbacks
function greet(name, callbacks) {
    console.log('Hi' + ' ' + name);
    callbacks()
}

// callback function
function callMe() {
    console.log('I am callback function');
}

setTimeout(greet, 2000, 'John', callMe);
setTimeout(greet, 2000, 'John', () => {
    console.log('I am callback');
});

//greet('Peter', callMe); // Hi Peter



//Nested Callbacks

let someThing = (callback) => {
    console.log("Do Something!");
    callback();
}

let someThingElse  = (callback) => {
  console.log("Do Something Else!");
  callback();
}

let doThirdThing  = (callback) => {
  console.log("Do Third thing!");
  callback();
}

someThing(() => {
  console.log("First anonymous callback!");
  someThingElse(() => {
    console.log("Second anonymous callback!")
    doThirdThing(() => {
      console.log("Third anonymous callback!");
    })
  })
})