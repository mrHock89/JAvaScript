// named IIFE 
(function() {
    console.log("Hello World!");
}) ();

// Unnamed IIFE
(() => {
    console.log("Hello World!");
}) ();

// Implecit unnammed IIFE
(() => (console.log("Hello World!"))) ();

// IIFE creates private scope for variables, preventing them from pollutiong global scope and avoiding conflicts with other parts of code.

// returning iife

let Square = (function(num1, num2){
    return num1 + num2;
}) (4,5);

console.log(`Square: ${Square}`);