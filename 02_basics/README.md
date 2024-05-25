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

> "`console.log("B ", array); \

const SpArray = array.splice(1,3); \
console.log(SpArray);    \
console.log("C", array); \
console.log("Helo World");`" 

> "`Output`
B  [ 1, 2, 3, 4, 5 ] \
[ 2, 3, 4 ] \
C [ 1, 5 ]"