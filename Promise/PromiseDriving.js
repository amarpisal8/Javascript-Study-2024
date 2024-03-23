// const DriveProm = new promise((resole, reject)=>{
//     setTimeout(()=>{
//         const candTest = true;
//         if(candTest){
//             resole(`You can Drive`)
//         }else{
//             reject(`You cant Drive`)
//         }
//     },2500)
// });


function concertPassPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = Math.random(); // Generate random number between 0 and 1
        if (randomNumber > 0.5) {
          resolve("Pass received");
        } else {
          reject("Pass not received");
        }
      }, 3000); // Simulate 3 seconds delay
    });
  }
  
  // Handle promise resolution (success)
  concertPassPromise()
    .then((message) => {
      console.log(message);
    })
    // Handle promise rejection (failure)
    .catch((message) => {
      console.error(message);
    });
  