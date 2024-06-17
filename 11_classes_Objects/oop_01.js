// const user = {
//     username: "manoj89",
//     loginCount: 4,
//     signedIn: true,
//     getUserDetiales: () => {
//         // console.log("Got user detiales from database.")
//         console.log(`Username: ${this.username}`)
//     }
// }

// The error in your code arises because you're using an arrow function for the getUserDetiales method. Arrow functions do not have their own this context; instead, they inherit this from the enclosing scope. In this case, this does not refer to the user object.

// To fix this issue, you should use a regular function instead of an arrow function. 

const user = {
    username: "manoj89",
    loginCount: 4,
    signedIn: true,
    getUserDetiales: function() {
        // console.log("Got user detiales from database.")
        // console.log(`Username: ${this.username}`)
        // console.log(this)
    }
}

// console.log(user['username']);
// user.getUserDetiales();
console.log(this)
