/*
Fetch users from GitHub
Create an async function getUsers(names), that gets an array of GitHub logins, fetches the users from GitHub and returns an array of GitHub users.

The GitHub url with user information for the given USERNAME is: https://api.github.com/users/USERNAME.

There’s a test example in the sandbox.

Important details:

There should be one fetch request per user.
Requests shouldn’t wait for each other. So that the data arrives as soon as possible.
If any request fails, or if there’s no such user, the function should return null in the resulting array.
*/

import fetch from "node-fetch";//Only needed if the node version is less than 18

//let gitnames = ['dicksonchellakon', 'philipplackner']

let getGitDetails =  async (username) => {

  let gitResponse = await fetch('https://api.github.com/users/'+ username) 

  if (!gitResponse.ok) return null
  
  return await gitResponse.json()  
}
/*
//Loop over the gitnames
gitnames.forEach(gitusername => {
    
  console.log(gitusername)
  getGitDetails(gitusername)
  .then(gitdetails => {
    console.log(gitdetails)
  })
    
});*/

Promise.all([
  getGitDetails('dicksonchellakon'), 
  getGitDetails('philipplackner'),
  getGitDetails('mbostock'),
  getGitDetails('wronguser1')
]).then(responses =>{
  console.log(responses)
});