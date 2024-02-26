// SingleTon
const dashLine = "__________________________________________________"
// Object Literals
const mySym = Symbol("Un1")
const JsUser ={
    name : "Amar",
    [mySym] : "Un",
    age : 18,
    location : "Wai,Maharashtra",
    email : "amarpisal8@gmail.com",
    isLogin : false,
    LastLoginDays : ["Sunday" , "Monday", "Friday"]
}
console.log(JsUser.age);
console.log(JsUser["age"]);         //Square Notition Access : Access Multiword Key's and Symbol
console.log(JsUser[mySym]);     //Print the value of symbol using Sqare Notition
//Overide 
JsUser.location = "Satara";
console.log(JsUser.location);
JsUser.greeting = function(){
    console.log("Hello JS 😂");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user ${this.name} and your age is ${this.age} 😂`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
Object.freeze(JsUser)           //From now you cant overide any data from JsUsect
JsUser.age = 28;
console.log(JsUser.age);        //age will not be change.age still 18

console.log(dashLine);
// SingleTon


const StudentObj = {
    name : {
        firstName : "Amar",
        midName : "Shivaji",
        lastName : "Pisal"
    },
    address : {
        AtPost : "Vyajwadi",
        Tal : "Wai",
        Dist : "Satara",
        PinCode : 412803
    },
    contact : {
        email : {
            first : "amar@gm.com",
            secound : "amar@ot.com"
        },
        mobile_number : {
            phone1 : 90277712,
            phone2 : 7887717
        } 
    }
}

console.log(StudentObj.name.lastName);
const sr1  = {
    char1 : "Jaydeep",
    char2 : "Gouri"
}
const sr2 = {
    char3 : "babu",
    char4 : "raju"
}

//concat two object :
const srs = Object.assign({}, sr1 , sr2)
console.log(srs);
const srs2 = {...sr2 , ...sr1}
console.log(srs2);
console.log(StudentObj);
const ArrayObj = {
    Intfirst : [1,2,3,4,5],
    StrTwo : ["Amar" , "Abhay" , "Amit" , "Ankush", "Sandip"]
}

for(let i=0; i<5; i++){
    console.log(ArrayObj.Intfirst[i]);
    console.log(ArrayObj.StrTwo[i]);
}
console.log(Object.keys(StudentObj));           //get object key
console.log(Object.values(StudentObj));         //get objct value
console.log(Object.entries(sr1));
// Returns an array of key/values of the enumerable properties of an object
//Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
console.log(StudentObj.hasOwnProperty("name"));     //ask following proprty is your to Object
console.log(dashLine);
// Object Destructiring
const SSCStudent = {
    student1 : {
        name : "Ramesh",
        age : 16,
        gender : "M",
        marks : {
            Marathi : 78,
            English : 92,
            Hindi : 85,
            social_science : {
                    History : 70,
                    Economis : 86
            }
        }
    },
    student2 : {
        name : "Priyanka",
        age : 16,
        gender : "F",
        marks : {
            Marathi : 92,
            English : 99,
            Hindi : 84,
            social_science : {
                    History : 79,
                    Economis : 76
            }
        }

    }
}

