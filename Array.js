// We can insert any type of data in a single array
// For example:
// Number
let arrNum = [1, 2, 3, 4, 5];
// String
let arrString = ["Ironmen", "SpideMen", "Dr Strengh"];
// Any datatype
let arr = [-1, "amar", true, 1.2, null, undefined];

// We can access
console.log(arr[1] + " " + arr[2]);

// Array methods
// Push: Add value to the last index
arr.push(3);

// Pop: Remove last value
arr.pop();

// Unshift: Add element at the 1st index
arr.unshift(11);

// Shift: Remove first value
arr.shift();

// Check if the array includes null
if (arr.includes(null)) {
    console.log('Yes');
} else {
    console.log('No');
}

// Push another value and log it
arr.push(4);
console.log(arr[5]);
// Make Array
const arr2 = [12, 4, 65, 76];
console.log(arr2[3]); // Access array

// Methods
const HerosMarvel = ["Ironman", "Thor", "Spiderman", "Hulk"];
HerosMarvel.push("Rocket"); // push element in the last
console.log(HerosMarvel.length); // find the length of the array
HerosMarvel.unshift("Captain America"); // to add the first element
HerosMarvel.shift();                    //Remove first element of array
console.log(HerosMarvel.includes("Ironmen"));       //weather check element exist in arrya
console.log(HerosMarvel.indexOf("Hulk"));   //If target element found shown index number else show -1
console.log(HerosMarvel.join());        //we can convert any type of Data types Array to string
const DC_heroS = ["Batmen","Flash","DeadPool"]
HerosMarvel.push(DC_heroS);         //we can push overall array
const newArray = HerosMarvel.slice("Antmen" , "Root")
console.log(`new array is ${newArray} `);
console.log(HerosMarvel);

const ArrayInArray = [12,23,[1,2,3] , 42,53,91, [-1,-2,-3]];
console.log(ArrayInArray.flat(Infinity));   //some time we have multiple array in single array.you can flat mean converted to single array using this function
console.log(Array.isArray(ArrayInArray))    //weather check it is array
console.log(Array.from("Amar"));

const val1 = 12;
const val2 = 23;
const val3 = 22;
console.log(Array.of(val1, val2, val3));
console.log(Array.from(val1,val2,val3));