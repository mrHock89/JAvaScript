if(true) {
    const username = "Manoj";
    if(username === "Manoj"){
        const website = "youtube";
        // console.log(username + website); // manojyoutube
    }
    // console.log(website) // ReferenceError 
}

// console.log(username); // Reference Error

console.log(`******************* Interesting *************************`)

console.log(addOme(4));

function addOme(num) {
    return num + 1;
}


const addTwo = function(num) { // this type of function also a basic function smoe time knows ass expression
    return num + 1;
}
addTwo(5);
