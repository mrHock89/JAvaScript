/**
 * @return {Function}
 */

 // Function Syntax
// const createHelloWorld = function(){
//     return function(){
//         return "Hello World";
//     }
// }

// Arrow Function
// const createHelloWorld = function(){
//     return () => {
//         return "Hello World";
//     }
// }

// omit return
// const createHelloWorld = function(){
//     return () => ("Hello World");
// }


//Function + rest Arguments
const createHelloWorld = function(){
    return function(...args){
        return "Hello World";
    }
}


 const f = createHelloWorld();
 console.log(f()); // "Hello World"
 