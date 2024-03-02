function Print5Line (){
    for(let i=0; i<5; i++){
        console.log(`I hate coding ${i} time`);
    }
} 

Print5Line()
function add (num1 ,  num2){            
    console.log(num1+num2);
    return
    console.log("pop")      //cant exececute anything after return
}
const obj = {
    Myname : "Amar",
    RollNo : 29
}
function ReturnObj (anyObj) {
    console.log(`My name is ${anyObj.Myname} and my roll number is ${anyObj.RollNo}`)
}

ReturnObj(obj)
add(1,"null")

let a = 10              
const b = 100           //b is constant he can not reasign the value of b
var c = 1000            //c can not declare var again in global scope