import fetch from "node-fetch";//Only needed if the node version is less than 18

//let url = 'https://api.github.com/users/dicksonchellakon'
let url = "https://wshr.acc.co.il/wsws.aspx?phone=0544443331&FullName=Test-Dev&Key=427ce909-508b-4b2f-a2af-a56dc545757a&Extra=ExtraInfo&Bzq=1"
let response = await fetch(url, {
    method: "GET"
});


if (response.ok) { // if HTTP-status is 200-299
  
  let json = await response.text();

  console.log(json)
  //console.log(json.name + ">>" + json.company + ">>" + json.location )

// get one header
//console.log(response.headers);
  
} 
else {
  console.log("HTTP-Error: " + response.status);
}