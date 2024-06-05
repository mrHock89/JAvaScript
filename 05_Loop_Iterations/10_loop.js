// reduce() method in js
// Syntax 1 reduce(callBackFunction)
// Syntax 2 reduce(callBackFunction, initicalVal)

// If initial val is not given then initial val = arr[0]
// If initial val is not given the current val = arr[1]

// Wkthout iniitial val

// const myArr = [1, 4, 4, 5, 32, 0];
// const sumOfArr = myArr.reduce( (accu, currentVal) => currentVal);
const myArr = [1, 4, 4, 5, 32, 0];
const initial = 0;
const sumOfArr = myArr.reduce( (accu, currentVal) => accu + currentVal, initial);

// console.log(sumOfArr);To

// const myNum = [1,2,3];
// const myTotal = myNum.reduce(function(acc, current) {
//     console.log(`acc: ${acc} and currentVal: ${current}`);
//     return acc + current;
// }, 0);

// console.log(myTotal);

const myCourse = [
    {
        course: "DSA",
        price: 2999
    },
    {
        course: "Python",
        price: 2999
    }
]

const totalPrice = myCourse.reduce( (acc, item) => (acc + item.price), 0);
console.log(totalPrice);