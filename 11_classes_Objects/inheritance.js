class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

// Inheritance

class Teacher extends User {
    constructor(username, email, password){
        // getting username from user
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

// creating a object from Teacher class
const userOne = new Teacher("manoj74", "manojfrj45@gamil.com", "dfnkads324");
const userTwo = new User("anirban4");
console.log(userOne === userTwo);
console.log(userOne instanceof User);
// console.log(userOne);
// userOne.logMe();
// userOne.addCourse();
// user.addCourse();
userTwo.logMe();