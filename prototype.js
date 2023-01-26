

let animal = {
    eats: true,
    whichfriut() {
        console.log("Banana")
    }
  };


  let rabbit = {
    jumps: true
  };
  
  rabbit.__proto__ = animal

  console.log(rabbit.eats)

  rabbit.whichfriut()

  let cat = {
    earLength: 10,
    __proto__: rabbit
  };

//  animal.__proto__ = rabbit

  console.log(cat.earLength + " >> " + cat.eats + ">> "+ cat.jumps)

  cat.whichfriut()