function user(username){
    this.username = username;

}
user.prototype.logMe = function(){
    console.log(`USERNAME is ${this.username}`);
}

// inheritance

function Teacher(username, email, password){
    user.call(this, username);
    this.email = email;
    this.password = password;
}
Teacher.prototype.addCourse = function(){
    console.log(`A new course was added by ${this.username}`);
}

// const userOne = new Teacher("maonij98", "ndsfka4@gmail.com", "ndkf3543@!");
const userOne = new Teacher("maonij98", "ndsfka4@gmail.com", "ndkf3543@!");
const usewo = new user("anirban4");

console.log(userOne);
// console.log(userOne.logMe());

userOne.addCourse();
userOne.logMe();