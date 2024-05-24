const score = 400;
// console.log(score);

const newNumber = new Number(100);
// console.log(newNumber);

let numberTOString = console.log(newNumber.toString());
// console.log(typeof numberTOString);

let aNUmber = 269089089023;
// console.log(aNUmber);
// console.log(aNUmber.toFixed(1));
// console.log(aNUmber.toPrecision(1))
// console.log(aNUmber.toLocaleString("en-IN"));

console.log("******************* MATH ***********************");

// console.log(Math.abs(-234.34));
// console.log(Math.acos(-234.34));

// console.log(Math.round(4.25));

// console.log(Math.ceil(4.121)); // give us highest vale
// console.log(Math.floor(4.121)); // will give us lowest value

// console.log(Math.min(3,4,0,0.1,-2));

// console.log(Math.random());
// console.log(Math.random()* 10); // without .
// console.log((Math.random()* 10) + 1); // will give us value greater than 1

let min = 10;
   let max = 20;
   console.log(Math.floor(Math.random() * (max - min * 1)));
   console.log(Math.floor(Math.random() * (max - min * 1)) + min);