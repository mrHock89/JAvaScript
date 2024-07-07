const user = {
    username: "manoj89",
    loginCount: 4,
    signedIn: true,
    getUserDetials: function() {
        console.log(`Username: ${this.username}`);
    }

};

console.log(user.username);
console.log(user['username']);
// console.log(user.getUserDetiales);
user.getUserDetials();