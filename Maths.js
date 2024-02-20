const myDate = new Date();
console.log(myDate.toDateString());     //Sun Feb 18 2024
console.log(myDate.toLocaleDateString());   //  2/18/24
console.log(myDate.toString());           //Sun Feb 18 2024 16:51:14 GMT+0530 (India Standard Time)
//Created Date
let myCreatedDate = new Date(2023-0-12)
console.log(myCreatedDate.toString());

let myCreDate = new Date(213234)
console.log(myCreDate.toString());

//Standerd Time
let myDateCreateIndianFormat = new Date("12-12-2013")
console.log(myDateCreateIndianFormat.toString());

// get date month  etc
let MyDate = new Date();
console.log(MyDate.getMonth());
console.log(MyDate.getMonth());
 MyDate.toLocaleString('default' , {
    weekday : "short"
})