const num = 10;
let text = "String";
let valid = true;
let Null = null;
let ud;
let sym = Symbol("Symbol ! For Unique value")
const obj = {
    name : "Amar",
    surName : "Pisal",
    num : 217566,
    add : {
        village : "Vyajwadi",
        pincode : 412803
    }
}
console.table([num, text, valid, Null, ud, sym])
console.log(obj);


// This JavaScript code defines several variables and an object:

// num: Holds the value 10.
// text: Contains the string "String".
// valid: Represents a boolean with the value true.
// Null: Contains the value null, indicating no assigned value.
// ud: Declared but not assigned, resulting in an undefined value.
// sym: Holds a unique symbol with the description "Symbol ! For Unique value".
// obj: An object with properties name, surName, num, and add. The add property is itself an object with village and pincode properties.
// The console.table function is used to display a tabular representation of the variables num, text, valid, Null, ud, and sym.

// The console.log statement outputs the obj object, displaying its structure with nested properties.

// Note: In the console.table output, the properties of the object are not included; only the values of the variables are displayed in a table format.

let score = 34;
console.log(typeof score);
console.log(typeof (score));
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);