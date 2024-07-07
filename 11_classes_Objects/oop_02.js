function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this;
}

// const userOne = new User("manoj89", 12, true);
// const userTwo = new User("hsidfas", 10, false);
// // console.log(userOne);
// // console.log(userTwo);
// console.log(userOne.constructor);