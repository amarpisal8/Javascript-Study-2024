let a = 10              
const b = 100           //b is constant he can not reasign the value of b
var c = 1000            //c can not declare var again in global scope



function One(){
  const userName = "Amar";
  function Two(){
    const website = "amar.com";
    console.log(userName);
  }
  // console.log(website);
  Two();
}
One()


//++++++++++++++++++++++Intresting+++++++++++++++++++++++
console.log();
function addOne (num){
  return num + 45;
}
console.log(addOne(4));