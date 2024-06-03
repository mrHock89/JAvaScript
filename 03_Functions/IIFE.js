// Immediately Invoked Function Expressions (IIFE)~
(function square(num) {
    // named IIFE
    console.log(num * num);
}) (3);

//  Explecit arrow function
((num) => {
    // unnamed IIFE
    console.log(num * num);
}) (3);

// Implecit arrow function
((num) => (console.log(num * num))) (3);

