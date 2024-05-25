// Array decleration 

// number array
const array = [1, 2, 3, 4, 5,];

// Srting array
const array2 = ["manoj", "raj"];

// using new keyword

const array3 = new Array(1,23, 34,);



// Array Methods

array.push(6)
// console.log(array);
array.pop();
// console.log(array);

array.unshift(9)
// console.log(array);
array.shift(9)
// console.log(array);

// console.log(array.includes(6));
// console.log(array.indexOf(3));


const newArray = array.join();
// console.log(newArray);
// console.log(typeof newArray);
// console.log(array);

//  slice and splice in Array

console.log(`***************** Slice ******************`);

console.log("A ", array);

const sArray = array.slice(1,3);
console.log(sArray);
console.log(array);

console.log(`***************** Splice ******************`);
console.log("B ", array);

const SpArray = array.splice(1,3);
console.log(SpArray);
console.log("C", array);