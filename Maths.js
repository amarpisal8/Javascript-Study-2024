console.log(Math.abs(-2))           //Get Opposite Number   (-2 == 2)
console.log(Math.round(2.3));       //Get RoundOff number   (2.3 == 2)
console.log(Math.ceil(2.3));        //Get Ceil Number       (2.3 == 3)
console.log(Math.floor(4.9));       //returns the largest integer less than or equal to a given number. (4)
console.log(Math.floor(2.21))           //ignore decimal number and print it    (2.21==2)
console.log(Math.random());         //print random number between 0 to 1

//Write down a code to print dice number 1 to 6
const min = 1;
const max = 2;
let ranNum = Math.random()*10
console.log(ranNum.floor());
