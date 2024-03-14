const temp = 34;
if (temp <= 36 || temp >= 38) {
  console.log("You Are Seek");
} else {
  console.log("You Are Done");
}

//ShortHand Notition

const balance = 10000;
if (balance > 500) {  
  console.log("Less Than 500");
} else if (balance > 750 || balance > 500) {
  console.log("Less than 750");
} else {
  console.log("Out Off");
}

//switch case statment

const month = 4;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  default:
    break;
}

let userEmail = "asp@gm.com";
if (userEmail) {
  console.log("find");
} else {
}

// condition ? true : false;
const iceTeaPr = 79;
iceTeaPr <= 80 ? console.log("Less than 80") : console.log("More than 80")

//    > : Greater Than
//    < : Less Than
//    = : assign
//    == : isEqualTo
//    != : Not Equal to
//    === : Check eual to with type
