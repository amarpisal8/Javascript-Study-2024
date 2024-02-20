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
