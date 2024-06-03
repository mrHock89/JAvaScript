const arr = [10, 21, 4, 32, 9, 6];

function doubleArr(myArr) {
    return myArr.map(myArr => myArr * 2);
}

console.log(doubleArr(arr));