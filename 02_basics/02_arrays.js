const marvel_heros = ["iron_man", "thor", "hulk", "spider_man"];
const dc_heros = ["batman", "superman", "flash"];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// push() will push the array in to the array

// Concat

const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

// Cancat will add two array. It can not add more than two arrays.
// We can overcome this limitation using sprage([...array1, ...arraty2, ..])

// const new_all_heros = [...marvel_heros, ...dc_heros];
// console.log(new_all_heros);

const loopArray = [1, 3, 4, [34, 5, 3,2, 2], [4, 5, 2, [10, 2, 11, 34, "ani"]]];

const UnLoopArrya = loopArray.flat(Infinity);
// console.log(UnLoopArrya);
// flat() will simplify the arry.

console.log(Array.isArray("Anirban"));
console.log(Array.from("Anirban"));
console.log(Array.from({name: "Nairban"}));

// converting multiple varible to array
let score1 = 100;
let score2 = 200;
let score3 = 300;

const allNewArry = (Array.of(score1, score2, score3, "Anirban"));

console.log(allNewArry);