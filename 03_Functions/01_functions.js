function sayMyName() { // function's definiation
    console.log("M")
    console.log("A")
    console.log("N")
    console.log("O")
    console.log("J")
}
//sayMyName // function's reference
// sayMyName() // function's executions


function AddNumber(num1, num2) {
    return num1 + num2; // this will return a value
}

// console.log(AddNumber(2,4));

function additionNum(num3, num4) { // num3 and num4 are parameters 
    console.log(num3 + num4); // this function will not return any thing
}

// additionNum(4,"8"); // 4 and 8 are arguments

function loginUserMessage(userName) {
    if(userName === undefined){
        console.log("Please enter a user name.");
        return;
    }
    else 
        return console.log(`${userName}, just logged in.`);
}

loginUserMessage("Manoj");