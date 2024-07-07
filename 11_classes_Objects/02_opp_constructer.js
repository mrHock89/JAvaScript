
function user(username, loginCount, isLoggedIn){
    this.username = username; // left side is variable and right side is passed value we can use other name like myUsename
    // myUsername = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    // Creating a method
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this;
    // if we do not write 'return this' the code will be run because it will be implecitely declear

}

const userOne = new user("manoj89", 12, true);
const userTwo = new user("raj76",20, false );
// const userOne =  user("manoj89", 12, true);
// const userTwo =  user("raj76",20, false );

// if we do not use new keyword before user. Then last consteacted user will overrite previous one


// if(userOne.isLoggedIn == true){
//     userOne.isLoggedIn = false;
// }
// console.log(userTwo);
// console.log(userTwo.loginCount);
// console.log(userTwo.username);
// console.log(userTwo.isLoggedIn);
// console.log(userOne);
// console.log(userOne.loginCount);
// console.log(userOne.username);
// console.log(userOne.isLoggedIn);

// console.log(userOne.greeting());
// userOne.greeting();
// console.log(userTwo);
// console.log(userTwo.constructor);
console.log(userOne instanceof user);
console.log(userOne instanceof Object);