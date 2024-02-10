console.log(2+2);

let str = "Amar";
let str2 = " Pisal";
let str3 = str + str2;
console.log(str3);
//stay code readable
console.log(1+1);       //2
console.log(2+"1");     //21
console.log("2"+1);     //21
console.log("2"+1+1);   //211
console.log(2+1+"1");   //31


console.log(+true);
console.log(+"");

let gameCounter = 10;

console.log(gameCounter++)
console.log(++gameCounter)

//Comparision

console.log("2" > 1);       //true
console.log("02" > 1);      //true
//Null value
console.log(null == 0)      //false
console.log(null > 0);      //false
console.log(null < 0);      //false
console.log(null <= 0)      ///true

//Undefiend Value
let und;
const undCon = Number(und)
console.log(undCon)
console.log(und > 0);      //false
console.log(und < 0);      //false
console.log(und <= 0)      ///false

//Strict check using ===
console.log("2"==2);
console.log("2"===2);