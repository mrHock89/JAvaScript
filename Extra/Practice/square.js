// Functin Declearation
// function squareNum(num) {
//     return num * num;
// }

// Function Expression

// const square = function(num) {
//     return num * num;
// }

// Arrow Function
const square = (num) => num * num;
const hello = () => "Hello World!";
// console.log(hello());

// Anonymous Function
// setTimeout(function() {
//     console.log("Hello World!");
// }, 1000);

// console.log(square(4));

//  IIFE Function

(function(num) {
    console.log("Hello World!");
}) ();