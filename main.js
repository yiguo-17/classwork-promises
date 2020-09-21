// 1.
// Create a promise called myFirstPromise

// Inside the promise
// Create a boolean variable check and set it to true
// Create a variable rand and it should calculate a random number between 1 and 10


// If the check boolean is true it should resolve with the
// result of a random number between one and ten

// if the check boolean is false, it should reject with
// a string that says: Cannot computer random number

// Both resolve and reject should only occur after 2 seconds

// Now call the promise you created and chain your thenables.
// In your first thenable
// console.log('I have my random number <the number> and I will multiply it by 5')
// Multiply your random number by 5 and pass the data to the next thenable

// In your second thenable log a String
// that says `Here is the result of my random number multiplied
// by 5: < place number result here>`
let myFirstPromise = new Promise((resolve,reject)=>{
  let boo = true;
  let rand = Math.round(Math.random()*10);
  setTimeout(() => {
    if(boo){resolve(rand)}
  else{reject('Cannot computer random number')}
  }, 2000); 
})
myFirstPromise.then((num)=>{
  console.log(`I have my random number ${num} and I will multiply it by 5`);
  let fiv = num*5;
  return fiv
}).then((num)=>{
  console.log(`Here is the result of my random number multiplied by 5: ${num}`)
}).catch((message)=>{
  console.log(message)
})


// 2.
// create a function called getDataPromise that returns a promise
// inside the function create an error variable and set it to boolean false
// create a conditional that handles the rejection if there is an error with a message 'Something went wrong'
// Create a set timeout function that after 4 seconds returns the data (we are mimicking a 3rd party API call)

// consume your promise
// take the result and log the data
// take data and output 'Hello Joe Peters' for each object
// This should be 3 separate steps
// Handle the error in case there is one
// Test by setting your error variable to false then true

let data = [
  { firstName: 'Joe', lastName: 'Peters' },
  { firstName: 'Doug', lastName: 'Lawson' },
  { firstName: 'Sandra', lastName: 'Mathers' },
];
function getDataPromise(obj){
  return new Promise((resolve,reject)=>{
    let error = true;
    setTimeout(()=>{
      if(error){
        reject('Something went wrong')
      }
      else{resolve(obj)}
    },4000)
  })
}

data.map((person)=>getDataPromise(person).then((obj)=>{
  console.log(`Hello ${obj.firstName} ${obj.lastName}`)
}).catch((message)=>{console.log(message)}))