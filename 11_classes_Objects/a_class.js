// Class is syntactical sugar
// class is impelemented in ES6

// class Decleration
class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }
    encriptPassword(){
        return `${this.password}abcewe`;
    }

    // creating a method to change user name to UPPER case
    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

// using class
const userOne = new User("kiku87", "dsnkfjds34@gmail.com", "942cscsnsdbcs");
// console.log(userOne);
// console.log(userOne.encriptPassword());
console.log(userOne.changeUsername());