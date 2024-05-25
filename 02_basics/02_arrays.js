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

