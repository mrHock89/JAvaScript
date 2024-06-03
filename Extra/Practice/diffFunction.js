function addOne(num) {
    return num + 1;
}
console.log(addOne(1));

// Functin hoisting

console.log(addTwo(2));
const addTwo = function(num) {
    return num + 1;
}
