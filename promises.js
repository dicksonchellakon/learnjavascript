
//Promise are available from ES6

/*

function addition(a, b){
    return new Promise((resolve, reject) => {
        try {
            let total = a + b;
            resolve(total)    
        } catch (error) {
            reject(new Error(error))
        }
        
    })
}

addition(5, 5)
.then(total => {  total += 10;  console.log(total)  })
.catch(error => {   console.log(error) })
.finally(() => {    console.log("Finally Nothing")   })
*/
/*
console.log("Start")

setTimeout(() => {console.log("Timeout")}, 0)

Promise.resolve("Promise").then(res => console.log(res))
console.log("End")*/
/*
let promise = new Promise((resolve, reject) => {

    let text = "Hello World";

    //resolve(text)
    reject(new Error("System Down!"))
  });

  promise
  .then((result)=> {
    console.log(result)
  })
  .catch((error) => {
    console.log(error)
  })
  .finally(() => {
    console.log('Finally, Sleep')
  })
*/

async function main() {

  await new Promise(resolve => {
    setTimeout(() => {
      console.log("Hello")
      resolve()
     }, 1000)
  })

  
  console.log("World")
}

main()