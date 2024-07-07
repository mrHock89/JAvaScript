// const user = {
//     username: "manoj89",
//     loginCount: 4,
//     signedIn: true,
        // method created
//     getUserDetials: function() {
//         console.log(`Username: ${this.username}`);
//     }

// };

// console.log(user.username);
// console.log(user['username']);
// // console.log(user.getUserDetiales);
// user.getUserDetials(); // meth0d call


// Object Literal

const user = {
    "username": "manoj89",
    "loginCount": 4,
    "signedIn": true,
    "getUserDetiales": function(){
        console.log(`Username: ${this.username}`);
    },
    "getUserDetiale": function(){
        console.log(`Username: ${this.username}`);
    }
}

user.getUserDetiales();
user.getUserDetiales();

// Objects are collection of properties and methods.
