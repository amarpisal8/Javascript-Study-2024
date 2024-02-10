let Str = "Amar";           //String
let Num = 12;               //Number
let PointNum = 12.1;        //Float Num (no another variable its only Number)
let und;                    //undefiend
let Nul = null;             //null  or  empty
let sym = Symbol('12');     //Symbol
let sym2 = Symbol('12');

//compare two symbol with same value
if(sym === sym2){
    //return true;//
    console.log("Its Match")
}else{
        //    return false;
        console.log("Not Match")
}
//Arrays
let heros = ["Shaktimaan","Junior G","Arymaan"];
// Object
const obj = {
    name : "Amar",
    age : 28
}
// Function
const Addition = function(a,b){
    console.log("Addition Between "+a+ " and " +b+ " is")
    return a+b;
}
let firstValue = 10;
let secoundValue = 15;
const resultAddition = Addition(firstValue,secoundValue);
console.log(resultAddition);

console.log("Type Of Function " +typeof Addition)
console.log("Type of Object " +typeof obj)
console.log("Type Of Arrays "+typeof heros)

console.table([Num,PointNum,und,Nul,sym]);




