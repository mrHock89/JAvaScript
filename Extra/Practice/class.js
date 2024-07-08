// function User(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// User.prototype.encriptPasseord = function(){
//     return `${this.password}as3242`;
// }

// User.prototype.toUppercase = function(){
//     return `${this.username.toUpperCase()}`;
// }

// const userOne = new User("maonj4893", "nmakfds34@gmail.com", "ddfsa3242");

// // console.log(userOne);
// console.log(userOne.encriptPasseord());

// console.log(`Using Class`);

// class User{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encriptPassword(){
//         return `${this.password}739`;
//     }

//     toUppercase(){
//         return `${this.username.toUpperCase()}`;
//     }
// }

// // constructing object from user
// const userOne = new User("manjdskf438", "sdfks34@gmail.com", "njh32");

// console.log(userOne.encriptPassword());

//Inheritance
console.log(`Inheritance using class`);

class User{
    constructor(username){
        this.username = username;
    }
    
    logMe(){
        console.log(`USERNAME is ${this.username}.`);
    }

}
// const userOne = new User("manoj78");
// console.log(userOne);
// userOne.logMe();

class Teacher extends User{
    constructor(username, email, password){
        // this.username = username; // unable to get reference form User
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const userTwo = new Teacher("manoj53", "mdskn34@gmail.com", "kjfsda43");
console.log(userTwo);
userTwo.logMe();
console.log(userTwo instanceof Teacher);