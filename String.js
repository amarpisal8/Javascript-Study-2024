let name = "Amar";
let Surname = "Pisal"

let employee ={
    Name : "Amar Pisal",
    Id : "123223",
    Designation : "Software Developer"
}

console.log(`My First Name is ${name} and my surname is ${Surname}`);
console.log(`Employee of the year goes to ${employee.Name} and him Employeement id is ${employee.Id} and him Designation is ${employee.Designation}`);

let Name = ["Joe","Jon","Jack","Jenny","Marry"];
let RollNumber = [1,2,3,4,5];
const Marks = [92,89,97,92,85]
for(let i=0; i<=5; i++){
    // console.log(`Student Name Is ${Name[i]} and its Roll Number is ${RollNumber[i]}`);
    console.log(`${RollNumber[i]}  ${Name[i]} ${Marks[i]}`)
}


const FullName = new String('AmarShivajiPisal')
console.log(FullName[4]);
console.table([FullName.__proto__ , FullName.length , FullName.toUpperCase , FullName.charAt('A')])
const newString = FullName.slice(0,5);
console.log(newString);

const newSubString = FullName.substring(0,5)        
console.log("SubString is " +newSubString);

let newStringTwo = '   Amar   ';
console.log(newStringTwo);          //Prnt with space
console.log(newStringTwo.trim());       //Errase Space in String
let DeclareString = 'WorkSpace';
let StringBlink = DeclareString.blink()
let StringBolt = DeclareString.bold();
console.table([StringBlink , StringBolt],)