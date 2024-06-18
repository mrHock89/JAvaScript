// const user = {
//     username: "manoj78",
//     loginCount: 3,
//     signedIn: false,
//     getUserDetiales: function(){
//         // console.log("Hello World!");
//         // console.log(this.username);
//         console.log(this);

//     }
// }
// // console.log(user); // printion user obj
// // console.log(user.username) // printing user's uername
// user.getUserDetiales();
// // console.log(this)

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this;
}

const userOne = new User("mnaoj90", 12, true);
const userTwo = new User("fweew32", 3, false);
// console.log(userOne);
// console.log(userTwo);
userOne.greeting();
userTwo.greeting();