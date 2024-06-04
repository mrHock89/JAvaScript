let balance = 800;

// if(balance >= 300){
//     console.log(`We can shop and current balance is ${balance}`);
// }
// else {
//     console.log(`We cannot shop and current balance is ${balance}`);
// }


// We can implement the same using ternary operator


// balance >= 100 ? console.log(`We can shop and current balance is ${balance}`) :  console.log(`We cannot shop and current balance is ${balance}`);

if(balance < 500){
    console.log("Less than 500");
} else if(balance < 700) {
    console.log("Less than 700");
} else if(balance < 900) {
    console.log("Less than 900");
} else {
    console.log("Less than 1200");
}
