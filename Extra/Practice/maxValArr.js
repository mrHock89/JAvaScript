// Write a function that will return max value in a array

const arr = [5, 10, 1, 3, 6, 1000] ;

// Mode 1
// function findMax(arr) {
//     return Math.max(...arr);
// }

// Mode 2  without using Math method

function findMax(arr) {
    let maxVal = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(maxVal < arr[i]){
            maxVal = arr[i];
        }
    }
    return maxVal;
}

console.log(`Max Value is ${findMax(arr)}`);