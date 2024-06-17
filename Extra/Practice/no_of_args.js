
// @param {...(null|boolean|number|string|Array|Object)} args
// @return {number}
 
var argumentsLength = function(...args) {
    // console.log("Hello")
    console.log(`No of Args: ${args.length}`)
};

argumentsLength(1, 2, 3); // 3