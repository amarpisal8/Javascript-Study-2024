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

//Arrow Functions
const user = {
    userName : "Amar",
    price : 1000,
    welcomeMessage : function(){
        console.log(`${this.userName} , Welcome to website`);
    }
}

user.welcomeMessage()


function chai () {
    console.log(this);
}
chai();

const NewArrow = () =>{
    let userName = "amar";
    console.log(this);
}
NewArrow();

const Addition = (a , b) =>{
    return a + b;
}
console.log(Addition(2,3));
// use return keyword under curly breses() else not in parathenthises
// for eg
