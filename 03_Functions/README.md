# ********************** `FUNCTIONS` ************************

<hr >

## Day 6 => 29th May.

<hr>

### `Stsrted Learning Functions in JavaScript:`

<hr>

> - `A function is a block of organized, reusable code that is used to perform a single, related action. `

> - `'Parameters:' Values in function definiation.`

> - `'Arguments:' Values in function reference.`

> - `In function we can acces 'objects' in function` 

> - `We can access objects and arrays in function`

> - `sprade(...) operator is used in function to get multipe value`

<hr >
<hr >

# ********************** `SCOPE IN JavaScript` ************************
<hr>

## Day 7 (02-06-2024):
<hr>

### VAR:
- Function-scoped.
- Hoisted and initialized with `undefined`.
> console.log(a); // undefined \
  var a = 5; \
  console.log(a); // 5 \

- Allows redeclaration.
> var a = 30; \
  var a = 9; \
  console.log(a); // output 9

- Creates a property on the global object.

### LET: 
- Block-scoped.
- Hoisted but not initialized, causing a ReferenceError if accessed before declaration.
> console.log(b); // ReferenceError: Cannot access 'b' before initialization \
 let b = 5; \
 console.log(b); // 5 \

- Do not allows redeclearation.
> let d = 10; \
// let d = 20; // SyntaxError: Identifier 'd' has already been declared \
d = 20; // Correct way to reassign \
console.log(d); // 20

- Does not create a property on the global object.

### Arrow functon: 

> There are two ways to write arrow function
- Basic Arrow function `Emplecit Return`
> - Here we `return` a value from function. \
const addTwo = (num1, num2) => { \
    return num1 + num2; \
}
- `Implecit return` arrow function
> - Here we `did not return` a value from the function. \
const addthree = (num1, num2, num3) =>  num1 + num2 + num3;
or \
const addthree = (num1, num2, num3) =>  (num1 + num2 + num3);

> - Object return \
const addthree = () =>  ({username: "Manoj"});\
  - We have to use `parethesis` to return object.
  
> - For more check out IIFE.js


