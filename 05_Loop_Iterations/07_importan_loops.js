// forEach()
// const coding = ["js", "py", "cpp", "c", "php"];

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item;
// });

// console.log(values);

// const myNums = [1, 2 ,3 , 5, 6, 7, 8, 9, 10]; 
// // const newNums = myNums.filter( (num) => num > 4)
// const newNums = myNums.filter( (num) => {
//     return num > 4;
// })
// console.log(newNums);

// We can implement this using forEach()

const myNum = [1, 2, 3, 4, 2, 3, 10, 21, 32];
const newNum = [];

myNum.forEach((num) => {
    if(num > 4 ){
        newNum.push(num);
    }
});
// console.log(`new Array: ${newNum}`); 
console.log(newNum); 

