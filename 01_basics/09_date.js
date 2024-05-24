let myDate = new Date(); // method 1 date decleariation 1
// console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());

console.log(myDate.toTimeString());

// console.log(typeof myDate);

// let anotherDate = new Date(2023, 1, 4, 3, 4, 50);

let anotherDate = new Date("01-04-2000")
// console.log(anotherDate.toString());
// console.log(anotherDate.toDateString());
// console.log(anotherDate.toISOString());
// console.log(anotherDate.toJSON());
// console.log(anotherDate.toLocaleDateString());
// console.log(anotherDate.toTimeString());

let myTimeStamp = Date.now()
let myTimeStamp2 = new Date()

console.log(myTimeStamp)
console.log(myTimeStamp2.getTime())