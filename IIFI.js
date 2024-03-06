// IIFI : Imediatelty Invoked  Function Expresion
// Named IIFE
(function DataBase (){
    console.log("Db Created");
})();
// In JavaScript, semicolons are used to terminate statements. However, in the context of an Immediately Invoked Function Expression (IIFE), semicolons are not strictly necessary.
(()=>{
  console.log(`2 + 2 is ${2+2}`);
})();

// IFI stands for Immediately Invoked Function Expression. It is a JavaScript function that is defined and called right away. This concept is useful when you want to create a new scope and execute some code without affecting the global scope.

// Simple IIFE
((name)=>{
  console.log(`My Name is ${name}`)
})("Amar");