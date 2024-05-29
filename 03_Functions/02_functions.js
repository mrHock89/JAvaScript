function calculateCartPrice(num1) {
    return num1;
}

// console.log(calculateCartPrice(99))

// using sprade or rest operator
// we can take multiple agruments 

// function CArtPriceCAl(...num2) {
//     return num2;
// }

// // console.log(CArtPriceCAl(200));
// console.log(CArtPriceCAl(200, 300, 210, 500));


function CArtPriceCAl(val1, val2, ...rest) {
    
    console.log(val1);
    console.log(val2);
    return rest;
}

// console.log(CArtPriceCAl(200));
// console.log(CArtPriceCAl(200, 300, 210, 500));


// How to access objects in function

const user = {
    username: "manoj09",
    price: 132
}

function handleObj(anyObj) {
    console.log(`Username is ${anyObj.username}, and price is ${anyObj.price}`);

}

// handleObj(user);

//Accessing Array in function

const myCartPrice = [100, 421, 134, 600];

//function defination
// function myPrice(...accArray){
//     console.log("First Price: ", accArray[0])
//     return accArray;
// }
// console.log(myPrice(100, myCartPrice));
function myPrice(accArray){
    // console.log("First Price: ", accArray[0])
    // return accArray;

    for(let i = 0; i < accArray.length; i++){
        console.log(accArray[i]);
    }
}
myPrice(myCartPrice);
// console.log(myPrice(100, myCartPrice));
