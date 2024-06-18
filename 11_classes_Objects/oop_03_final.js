// Object literals

// const users = {
//     username: "manoj78",
//     loginCount: 5,
//     signedIn: true,
//     getUsersDetiales: function(){
//         // we cannot use arrow function because arrow function doesnot support this.
//         console.log(`Usernaem: ${this.username}`);
//     }
// }

// user.getUsersDetiales();
// console.log(this)


// constructor function
function users(username, loginCount, isSignedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isSignedIn = isSignedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    // returning the object
    // return this;
    // ehwn using new keyword there is no returning "return this" .
}

const userOne = new users("manoj89", 5, true);
const userTwo = new users("hifs34", 3, false)
// console.log(userOne);
// console.log(userTwo);
// userOne.greeting();
// userTwo.greeting();
// console.log(userOne.constructor);
console.log(userOne instanceof users)
console.log(userOne instanceof Object
)