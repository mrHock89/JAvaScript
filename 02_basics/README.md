# Day 4 Learning about Array in Js (25th May 2024):

- Array is used to store multiple items under a `'single variable'`.
- Array is `object` data types.
- JavaScript arrays are resizable and can contain a mix of different data types.
- JS Arrays are `zero-indexed`.
- JavaScript array-copy operations create shallow copies. (Means give as reference. If we change value origin value will be changed.)

<hr />

### We can assign array in many ways:
- > `No-1. => const array = [1, 2, 3, 4, 5]`
- > `No-2. => const array2 = ["Anuj", "Anir", "Earth"]`
- > `No-3. => const array3 = new Array(1, 2, 3, 4)`

<hr />


## Slice() and Splice() method in Array:
<hr>

### slice():

- > Slice doesnot manupulate the main array.

> "`const array = [1, 2, 3, 4, 5,]; \

console.log("A ", array); \

const sArray = array.slice(1,3); \
console.log(sArray); \
console.log(array);`"

> "`Output`
A  [ 1, 2, 3, 4, 5 ] \
[ 2, 3 ] \
[ 1, 2, 3, 4, 5 ]"

### splice():

- > Splice manupulate the main array.

> "`console.log("B ", array); 

const SpArray = array.splice(1,3); \
console.log(SpArray);    \
console.log("C", array); \
console.log("Helo World");`" 

> "`Output`
B  [ 1, 2, 3, 4, 5 ] \
[ 2, 3, 4 ] \
C [ 1, 5 ]"


### push(), concat() and spread[...arr1, ...arr2]:
<hr>

- push() will push the array in to the array. 
> "marvel_heros.push(dc_heros) \
console.log(marvel_heros);"

> "`[
  'iron_man',
  'thor',
  'hulk',
  'spider_man',
  [ 'batman', 'superman', 'flash' ]
]`"

- cancat() will add two array. It can not add more than two arrays.

> "all_heros = marvel_heros.concat(dc_heros); \
console.log(all_heros);"

> "`[
  'iron_man',
  'thor',
  'hulk',
  'spider_man',
  'batman',
  'superman',
  'flash'
]`"

- We can overcome this limitation using sprage([...array1, ...arraty2, ..])

> "const new_all_heros = [...marvel_heros, ...dc_heros]; \
console.log(new_all_heros);"

> "`[
  'iron_man',
  'thor',
  'hulk',
  'spider_man',
  'batman',
  'superman',
  'flash'
]`"

- flat() is used to create a single array from a loop array
> "const loopArray = [1, 3, 4, [34, 5, 3,2, 2], [4, 5, 2, [10, 2, 11, 34, "ani"]]];

const UnLoopArrya = loopArray.flat(Infinity);"

> "`[
  1, 3,  4,  34,
  5, 3,  2,  2,
  4, 5,  2,  10,
  2, 11, 34, 'ani'
]`"
<hr />

## Objects in JavaScript:

- we can declare objects in tow ways `using literals` and `using constractor`
- When we will create objects using `constractor`, `singletone` will be created. 

### Object Creation:

- `Medhod 1` using `literals` 
> "`const ObjName = {};`"
- `Method 2` using `constract`
> "`Object.creat`"

- In js Object have `key` and `value`
> "Eg: \
  const myObject = { \
    name: "Anuj",  - >// or "name": "Anuj" \
    age: 20,\
    location: "London" \
    email: "hfdkshdf4343@gmail.com"
  }
"
- In js keys are usally string -> `name = > "name"`
- We do not have to use `"name"` because if we do not declare it as sting still it will consoder as string.

### Object Access: 

- > `For full learning of access see '02_basics/03_objects.js'`

### -- Learnt about --

- Object decleration
- object access
- how to access and add `synbol` in object
- how to `freez` a object or keys of a object
- Using `function` in object.
